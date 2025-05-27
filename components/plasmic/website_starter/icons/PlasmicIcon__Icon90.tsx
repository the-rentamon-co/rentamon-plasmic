/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon90IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon90Icon(props: Icon90IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 81"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"24"}
        height={"2"}
        x={"6"}
        y={"35"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
      ></rect>

      <circle
        cx={"35.5"}
        cy={"35.5"}
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
        y={"47"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(-180 26 47)"}
      ></rect>

      <rect
        width={"8"}
        height={"2"}
        x={"26"}
        y={"45"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(90 26 45)"}
      ></rect>

      <circle
        cx={"28.5"}
        cy={"57.5"}
        r={"5.5"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
      ></circle>

      <path
        stroke={"#ACACAC"}
        strokeWidth={"8"}
        d={
          "M52 11h12c6.627 0 12 5.373 12 12v42c0 6.627-5.373 12-12 12H16C9.373 77 4 71.627 4 65V23c0-6.627 5.373-12 12-12h35.5"
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

export default Icon90Icon;
/* prettier-ignore-end */
