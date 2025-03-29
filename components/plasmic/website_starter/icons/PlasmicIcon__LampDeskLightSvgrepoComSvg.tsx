/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LampDeskLightSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function LampDeskLightSvgrepoComSvgIcon(
  props: LampDeskLightSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 300 300"}
      version={"1.1"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M145 40h0c27.6 0 50 22.4 50 50v200M55 80l53.8-62.8c3.9-4.6 9.6-7.2 15.6-7.2h0c11.3 0 20.6 9.2 20.6 20.5 0 0 0 0 0 0V80H55zm190 210H145"
        }
        fill={"none"}
        stroke={"#2d3642"}
        strokeWidth={"20"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M225 190c0 5.5-4.5 10-10 10h-10v-20h10c5.5 0 10 4.5 10 10z"}
        fill={"#168c84"}
      ></path>
    </svg>
  );
}

export default LampDeskLightSvgrepoComSvgIcon;
/* prettier-ignore-end */
