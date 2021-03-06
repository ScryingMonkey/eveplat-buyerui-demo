type EventField = {
  valueKey: keyof TicketEvent;
  label: string;
  type: string;
  min?: string;
  step?: string;
};
type EventFields = { [key: string]: EventField };

export default class TicketEvent {
  name: string = "";
  id: string = "";
  venueId: string = "";
  status: string = "Active";
  creatorId: string = "";
  startDate: Date = new Date();
  endDate: Date = new Date();
  ticketsAvailable: number = NaN;
  ticketsSold: number = NaN;
  eventCost: number = NaN;
  ticketPrice: number = NaN;
  buyerDescription: string = "";
  managerDescription: string = "";
  image: string = "";

  static eventFields: EventFields = {
    name: { valueKey: "name", label: "Name", type: "text" },
    id: { valueKey: "id", label: "ID", type: "text" },
    status: { valueKey: "status", label: "Status", type: "text" },
    creatorId: { valueKey: "creatorId", label: "Creator ID", type: "text" },
    startDate: { valueKey: "startDate", label: "Start Date", type: "date" },
    endDate: { valueKey: "endDate", label: "End Date", type: "date" },
    ticketCost: {
      valueKey: "ticketPrice",
      label: "Ticket Cost",
      type: "number",
      min: "0",
      step: "0.01"
    },
    ticketsAvailable: {
      valueKey: "ticketsAvailable",
      label: "Tickets Available",
      type: "number",
      min: "0"
    },
    ticketsSold: {
      valueKey: "ticketsSold",
      label: "Tickets Sold",
      type: "number",
      min: "0"
    },
    eventCost: {
      valueKey: "eventCost",
      label: "Event Production Cost",
      type: "number",
      min: "0",
      step: "0.01"
    },
    venueId: { valueKey: "venueId", label: "Venue", type: "text" },
    buyerDescription: {
      valueKey: "buyerDescription",
      label: "Buyer's Description",
      type: "longtext"
    },
    managerDescription: {
      valueKey: "managerDescription",
      label: "Manager's Description",
      type: "longtext"
    }
  };

  constructor() {
    this.id = "";
  }
  clone(): TicketEvent {
    const nte = new TicketEvent();
    nte.setConfig({ ...this });
    return nte;
  }
  clear() {
    const nte = new TicketEvent();
    Object.getOwnPropertyNames(nte).forEach(k => (this[k] = nte[k]));
  }
  setConfig(o: { [key: string]: any }): void {
    Object.keys(o).forEach(k => {
      switch (k) {
        case "endDate":
        case "startDate":
          // console.log(`updating startdate: <${typeof o[k]}> ${o[k]}`)
          this[k] = typeof o[k] == "string" ? o[k] : o[k].toDate();
          break;
        case "ticketsAvailable":
        case "ticketSold":
        case "ticketCost":
          this[k] = parseInt(o[k]);
          break;
        default:
          this[k] = o[k];
      }
    });
    // console.log(this);
  }
  getObject() {
    // let o: { [key: string]: any } = {};
    // Object.keys(this).forEach(k => o[k] = this[k]);
    // return o;
    return { ...this };
  }
}
