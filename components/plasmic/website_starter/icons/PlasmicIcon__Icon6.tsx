// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13 2.833V1m0 1.833v1.833m0-1.833H8.5M1 8.332v8.248c0 1.012.895 1.833 2 1.833h14c1.105 0 2-.82 2-1.833V8.332H1zm0 0V4.666c0-1.012.895-1.833 2-1.833h2M5 1v3.666m13.996 3.666V4.666c0-1.012-.895-1.833-2-1.833h-.5"
        }
        stroke={"currentColor"}
        strokeWidth={"1.8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
