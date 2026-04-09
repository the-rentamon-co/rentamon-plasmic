/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon85IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon85Icon(props: Icon85IconProps) {
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

      <rect
        width={"24"}
        height={"2"}
        x={"5"}
        y={"34"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
      ></rect>

      <circle
        cx={"34.5"}
        cy={"34.5"}
        r={"5.5"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
      ></circle>

      <rect
        width={"15"}
        height={"2"}
        x={"76"}
        y={"50"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(-180 76 50)"}
      ></rect>

      <circle
        cx={"55.5"}
        cy={"49.5"}
        r={"5.5"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
        transform={"rotate(180 55.5 49.5)"}
      ></circle>

      <rect
        width={"19"}
        height={"2"}
        x={"25"}
        y={"46"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(-180 25 46)"}
      ></rect>

      <rect
        width={"8"}
        height={"2"}
        x={"25"}
        y={"44"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        rx={"1"}
        transform={"rotate(90 25 44)"}
      ></rect>

      <circle
        cx={"27.5"}
        cy={"56.5"}
        r={"5.5"}
        stroke={"#ACACAC"}
        strokeWidth={"3.5"}
      ></circle>
    </svg>
  );
}

export default Icon85Icon;
/* prettier-ignore-end */
