// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.1 8.803V14a4.1 4.1 0 01-4.1 4.1H5A4.1 4.1 0 01.9 14V8.803a4.1 4.1 0 012.192-3.63l6-3.153a4.1 4.1 0 013.816 0l6 3.154A4.1 4.1 0 0121.1 8.803z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.8"}
      ></path>

      <path
        d={"M14.25 14v4.25h-6.5V14a3.25 3.25 0 016.5 0z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
