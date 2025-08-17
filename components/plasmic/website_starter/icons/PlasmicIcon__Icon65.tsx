/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon65IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon65Icon(props: Icon65IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 82 94"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16 44c0-13.807 11.193-25 25-25v0c13.807 0 25 11.193 25 25v42a5 5 0 01-5 5H21a5 5 0 01-5-5V44z"
        }
        stroke={"#8165D6"}
        strokeWidth={"5"}
      ></path>

      <path
        d={
          "M4 41C4 20.566 20.566 4 41 4v0c20.434 0 37 16.566 37 37v45.381a4.12 4.12 0 01-4.119 4.119H8.119A4.12 4.12 0 014 86.381V41z"
        }
        stroke={"#8165D6"}
        strokeWidth={"7"}
      ></path>
    </svg>
  );
}

export default Icon65Icon;
/* prettier-ignore-end */
