/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon67IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon67Icon(props: Icon67IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 33 63"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M30.5 2.509L5.042 27.965a5 5 0 000 7.07L30.5 60.492"}
        stroke={"#ACACAC"}
        strokeWidth={"6"}
      ></path>
    </svg>
  );
}

export default Icon67Icon;
/* prettier-ignore-end */
