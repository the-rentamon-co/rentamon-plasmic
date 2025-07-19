/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star8Icon(props: Star8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 31"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m17 0 3.817 11.747h12.351l-9.992 7.26 3.816 11.746L17 23.493l-9.992 7.26 3.816-11.746-9.992-7.26h12.351z"
        }
      ></path>
    </svg>
  );
}

export default Star8Icon;
/* prettier-ignore-end */
