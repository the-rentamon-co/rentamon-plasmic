/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon62IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon62Icon(props: Icon62IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 56 78"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3 28C3 14.193 14.193 3 28 3v0c13.807 0 25 11.193 25 25v43.571A3.429 3.429 0 0149.571 75H6.43A3.429 3.429 0 013 71.571V28z"
        }
        stroke={"#ACACAC"}
        strokeWidth={"5"}
      ></path>
    </svg>
  );
}

export default Icon62Icon;
/* prettier-ignore-end */
