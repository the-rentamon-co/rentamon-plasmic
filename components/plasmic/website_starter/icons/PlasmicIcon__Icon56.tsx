/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon56Icon(props: Icon56IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      viewBox={"0 0 24 24"}
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 15s1.6 2 4 2 4-2 4-2m-13-.4v-2.47c0-1.149 0-1.723.148-2.252a4 4 0 01.636-1.3c.327-.442.78-.794 1.687-1.5l2.6-2.022c1.405-1.093 2.108-1.64 2.884-1.85a4 4 0 012.09 0c.776.21 1.479.757 2.884 1.85l2.6 2.022c.907.706 1.36 1.058 1.687 1.5.29.391.505.832.636 1.3.148.53.148 1.104.148 2.252v2.47c0 2.24 0 3.36-.436 4.216a4 4 0 01-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 01-1.748-1.748C3 17.96 3 16.84 3 14.6z"
        }
        stroke={"#acacac"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon56Icon;
/* prettier-ignore-end */
