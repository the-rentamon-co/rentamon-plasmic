/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon89IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon89Icon(props: Icon89IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 74"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"24"}
        height={"2"}
        x={"6"}
        y={"32"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
      ></rect>

      <circle
        cx={"35.5"}
        cy={"32.5"}
        r={"5.5"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
      ></circle>

      <rect
        width={"15"}
        height={"2"}
        x={"77"}
        y={"48"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(-180 77 48)"}
      ></rect>

      <circle
        cx={"56.5"}
        cy={"47.5"}
        r={"5.5"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
        transform={"rotate(180 56.5 47.5)"}
      ></circle>

      <rect
        width={"19"}
        height={"2"}
        x={"26"}
        y={"44"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(-180 26 44)"}
      ></rect>

      <rect
        width={"8"}
        height={"2"}
        x={"26"}
        y={"42"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(90 26 42)"}
      ></rect>

      <circle
        cx={"28.5"}
        cy={"54.5"}
        r={"5.5"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
      ></circle>

      <path
        stroke={"#ACACAC"}
        strokeWidth={"8"}
        d={
          "M52 11h16a8 8 0 0 1 8 8v43a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V19a8 8 0 0 1 8-8h39.5"
        }
      ></path>

      <rect
        width={"16"}
        height={"2"}
        x={"55"}
        y={"3"}
        stroke={"#ACACAC"}
        strokeWidth={"4.5"}
        rx={"1"}
        transform={"rotate(90 55 3)"}
      ></rect>

      <rect
        width={"16"}
        height={"2"}
        x={"27"}
        y={"3"}
        stroke={"#ACACAC"}
        strokeWidth={"4.5"}
        rx={"1"}
        transform={"rotate(90 27 3)"}
      ></rect>
    </svg>
  );
}

export default Icon89Icon;
/* prettier-ignore-end */
