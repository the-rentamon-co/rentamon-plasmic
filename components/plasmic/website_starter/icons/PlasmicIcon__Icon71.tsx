/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon71IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon71Icon(props: Icon71IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 26 26"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M13 16.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"}
        stroke={"#ACACAC"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M2.168 13.953v-1.906c0-1.127.92-2.059 2.058-2.059 1.961 0 2.763-1.386 1.777-3.087a2.057 2.057 0 01.758-2.806l1.874-1.073c.856-.509 1.961-.205 2.47.65l.12.206c.975 1.701 2.578 1.701 3.564 0l.119-.206c.51-.855 1.614-1.159 2.47-.65l1.874 1.073a2.057 2.057 0 01.759 2.806c-.986 1.7-.185 3.087 1.776 3.087 1.127 0 2.059.921 2.059 2.059v1.906a2.065 2.065 0 01-2.059 2.059c-1.96 0-2.762 1.386-1.776 3.087a2.055 2.055 0 01-.759 2.806l-1.874 1.072c-.856.51-1.96.206-2.47-.65l-.12-.205c-.974-1.701-2.578-1.701-3.563 0l-.12.205c-.509.856-1.614 1.16-2.47.65l-1.874-1.072a2.057 2.057 0 01-.758-2.806c.986-1.7.184-3.087-1.777-3.087a2.064 2.064 0 01-2.058-2.059z"
        }
        stroke={"#ACACAC"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon71Icon;
/* prettier-ignore-end */
