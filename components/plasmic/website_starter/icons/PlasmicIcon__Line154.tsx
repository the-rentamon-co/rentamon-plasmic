/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line154IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line154Icon(props: Line154IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 254 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeDasharray={"1 1"}
        d={"M0 1h254.007"}
      ></path>
    </svg>
  );
}

export default Line154Icon;
/* prettier-ignore-end */
