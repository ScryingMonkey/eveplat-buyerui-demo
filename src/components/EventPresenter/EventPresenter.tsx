import React, { useContext } from "react";
import { TicketEvent } from "../../types/_index";
import { AppContext } from "../../GlobalState";
import { FlipCard } from "../_index";
import "./EventPresenter.css";
import Loading from "../Loading/Loading";

const EventPresenter = () => {
  const { events } = useContext(AppContext);

  return (
    <div>
      {events.length > 0 ? (
        <div className="eventpresenter-layout">
          {events.map((e: TicketEvent, i) => (
            <div key={i}>
              <FlipCard
                title={e.name}
                description={e.buyerDescription}
                links={[{ url: `/event/${e.id}`, text: "Find out more" }]}
              />
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default EventPresenter;
