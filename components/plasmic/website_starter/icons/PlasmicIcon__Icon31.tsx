/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon31Icon(props: Icon31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      viewBox={"0 0 24 24"}
      data-name={"Flat Color"}
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon flat-color"
      )}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.82 9.18A2 2 0 0017 8h-1.81l1.33-3.26a2 2 0 00-.19-1.84 2.06 2.06 0 00-1.71-.9h-4.34a2 2 0 00-1.91 1.27l-3.23 8a2 2 0 00.2 1.83 2.06 2.06 0 001.71.9h2.76L8 20.74a1 1 0 00.5 1.15A1.12 1.12 0 009 22a1 1 0 00.76-.35l8.8-10.37a2 2 0 00.26-2.1z"
        }
        fill={"#fcfcfc"}
      ></path>
    </svg>
  );
}

export default Icon31Icon;
/* prettier-ignore-end */
