import React, { createContext, useState, useEffect } from "react";
import config from "./Config";
import { TicketEvent } from "./types/_index";
import fb from "./Firebase/Firebase";

export const AppContext = createContext<typeof config>({ ...config });

const GlobalState = props => {
  const [context, setContext] = useState({ ...config });

  const f = {
    setContext: (v: any) => setContext(v),
    addItemToCart: (item: any) => {
      setContext({ ...context, cart: [...context.cart, item] });
      console.log(`> addItemToCart: (item: ${item})`);
      console.log(`...new cart:`);
      console.log(context.cart);
    },
    removeItemFromCart: (item: any) => {
      setContext({ ...context, cart: context.cart.filter(x => x !== item) });
      console.log(`> removeItemFromCart: (item: ${item})`);
      console.log(`...new cart:`);
      console.log(context.cart);
    }
  };

  useEffect(() => {
    console.log("GlobalState mounted.  Setting up db.");
    // set up subscription to events collections and map to state.events
    fb.subscribeToCollectionFromFirestore(
      "events",
      TicketEvent,
      (tes: TicketEvent[]) => {
        setContext({ ...context, events: tes });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(`...events updated:`);
    console.log(context.events);
  }, [context.events]);

  return (
    <div>
      <AppContext.Provider value={{ ...context, f: f }}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};
export default GlobalState;
