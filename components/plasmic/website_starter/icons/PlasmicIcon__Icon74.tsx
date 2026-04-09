/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon74IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon74Icon(props: Icon74IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 31 67"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M28.5 2.5L7.4 23.6c-5.468 5.468-5.468 14.332 0 19.8l21.1 21.1"}
        stroke={"#ACACAC"}
        strokeWidth={"6"}
      ></path>
    </svg>
  );
}

export default Icon74Icon;
/* prettier-ignore-end */
