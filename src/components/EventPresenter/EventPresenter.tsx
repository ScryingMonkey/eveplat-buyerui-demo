import React, { useContext } from "react";
import { TicketEvent } from "../../types/_index";
import { AppContext } from "../../GlobalState";
import { FlipCard } from "../_index";
import "./EventPresenter.css";

const EventPresenter = () => {
  const { events } = useContext(AppContext);

  return (
    <div className="eventpresenter-layout">
      {events.map((e: TicketEvent) => (
        <div className="eventpresenter-event ">
          <FlipCard
            title={e.name}
            description={e.buyerDescription}
            links={[]}
          />
        </div>
      ))}
    </div>
  );
};
export default EventPresenter;
