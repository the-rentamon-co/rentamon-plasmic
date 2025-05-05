/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon63IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon63Icon(props: Icon63IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 58 80"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 29C4 15.193 15.193 4 29 4v0c13.807 0 25 11.193 25 25v43.571A3.429 3.429 0 0150.571 76H7.43A3.429 3.429 0 014 72.571V29z"
        }
        stroke={"#ACACAC"}
        strokeWidth={"7"}
      ></path>
    </svg>
  );
}

export default Icon63Icon;
/* prettier-ignore-end */
