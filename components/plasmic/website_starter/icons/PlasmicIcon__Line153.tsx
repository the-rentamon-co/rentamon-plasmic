/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line153IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line153Icon(props: Line153IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 345 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeDasharray={"1 1"}
        d={"M0 1h345"}
      ></path>
    </svg>
  );
}

export default Line153Icon;
/* prettier-ignore-end */
