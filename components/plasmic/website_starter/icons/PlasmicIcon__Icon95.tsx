/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon95IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon95Icon(props: Icon95IconProps) {
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
          "M51 12h16a8 8 0 0 1 8 8v50a8 8 0 0 1-8 8H11a8 8 0 0 1-8-8V20a8 8 0 0 1 8-8h39.5"
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
        strokeWidth={"5"}
        d={
          "M36.774 51.048a5.247 5.247 0 1 0 5.247-9.089 5.247 5.247 0 0 0-5.248 9.089"
        }
      ></path>

      <path
        stroke={"#ACACAC"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"5"}
        d={
          "m21.774 38.298 1.704-2.952a3.69 3.69 0 0 1 5.026-1.347c3.036 1.753 5.516.323 5.51-3.192a3.68 3.68 0 0 1 3.682-3.666l3.86.015c1.78-.023 3.22 1.434 3.243 3.214l.001.425c-.01 3.505 2.471 4.938 5.518 3.186l.368-.212c1.553-.87 3.535-.352 4.405 1.201l1.943 3.336a3.68 3.68 0 0 1-1.334 5.022c-3.046 1.752-3.045 4.615-.01 6.367a3.69 3.69 0 0 1 1.348 5.027l-1.704 2.951a3.69 3.69 0 0 1-5.027 1.347c-3.035-1.752-5.516-.322-5.51 3.192a3.673 3.673 0 0 1-3.682 3.666l-3.86-.015c-1.78.024-3.22-1.434-3.243-3.214v-.425c.01-3.504-2.472-4.937-5.518-3.185l-.369.212c-1.553.87-3.535.351-4.404-1.202l-1.943-3.335a3.68 3.68 0 0 1 1.334-5.022c3.046-1.752 3.044-4.615.009-6.368a3.69 3.69 0 0 1-1.347-5.026"
        }
      ></path>
    </svg>
  );
}

export default Icon95Icon;
/* prettier-ignore-end */
