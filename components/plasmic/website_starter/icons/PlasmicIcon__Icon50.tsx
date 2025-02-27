// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon50Icon(props: Icon50IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 22 21"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={".9"}
        y={".9"}
        width={"20.2"}
        height={"19.2"}
        rx={"4.1"}
        stroke={"#ACACAC"}
        strokeWidth={"1.8"}
      ></rect>

      <path
        d={
          "M11.358 10.802a2.901 2.901 0 110-5.802 2.901 2.901 0 010 5.802zm-5.385 5.396c0-3.205 2.412-2.901 5.388-2.901 2.975 0 5.387-.304 5.387 2.9"
        }
        stroke={"#ACACAC"}
        strokeWidth={"1.8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon50Icon;
/* prettier-ignore-end */
