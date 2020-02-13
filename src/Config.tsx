import {
  CbRoute,
  Link,
  TicketEvent,
  Ticket,
  Styles,
  Screen
} from "./types/_index";
import { CartItem } from "./components/ShoppingCartPresenter/@types";

const landingimage01 = require("./assets/image_harvestfest_05.png");
const section01_image = require("./assets/image_harvestfest_04.png");
const section02_image = require("./assets/image_harvestfest_03.jpg");
const section03_image = require("./assets/image_harvestfest_01.jpg");
const daysky01 = require("./assets/daysky01.jpg");
const wintertrees01 = require("./assets/wintertrees01.jpg");
const wintertrees02 = require("./assets/wintertrees02.jpg");
const loopable_landscape_grass01 = require("./assets/loopable_landscape_grass01.jpg");
const endlessbackground_chemistry01 = require("./assets/endlessbackground_chemistry01.jpg");
const endlesssbackground_wintertrees04 = require("./assets/endlesssbackground_wintertrees04.jpg");

export type Config = {
  version: string;
  routes: CbRoute[];
  topbar: {
    title: string;
    logo: string;
    links: CbRoute[];
  };
  footer: {
    socialLinks: Link[];
    legalLinks: Link[];
    logo: string;
    links: Link[];
  };
  screens: { [key: string]: Screen };
  events: TicketEvent[];
  cart: CartItem[];
  styles: Styles;
  f: { [key: string]: (...args: any[]) => void };
};
const config: Config = {
  version: "0.1.0",
  routes: [
    { label: "Home", route: "/", exact: true },
    { label: "Routes", route: "/event", exact: true }
  ],
  topbar: {
    title: "",
    logo: "",
    links: [
      { label: "Home", route: "/", exact: true },
      { label: "About", route: "/about", exact: true },
      { label: "Events", route: "/events", exact: true }
    ]
  },
  footer: {
    socialLinks: [],
    legalLinks: [],
    logo: "",
    links: []
  },
  screens: {
    home: {
      route: {
        label: "Home",
        route: "/",
        exact: true
      },
      landing: {
        image: landingimage01,
        imageBlurb: "landingimage01 image blurb!",
        cta: {
          label: "Buy Now!",
          clickHandler: () => alert("Landing clickHandler")
        }
      },
      sections: [
        {
          title: "Section 1",
          blurb:
            "Blurb 1 body, blah, blah, blah, blah, blah, blah, blah, blah...",
          image: section01_image,
          cta: {
            label: "Buy Now!",
            clickHandler: () => alert("Section1 clickHandler")
          }
        },
        {
          title: "Section 2",
          blurb:
            "Blurb 2 body, blah, blah, blah, blah, blah, blah, blah, blah...",
          image: section02_image
        },
        {
          title: "Section 3",
          blurb:
            "Blurb 3 body, blah, blah, blah, blah, blah, blah, blah, blah...",
          image: section03_image,
          cta: {
            label: "Section 3!",
            clickHandler: () => alert("Section3 clickHandler")
          }
        }
      ]
    }
  },
  events: [],
  cart: [],
  styles: {
    primaryColor: "#0029e0",
    primaryLightColor: "#6755ff",
    primaryDarkColor: "#0000ad",
    secondaryColor: "#e0b700",
    secondaryLightColor: "#ffe94b",
    secondaryDarkColor: "#aa8800",
    primaryTextColor: "#ffffff",
    secondaryTextColor: "#000000",
    images: {
      landingimage01: landingimage01,
      section01_image: section01_image,
      section02_image: section02_image,
      section03_image: section03_image,
      wintertrees01: wintertrees01,
      wintertrees02: wintertrees02,
      daysky01: daysky01,
      loopable_landscape_grass01: loopable_landscape_grass01,
      endlessbackground_chemistry01: endlessbackground_chemistry01,
      endlesssbackground_wintertrees04: endlesssbackground_wintertrees04
    }
  },
  f: {}
};
export default config;
