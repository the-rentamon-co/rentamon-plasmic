/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon28Icon(props: Icon28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g stroke={"currentColor"} strokeLinecap={"round"} strokeWidth={"1.5"}>
        <path
          strokeLinejoin={"round"}
          strokeMiterlimit={"10"}
          d={
            "M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5"
          }
        ></path>

        <path d={"m18.77 7.769-5.547 4.286a2 2 0 0 1-2.446 0L5.23 7.77"}></path>
      </g>
    </svg>
  );
}

export default Icon28Icon;
/* prettier-ignore-end */
