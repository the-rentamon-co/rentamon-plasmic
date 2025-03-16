// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue = "mobile" | "tablet" | "smallMobile";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export const useScreenVariants = createUseScreenVariants(true, {
  mobile: "(max-width:500px)",
  tablet: "(max-width:1200px)",
  smallMobile: "(max-width:350px)",
});

export default ScreenContext;
/* prettier-ignore-end */
