/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavMenuSvgBlueSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavMenuSvgBlueSvg2Icon(props: NavMenuSvgBlueSvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 33"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"2"}
        d={
          "M6.3 15.3a8 8 0 1 1 16 0v13.818a2.18 2.18 0 0 1-2.18 2.182H8.483A2.18 2.18 0 0 1 6.3 29.118z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeWidth={"2.6"}
        d={
          "M1.3 14.3c0-7.18 5.821-13 13-13s13 5.82 13 13v15.945c0 .799-.647 1.447-1.447 1.447H2.749c-.8 0-1.447-.648-1.447-1.447z"
        }
      ></path>
    </svg>
  );
}

export default NavMenuSvgBlueSvg2Icon;
/* prettier-ignore-end */
