/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon61IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon61Icon(props: Icon61IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 50 72"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25 2c12.703 0 23 10.297 23 23v43.571c0 .79-.64 1.429-1.429 1.429H3.43C2.639 70 2 69.36 2 68.571V25C2 12.297 12.297 2 25 2z"
        }
        stroke={"#ACACAC"}
        strokeWidth={"4"}
      ></path>
    </svg>
  );
}

export default Icon61Icon;
/* prettier-ignore-end */
