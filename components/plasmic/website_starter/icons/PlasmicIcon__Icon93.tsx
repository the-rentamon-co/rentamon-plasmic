/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon93IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon93Icon(props: Icon93IconProps) {
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

      <path
        stroke={"#ACACAC"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"4"}
        d={
          "M36.774 51.048a5.247 5.247 0 1 0 5.247-9.089 5.247 5.247 0 0 0-5.248 9.089"
        }
      ></path>

      <path
        stroke={"#ACACAC"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"4"}
        d={
          "m23.483 39.093 1.54-2.666a3.333 3.333 0 0 1 4.54-1.217c2.741 1.583 4.981.292 4.976-2.883a3.32 3.32 0 0 1 3.325-3.31l3.487.013c1.608-.021 2.908 1.295 2.929 2.903v.384c-.01 3.165 2.233 4.46 4.984 2.877l.333-.192c1.403-.785 3.193-.317 3.978 1.085L55.33 39.1a3.32 3.32 0 0 1-1.205 4.536c-2.751 1.582-2.75 4.168-.008 5.751a3.333 3.333 0 0 1 1.216 4.54l-1.539 2.666a3.333 3.333 0 0 1-4.54 1.216c-2.741-1.583-4.982-.291-4.976 2.883a3.32 3.32 0 0 1-3.326 3.311l-3.486-.013c-1.608.02-2.908-1.295-2.93-2.903v-.384c.01-3.165-2.232-4.46-4.983-2.877l-.333.191c-1.403.786-3.193.318-3.979-1.085l-1.754-3.013a3.32 3.32 0 0 1 1.205-4.535c2.751-1.582 2.75-4.169.008-5.751a3.333 3.333 0 0 1-1.217-4.54"
        }
      ></path>
    </svg>
  );
}

export default Icon93Icon;
/* prettier-ignore-end */
