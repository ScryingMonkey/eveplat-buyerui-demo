import React, { useContext, useEffect } from "react";
import { TicketEvent } from "../../types/_index";
import { AppContext } from "../../GlobalState";
import { FlipCard, TileButton } from "../_index";
import "./EventPresenter.css";
import Loading from "../Loading/Loading";
import { useHistory } from "react-router";

const EventPresenter = () => {
  const { events, styles } = useContext(AppContext);

  const mobile = window.matchMedia("(max-width: 400px)").matches;
  useEffect(() => {
    console.log(`mq: ${mobile}`);
    console.log(mobile);
  }, [mobile]);

  return (
    <div>
      {events.length > 0 ? (
        <div className="eventpresenter-layout">
          {events.map((e: TicketEvent, i) => (
            <div key={i}>
              {mobile ? (
                <EventTileButton
                  event={e}
                  img={styles.images.section01_image}
                />
              ) : (
                <FlipCard
                  title={e.name}
                  description={e.buyerDescription}
                  links={[{ url: `/event/${e.id}`, text: "Find out more" }]}
                />
              )}
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

const EventTileButton: React.FC<{ event: TicketEvent; img: any }> = ({
  event,
  img
}) => {
  const history = useHistory();
  const openEventDetail = () => {
    history.push(`/event/${event.id}`);
  };
  return (
    <TileButton label={event.name} img={img} clickHandler={openEventDetail} />
  );
};
