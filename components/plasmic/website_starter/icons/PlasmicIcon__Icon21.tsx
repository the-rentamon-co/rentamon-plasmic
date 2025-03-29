/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"9"} cy={"9"} r={"9"} fill={"#2EB773"}></circle>

      <path
        d={
          "M10.96 7.285c2.8 2.8 3.385 2.216 1.752 3.85-2.13 2.13-4.412 1.904-5.959.358-1.546-1.547-1.712-3.888.3-5.901 1.634-1.633 1.108-1.107 3.908 1.693z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M8.703 5.979l2.418-2.419a.54.54 0 01.764.764L9.467 6.742l-.764-.763zM4.962 13.29a.72.72 0 010-1.018l1.053-1.053c.262.409.61.756 1.018 1.018L5.98 13.29a.72.72 0 01-1.018 0zm6.546-4.511l2.418-2.419a.54.54 0 01.764.764l-2.418 2.418-.764-.763z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
