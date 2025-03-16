// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon25Icon(props: Icon25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={".707"}
        y={"8.59"}
        width={"2.101"}
        height={"8.304"}
        rx={"1.051"}
        transform={"rotate(-43.946 .707 8.59)"}
        fill={"currentColor"}
        stroke={"currentColor"}
      ></rect>

      <rect
        x={"17.835"}
        y={".707"}
        width={"2.101"}
        height={"17.795"}
        rx={"1.051"}
        transform={"rotate(46.054 17.835 .707)"}
        fill={"currentColor"}
        stroke={"currentColor"}
      ></rect>
    </svg>
  );
}

export default Icon25Icon;
/* prettier-ignore-end */
