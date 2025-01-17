// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicInstant,
  DefaultInstantProps
} from "./plasmic/website_starter/PlasmicInstant";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface InstantProps extends Omit<DefaultInstantProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultInstantProps altogether and have
// total control over the props for your component.
export interface InstantProps extends DefaultInstantProps {}

function Instant_(props: InstantProps, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicInstant to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicInstant are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all InstantProps here, but feel free
  // to do whatever works for you.

  return <PlasmicInstant root={{ ref }} {...props} />;
}

const Instant = React.forwardRef(Instant_);
export default Instant;
