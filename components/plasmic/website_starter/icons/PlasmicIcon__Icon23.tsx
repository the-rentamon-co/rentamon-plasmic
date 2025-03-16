// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon23Icon(props: Icon23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 18"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.414 15.908l7.792-7.142m0 0l7.792-7.14m-7.792 7.14l-7.792-7.14m7.792 7.14l7.792 7.142"
        }
        stroke={"#7E7E7E"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon23Icon;
/* prettier-ignore-end */
