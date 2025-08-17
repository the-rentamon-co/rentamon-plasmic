/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon81IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon81Icon(props: Icon81IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 17 9"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M15.5 1.5l-4.879 4.879a3 3 0 01-4.242 0L1.5 1.5"}
        stroke={"#ACACAC"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Icon81Icon;
/* prettier-ignore-end */
