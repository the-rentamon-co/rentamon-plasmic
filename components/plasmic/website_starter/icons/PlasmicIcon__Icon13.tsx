// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.248 8.858H5.105m9.835.982c-1.43 0-2.588-1.063-2.588-2.373 0-1.31 1.159-2.373 2.588-2.373 1.43 0 2.59 1.062 2.59 2.373 0 1.31-1.16 2.372-2.59 2.372zM5.105 6.01h3.107"
        }
        stroke={"currentColor"}
        strokeWidth={"1.8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <rect
        x={".9"}
        y={".9"}
        width={"20.2"}
        height={"19.2"}
        rx={"4.1"}
        stroke={"currentColor"}
        strokeWidth={"1.8"}
      ></rect>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
