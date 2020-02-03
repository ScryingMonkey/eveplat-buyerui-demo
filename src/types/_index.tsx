import TicketEvent from "./TicketEvent";
export { TicketEvent };

export type Link = {
  label: string;
  url: string;
  image?: string;
};
export type CbRoute = {
  label: string;
  route: string;
  exact?: boolean;
};
export type Section = {
  title?: string;
  blurb?: string;
  image?: string;
  cta?: Cta;
};
export type Cta = {
  label: string;
  clickHandler: () => void;
};
export type Screen = {
  route: CbRoute;
  landing: {
    image: string;
    imageBlurb: string;
    cta: Cta;
  };
  sections: Section[];
};
export type Styles = {
  primaryColor: string;
  primaryLightColor: string;
  primaryDarkColor: string;
  secondaryColor: string;
  secondaryLightColor: string;
  secondaryDarkColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
};
