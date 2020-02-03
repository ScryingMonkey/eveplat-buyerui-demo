import React, { createContext, useState, useEffect } from "react";
import config from "./Config";
import { TicketEvent } from "./types/_index";
import fb from "./Firebase/Firebase";

export const AppContext = createContext<typeof config>({ ...config });

const GlobalState = props => {
  const [context, setContext] = useState({ ...config });

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
      <AppContext.Provider value={{ ...context }}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};
export default GlobalState;
