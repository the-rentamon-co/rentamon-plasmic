// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon34Icon(props: Icon34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"#fcfcfc"}
      viewBox={"-7.5 -3.5 24 24"}
      xmlns={"http://www.w3.org/2000/svg"}
      preserveAspectRatio={"xMinYMin"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "jam jam-thunder-f"
      )}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.708 4.968h1.789a1.5 1.5 0 011.378 2.09l-3.96 9.243a1.049 1.049 0 01-2.012-.413v-6.92L1.45 8.923A1.5 1.5 0 010 7.423V1.5A1.5 1.5 0 011.5 0h2.708a1.5 1.5 0 011.5 1.5v3.468z"
        }
      ></path>
    </svg>
  );
}

export default Icon34Icon;
/* prettier-ignore-end */
