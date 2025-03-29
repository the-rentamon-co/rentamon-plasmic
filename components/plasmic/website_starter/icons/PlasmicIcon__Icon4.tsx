/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 21 18"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.569 16.562H3.07c-1.144 0-2.071-.85-2.071-1.898V6.123c0-1.049.927-1.898 2.071-1.898h14.5c1.144 0 2.07.85 2.07 1.898v8.541c0 1.048-.926 1.898-2.07 1.898z"
        }
        stroke={"#ACACAC"}
        strokeWidth={"1.8"}
      ></path>

      <path
        d={
          "M14.979 10.868c-.286 0-.518-.213-.518-.475s.232-.474.518-.474c.286 0 .518.212.518.474s-.232.475-.518.475z"
        }
        stroke={"#ACACAC"}
        strokeWidth={"1.8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M16.533 4.225V2.899c0-1.247-1.29-2.155-2.605-1.834L2.538 3.85C1.63 4.071 1 4.823 1 5.683v.44"
        }
        stroke={"#ACACAC"}
        strokeWidth={"1.8"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
