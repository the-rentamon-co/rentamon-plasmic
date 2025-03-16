// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon26Icon(props: Icon26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.166 7.631a2.072 2.072 0 110-4.144 2.072 2.072 0 010 4.144zm-.002 9.858c-2.517 0-4.559-2.198-4.559-4.91 0-2.711 2.042-2.455 4.56-2.455 2.517 0 4.558-.256 4.558 2.455 0 2.712-2.04 4.91-4.559 4.91zM5.557 7.631a2.072 2.072 0 110-4.144 2.072 2.072 0 010 4.144zm.002 9.858C3.04 17.489 1 15.29 1 12.579c0-2.711 2.041-2.455 4.559-2.455 2.518 0 4.559-.256 4.559 2.455 0 2.712-2.041 4.91-4.56 4.91z"
        }
        opacity={".7"}
        stroke={"#ACACAC"}
        strokeWidth={"1.8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11.358 6.802a2.901 2.901 0 110-5.802 2.901 2.901 0 010 5.802z"}
        stroke={"#ACACAC"}
        strokeWidth={"1.8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.36 18c-2.975 0-5.387-2.598-5.387-5.802 0-3.205 2.412-2.901 5.388-2.901 2.975 0 5.387-.304 5.387 2.9 0 3.205-2.412 5.803-5.388 5.803z"
        }
        fill={"#F2F2F2"}
        stroke={"#ACACAC"}
        strokeWidth={"1.8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon26Icon;
/* prettier-ignore-end */
