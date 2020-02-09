import React, { useEffect, useState, useContext } from "react";
import { TicketEvent } from "../../types/_index";
import { AppContext } from "../../GlobalState";
import { Loading, IncrementerButton, CtaButton } from "../_index";
import "./EventPresenter.css";

const EventPage: React.FC<{
  match: any;
}> = ({ match }) => {
  const { events, f } = useContext(AppContext);
  const [event, setEvent] = useState(
    events ? events.filter(e => e.id === match.params.eventId)[0] : null
  );
  const [q, setQ] = useState(0);

  const buyTickets = () => {
    alert(`buy ${q} tickets`);
  };
  useEffect(() => {
    setEvent(
      events ? events.filter(e => e.id === match.params.eventId)[0] : null
    );
    console.log("...event updated in EventPage");
    console.log(event);
  }, [event, events, match.params.eventId]);

  return (
    <div className="eventpage">
      {event ? (
        <div>
          <EventDetail event={event} />

          <div className="eventpage-addtickets">
            <div>Tickets for {event.name}</div>
            <IncrementerButton
              value={q}
              upfunc={() => setQ(q + 1)}
              downfunc={() => setQ(q > 0 ? q - 1 : 0)}
            />
          </div>
          <div className="eventpage-cta">
            <CtaButton label="Buy Tickets" clickHandler={buyTickets} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default EventPage;

const EventDetail: React.FC<{ event: TicketEvent }> = ({ event }) => {
  return (
    <div className="eventscreen-detail">
      <h1>{event.name}</h1>

      <div className="eventscren-stats-box">
        <span>
          Price: <b>{event.ticketPrice}</b>
        </span>
        <span>
          Tickets available: {event.ticketsAvailable} of{" "}
          {event.ticketsAvailable + event.ticketsSold}
        </span>
      </div>

      <div className="eventscreen-detail-desc">{event.buyerDescription}</div>
    </div>
  );
};
