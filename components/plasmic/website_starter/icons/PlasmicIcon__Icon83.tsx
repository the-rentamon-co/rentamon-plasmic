/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon83IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon83Icon(props: Icon83IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 37 35"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M35.024 15.326h1.76l-3.245 4.383L36.784 24h-1.76l-2.423-3.204L30.2 24h-1.767l3.237-4.291-3.237-4.383h1.76l2.407 3.303 2.423-3.303z"
        }
        fill={"#ACACAC"}
      ></path>

      <circle cx={"11"} cy={"5.5"} r={"5.5"} fill={"#ACACAC"}></circle>

      <path
        d={
          "M0 22.6A9.6 9.6 0 019.6 13h3.3a9.6 9.6 0 019.6 9.6 2.4 2.4 0 01-2.4 2.4H2.4A2.4 2.4 0 010 22.6z"
        }
        fill={"#ACACAC"}
      ></path>
    </svg>
  );
}

export default Icon83Icon;
/* prettier-ignore-end */
