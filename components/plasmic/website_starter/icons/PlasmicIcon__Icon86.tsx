/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon86IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon86Icon(props: Icon86IconProps) {
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
        width={"12"}
        height={"6"}
        x={"35"}
        y={"25"}
        fill={"#ACACAC"}
        rx={"3"}
      ></rect>

      <rect
        width={"12"}
        height={"6"}
        x={"18"}
        y={"25"}
        fill={"#ACACAC"}
        rx={"3"}
      ></rect>

      <rect
        width={"12"}
        height={"6"}
        x={"18"}
        y={"37"}
        fill={"#ACACAC"}
        rx={"3"}
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
        d={"M52.827 55.805a4.75 4.75 0 1 0 0-9.498 4.75 4.75 0 0 0 0 9.498"}
      ></path>

      <path
        stroke={"#ACACAC"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"4"}
        d={
          "M37 52.449v-2.786a3.017 3.017 0 0 1 3.008-3.008c2.865 0 4.037-2.027 2.596-4.512a3.006 3.006 0 0 1 1.108-4.1l2.739-1.568c1.25-.744 2.865-.3 3.61.95l.174.301c1.424 2.486 3.767 2.486 5.208 0l.174-.3c.744-1.251 2.359-1.695 3.61-.95l2.738 1.567a3.006 3.006 0 0 1 1.108 4.1c-1.44 2.485-.269 4.512 2.597 4.512a3.017 3.017 0 0 1 3.007 3.008v2.786a3.017 3.017 0 0 1-3.007 3.008c-2.866 0-4.037 2.026-2.597 4.511a3.003 3.003 0 0 1-1.108 4.1l-2.739 1.568c-1.25.744-2.865.3-3.609-.95l-.174-.3c-1.425-2.486-3.768-2.486-5.208 0l-.175.3c-.744 1.25-2.358 1.694-3.609.95l-2.739-1.567a3.006 3.006 0 0 1-1.108-4.1c1.44-2.486.27-4.512-2.596-4.512A3.017 3.017 0 0 1 37 52.449"
        }
      ></path>
    </svg>
  );
}

export default Icon86Icon;
/* prettier-ignore-end */
