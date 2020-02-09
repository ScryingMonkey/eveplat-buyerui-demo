import TicketEvent from "./TicketEvent";
export default class Ticket {
  id: string;
  user: string;
  date: Date;
  price: number;
  event: TicketEvent;
}
