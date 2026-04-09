/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon82IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon82Icon(props: Icon82IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 31 16"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M29.5 2l-9.757 9.757a6 6 0 01-8.486 0L1.5 2"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
      ></path>
    </svg>
  );
}

export default Icon82Icon;
/* prettier-ignore-end */
