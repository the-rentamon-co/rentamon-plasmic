/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line157IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line157Icon(props: Line157IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 269 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeDasharray={"1 1"}
        d={"M0 1h269"}
      ></path>
    </svg>
  );
}

export default Line157Icon;
/* prettier-ignore-end */
