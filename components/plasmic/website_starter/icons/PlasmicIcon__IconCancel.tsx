/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCancelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCancelIcon(props: IconCancelIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"3"}
        d={"m2 16 7-7m0 0 7-7M9 9 2 2m7 7 7 7"}
      ></path>
    </svg>
  );
}

export default IconCancelIcon;
/* prettier-ignore-end */
