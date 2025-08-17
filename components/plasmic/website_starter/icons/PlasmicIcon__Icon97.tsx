/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon97IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon97Icon(props: Icon97IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 78"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"24"}
        height={"1.972"}
        x={"5"}
        y={"35.542"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={".986"}
      ></rect>

      <ellipse
        cx={"34.5"}
        cy={"36.035"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
        rx={"5.5"}
        ry={"5.424"}
      ></ellipse>

      <rect
        width={"15"}
        height={"1.972"}
        x={"76"}
        y={"48.361"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={".986"}
        transform={"rotate(-180 76 48.361)"}
      ></rect>

      <ellipse
        cx={"55.5"}
        cy={"47.868"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
        rx={"5.5"}
        ry={"5.424"}
        transform={"rotate(180 55.5 47.868)"}
      ></ellipse>

      <rect
        width={"19"}
        height={"1.972"}
        x={"25"}
        y={"47.375"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={".986"}
        transform={"rotate(-180 25 47.375)"}
      ></rect>

      <rect
        width={"7.889"}
        height={"2"}
        x={"25"}
        y={"45.403"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(90 25 45.403)"}
      ></rect>

      <ellipse
        cx={"27.5"}
        cy={"57.729"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
        rx={"5.5"}
        ry={"5.424"}
      ></ellipse>

      <path
        stroke={"#ACACAC"}
        strokeWidth={"7"}
        d={
          "M52 12h14c5.523 0 10 4.477 10 10v42c0 5.523-4.477 10-10 10H14C8.477 74 4 69.523 4 64V22c0-5.523 4.477-10 10-10h37.5"
        }
      ></path>

      <rect
        width={"15.778"}
        height={"2"}
        x={"54"}
        y={"3"}
        stroke={"#ACACAC"}
        strokeWidth={"4.5"}
        rx={"1"}
        transform={"rotate(90 54 3)"}
      ></rect>

      <rect
        width={"15.778"}
        height={"2"}
        x={"26"}
        y={"3"}
        stroke={"#ACACAC"}
        strokeWidth={"4.5"}
        rx={"1"}
        transform={"rotate(90 26 3)"}
      ></rect>
    </svg>
  );
}

export default Icon97Icon;
/* prettier-ignore-end */
