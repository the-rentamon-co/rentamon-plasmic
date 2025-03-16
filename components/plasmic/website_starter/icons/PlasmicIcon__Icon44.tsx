// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon44Icon(props: Icon44IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.9 9.269a4.1 4.1 0 012.04-3.545l6-3.486a4.1 4.1 0 014.12 0l6 3.486a4.1 4.1 0 012.04 3.545V16a4.1 4.1 0 01-4.1 4.1H5A4.1 4.1 0 01.9 16V9.269z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.8"}
      ></path>

      <path
        d={"M7.75 15.053a3.25 3.25 0 016.5 0v5.197h-6.5v-5.197z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>
    </svg>
  );
}

export default Icon44Icon;
/* prettier-ignore-end */
