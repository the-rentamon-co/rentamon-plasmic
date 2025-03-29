/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon47Icon(props: Icon47IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      viewBox={"0 0 24 24"}
      role={"img"}
      xmlns={"http://www.w3.org/2000/svg"}
      aria-labelledby={"supportIconTitle"}
      stroke={"#acacac"}
      strokeWidth={"2"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      fill={"none"}
      color={"#000"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21 12h-2a2 2 0 00-2 2v2a2 2 0 002 2h0a2 2 0 002-2v-4a9 9 0 00-18 0v4a2 2 0 002 2h0a2 2 0 002-2v-2a2 2 0 00-2-2H3"
        }
      ></path>

      <path d={"M21 14v4c0 2-.667 3-2 3h-5"}></path>
    </svg>
  );
}

export default Icon47Icon;
/* prettier-ignore-end */
