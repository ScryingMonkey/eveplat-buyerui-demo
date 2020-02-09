import React, { useState, useContext, useEffect } from "react";
import "./ShoppingCartPresenter.css";
import { AppContext } from "../../GlobalState";
import { TicketEvent } from "../../types/_index";

const ShoppingCartPresenter: React.FC<{ match: any }> = props => {
  const [cart, setCart] = useState(useContext(AppContext).cart);
  let event: TicketEvent = new TicketEvent();

  useEffect(() => {
    console.log("...cart updated");
    console.log(cart);
    //update context.cart
  }, [cart]);

  return (
    <div className="ShoppingCartPresenter">
      ShoppingCartPresenter
      <div>Event Name: {event.name}</div>
    </div>
  );
};
export default ShoppingCartPresenter;
