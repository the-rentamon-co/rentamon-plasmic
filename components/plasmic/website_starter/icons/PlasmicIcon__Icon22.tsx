// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon22Icon(props: Icon22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"8.123"}
        cy={"9.869"}
        r={"7.373"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></circle>

      <path
        d={
          "M7.352 14V7.455h1.543V14H7.352zm.776-7.474a.9.9 0 01-.631-.243.783.783 0 01-.264-.593c0-.233.088-.43.264-.592a.891.891 0 01.63-.247.88.88 0 01.631.247c.176.162.264.36.264.592 0 .23-.088.428-.264.593a.89.89 0 01-.63.243z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon22Icon;
/* prettier-ignore-end */
