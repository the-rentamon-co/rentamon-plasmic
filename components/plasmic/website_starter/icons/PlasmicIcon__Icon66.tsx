/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon66IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon66Icon(props: Icon66IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.731 5.333l-7.95 7.95c-.791.792-3.141 1.159-3.666.633-.525-.524-.167-2.875.625-3.666l7.958-7.959a2.148 2.148 0 013.581.656 2.151 2.151 0 01-.548 2.386z"
        }
        stroke={"#ACACAC"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.164 3.333H4.997a3.333 3.333 0 00-3.333 3.333V15a3.333 3.333 0 003.333 3.333h9.167c1.842 0 2.5-1.5 2.5-3.333v-4.167"
        }
        stroke={"#ACACAC"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon66Icon;
/* prettier-ignore-end */
