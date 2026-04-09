/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon69IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon69Icon(props: Icon69IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 35 67"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M32.5 2.5L5.035 29.966a5 5 0 000 7.07L32.499 64.5"}
        stroke={"#ACACAC"}
        strokeWidth={"6"}
      ></path>
    </svg>
  );
}

export default Icon69Icon;
/* prettier-ignore-end */
