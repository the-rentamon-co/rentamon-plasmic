/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon92IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon92Icon(props: Icon92IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 78 81"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"24"}
        height={"2"}
        x={"5"}
        y={"36"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
      ></rect>

      <circle
        cx={"34.5"}
        cy={"36.5"}
        r={"5.5"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
      ></circle>

      <rect
        width={"15"}
        height={"2"}
        x={"76"}
        y={"49"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(-180 76 49)"}
      ></rect>

      <circle
        cx={"55.5"}
        cy={"48.5"}
        r={"5.5"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
        transform={"rotate(180 55.5 48.5)"}
      ></circle>

      <rect
        width={"19"}
        height={"2"}
        x={"25"}
        y={"48"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(-180 25 48)"}
      ></rect>

      <rect
        width={"8"}
        height={"2"}
        x={"25"}
        y={"46"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(90 25 46)"}
      ></rect>

      <circle
        cx={"27.5"}
        cy={"58.5"}
        r={"5.5"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
      ></circle>

      <path
        stroke={"#ACACAC"}
        strokeWidth={"6"}
        d={
          "M51 12h12c6.627 0 12 5.373 12 12v42c0 6.627-5.373 12-12 12H15C8.373 78 3 72.627 3 66V24c0-6.627 5.373-12 12-12h35.5"
        }
      ></path>

      <rect
        width={"16"}
        height={"2"}
        x={"54"}
        y={"3"}
        stroke={"#ACACAC"}
        strokeWidth={"4.5"}
        rx={"1"}
        transform={"rotate(90 54 3)"}
      ></rect>

      <rect
        width={"16"}
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

export default Icon92Icon;
/* prettier-ignore-end */
