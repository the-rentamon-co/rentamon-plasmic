/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon24Icon(props: Icon24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 17 16"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"13.971"}
        y={".814"}
        width={"2.205"}
        height={"18.422"}
        rx={"1.102"}
        transform={"rotate(46.054 13.971 .814)"}
        fill={"#ACACAC"}
        stroke={"#ACACAC"}
      ></rect>

      <rect
        x={"15.402"}
        y={"13.734"}
        width={"2.205"}
        height={"18.422"}
        rx={"1.102"}
        transform={"rotate(135 15.402 13.734)"}
        fill={"#ACACAC"}
        stroke={"#ACACAC"}
      ></rect>
    </svg>
  );
}

export default Icon24Icon;
/* prettier-ignore-end */
