// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.648 16.14h5.7M11.5 5.765v6.602m0 0l3.326-3.3m-3.325 3.3l-3.325-3.3M11.5 21.9c5.744 0 10.4-4.656 10.4-10.4 0-5.744-4.656-10.4-10.4-10.4-5.744 0-10.4 4.656-10.4 10.4 0 5.744 4.656 10.4 10.4 10.4z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
