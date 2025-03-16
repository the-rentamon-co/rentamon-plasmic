// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.781 10.932h7.781m0 0l-3.335 3.31m3.335-3.31l-3.335-3.31m3.335-3.312V3.208A2.215 2.215 0 0014.339 1H3.223A2.215 2.215 0 001 3.207v15.45c0 1.218.995 2.206 2.223 2.206H14.34a2.215 2.215 0 002.223-2.207v-1.103"
        }
        stroke={"currentColor"}
        strokeWidth={"1.8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
