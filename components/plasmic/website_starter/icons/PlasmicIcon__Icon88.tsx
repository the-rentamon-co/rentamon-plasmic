/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon88IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon88Icon(props: Icon88IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 77"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"72"}
        height={"59"}
        x={"4"}
        y={"14"}
        stroke={"#ACACAC"}
        strokeWidth={"8"}
        rx={"15"}
      ></rect>

      <rect
        width={"16"}
        height={"2"}
        x={"59"}
        y={"3"}
        stroke={"#ACACAC"}
        strokeWidth={"4.5"}
        rx={"1"}
        transform={"rotate(90 59 3)"}
      ></rect>

      <rect
        width={"16"}
        height={"2"}
        x={"23"}
        y={"3"}
        stroke={"#ACACAC"}
        strokeWidth={"4.5"}
        rx={"1"}
        transform={"rotate(90 23 3)"}
      ></rect>

      <path
        stroke={"#ACACAC"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"4"}
        d={"M40.065 48.72a5.72 5.72 0 1 0 0-11.441 5.72 5.72 0 0 0 0 11.441"}
      ></path>

      <path
        stroke={"#ACACAC"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"4"}
        d={
          "M21 44.677v-3.356a3.634 3.634 0 0 1 3.623-3.623c3.452 0 4.863-2.44 3.127-5.435a3.62 3.62 0 0 1 1.335-4.939l3.3-1.888c1.506-.896 3.45-.362 4.347 1.145l.21.362c1.716 2.994 4.538 2.994 6.273 0l.21-.362c.897-1.507 2.842-2.04 4.348-1.145l3.299 1.888a3.62 3.62 0 0 1 1.335 4.94c-1.735 2.993-.324 5.434 3.127 5.434a3.634 3.634 0 0 1 3.623 3.623v3.356a3.634 3.634 0 0 1-3.623 3.623c-3.451 0-4.862 2.441-3.127 5.435a3.617 3.617 0 0 1-1.335 4.939l-3.299 1.888c-1.506.896-3.452.362-4.348-1.144l-.21-.363c-1.716-2.994-4.538-2.994-6.273 0l-.21.363c-.896 1.506-2.841 2.04-4.348 1.144l-3.299-1.888a3.62 3.62 0 0 1-1.335-4.939c1.736-2.994.325-5.435-3.127-5.435A3.634 3.634 0 0 1 21 44.677"
        }
      ></path>
    </svg>
  );
}

export default Icon88Icon;
/* prettier-ignore-end */
