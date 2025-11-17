/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavMenuSvgBlueSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavMenuSvgBlueSvgIcon(props: NavMenuSvgBlueSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 34"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"2.4"}
        d={
          "M6.602 15.6a8 8 0 0 1 16 0v13.818A2.18 2.18 0 0 1 20.42 31.6H8.783a2.18 2.18 0 0 1-2.181-2.182z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeWidth={"3.2"}
        d={
          "M1.602 14.6c0-7.18 5.82-13 13-13s13 5.82 13 13v15.945c0 .799-.648 1.447-1.448 1.447H3.05c-.8 0-1.447-.648-1.447-1.447z"
        }
      ></path>
    </svg>
  );
}

export default NavMenuSvgBlueSvgIcon;
/* prettier-ignore-end */
