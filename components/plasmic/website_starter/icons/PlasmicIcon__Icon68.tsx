/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon68IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon68Icon(props: Icon68IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 22 41"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M19.5 2.5L5.037 16.964a5 5 0 000 7.07L19.5 38.502"}
        stroke={"#ACACAC"}
        strokeWidth={"6"}
      ></path>
    </svg>
  );
}

export default Icon68Icon;
/* prettier-ignore-end */
