/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon84IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon84Icon(props: Icon84IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 78 75"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"72"}
        height={"59"}
        x={"3"}
        y={"13"}
        stroke={"#ACACAC"}
        strokeWidth={"5"}
        rx={"15"}
      ></rect>

      <rect
        width={"16"}
        height={"2"}
        x={"58"}
        y={"2"}
        stroke={"#ACACAC"}
        strokeWidth={"4"}
        rx={"1"}
        transform={"rotate(90 58 2)"}
      ></rect>

      <rect
        width={"16"}
        height={"2"}
        x={"22"}
        y={"2"}
        stroke={"#ACACAC"}
        strokeWidth={"4"}
        rx={"1"}
        transform={"rotate(90 22 2)"}
      ></rect>

      <rect
        width={"25"}
        height={"2"}
        x={"4"}
        y={"33"}
        stroke={"#ACACAC"}
        strokeWidth={"2"}
        rx={"1"}
      ></rect>

      <circle
        cx={"33.5"}
        cy={"33.5"}
        r={"5"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
      ></circle>

      <rect
        width={"19"}
        height={"2"}
        x={"75"}
        y={"49"}
        stroke={"#ACACAC"}
        strokeWidth={"2"}
        rx={"1"}
        transform={"rotate(-180 75 49)"}
      ></rect>

      <circle
        cx={"51.5"}
        cy={"48.5"}
        r={"5"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
        transform={"rotate(180 51.5 48.5)"}
      ></circle>

      <rect
        width={"19"}
        height={"2"}
        x={"21"}
        y={"45"}
        stroke={"#ACACAC"}
        strokeWidth={"2"}
        rx={"1"}
        transform={"rotate(-180 21 45)"}
      ></rect>

      <rect
        width={"9"}
        height={"2"}
        x={"21"}
        y={"43"}
        stroke={"#ACACAC"}
        strokeWidth={"2"}
        rx={"1"}
        transform={"rotate(90 21 43)"}
      ></rect>

      <circle
        cx={"19.5"}
        cy={"56.5"}
        r={"5"}
        stroke={"#ACACAC"}
        strokeWidth={"3"}
      ></circle>
    </svg>
  );
}

export default Icon84Icon;
/* prettier-ignore-end */
