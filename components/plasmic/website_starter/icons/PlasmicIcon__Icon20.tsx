// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
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

      <circle cx={"9"} cy={"9"} r={"9"} fill={"#D9212B"}></circle>

      <path
        d={
          "M10.969 7.285c2.8 2.8 3.384 2.216 1.75 3.85-2.13 2.13-4.411 1.904-5.958.358-1.546-1.547-1.712-3.888.3-5.901 1.634-1.633 1.107-1.107 3.908 1.693z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M8.71 5.978l2.42-2.418a.54.54 0 01.763.764L9.475 6.742l-.764-.764zM4.962 13.29a.72.72 0 010-1.017l1.054-1.054c.262.409.61.756 1.018 1.018L5.98 13.291a.72.72 0 01-1.018 0zm6.546-4.511l2.418-2.419a.54.54 0 01.764.764l-2.418 2.418-.764-.763zM4.484 2.753l10.837 10.836-.764.764L3.72 3.516z"
        }
        fill={"#fff"}
      ></path>

      <path
        fill={"#fff"}
        d={"M4.484 2.753l10.837 10.836-.764.764L3.72 3.516z"}
      ></path>

      <path
        fill={"#D9212B"}
        d={"M3.766 3.473L14.602 14.31l-.763.763L3.002 4.237z"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
