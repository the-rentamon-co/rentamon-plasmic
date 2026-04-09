/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon73IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon73Icon(props: Icon73IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 22 21"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.94 2.237a4.1 4.1 0 013.877-.13l.243.13 6 3.487a4.1 4.1 0 012.04 3.545V16a4.1 4.1 0 01-4.1 4.1H5A4.1 4.1 0 01.9 16V9.269a4.1 4.1 0 011.809-3.4l.231-.145 6-3.487z"
        }
        stroke={"#ACACAC"}
        strokeWidth={"1.8"}
      ></path>

      <path
        d={
          "M11 11.803a3.25 3.25 0 013.25 3.25v5.197h-6.5v-5.197a3.25 3.25 0 013.25-3.25z"
        }
        stroke={"#ACACAC"}
        strokeWidth={"1.5"}
      ></path>
    </svg>
  );
}

export default Icon73Icon;
/* prettier-ignore-end */
