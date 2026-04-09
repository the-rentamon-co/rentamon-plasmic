/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M11.148 4L8 9.923l5-.846L10.083 15"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
      ></path>

      <rect
        x={".9"}
        y={".9"}
        width={"19.2"}
        height={"18.2"}
        rx={"4.1"}
        stroke={"currentColor"}
        strokeWidth={"1.8"}
      ></rect>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
