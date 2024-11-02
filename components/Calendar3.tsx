// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicCalendar3,
  DefaultCalendar3Props
} from "./plasmic/website_starter/PlasmicCalendar3";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface Calendar3Props extends Omit<DefaultCalendar3Props, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultCalendar3Props altogether and have
// total control over the props for your component.
export interface Calendar3Props extends DefaultCalendar3Props {}

function Calendar3_(props: Calendar3Props, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicCalendar3 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicCalendar3 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all Calendar3Props here, but feel free
  // to do whatever works for you.

  return <PlasmicCalendar3 root={{ ref }} {...props} />;
}

const Calendar3 = React.forwardRef(Calendar3_);
export default Calendar3;