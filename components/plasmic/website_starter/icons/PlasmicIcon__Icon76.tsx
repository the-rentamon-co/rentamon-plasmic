/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon76IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon76Icon(props: Icon76IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      viewBox={"0 0 24 24"}
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      transform={"matrix(0 1 1 0 0 0)"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 3.5V11 4.5a1.5 1.5 0 013 0V11 7.5a1.5 1.5 0 013 0V16a6 6 0 01-6 6h-1.127a6 6 0 01-4.104-1.623L3.81 15.73a1.74 1.74 0 112.42-2.5L8 15V6.5a1.5 1.5 0 113 0V11 3.5a1.5 1.5 0 013 0z"
        }
        stroke={"#acacac"}
        strokeWidth={"1.344"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon76Icon;
/* prettier-ignore-end */
