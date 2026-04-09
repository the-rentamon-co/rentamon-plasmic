/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavPropertiesSvgBlueSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavPropertiesSvgBlueSvgIcon(
  props: NavPropertiesSvgBlueSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"2.8"}
        d={
          "M22.398 19.735c-.905 1.488-3.75 3.314-7 3.314s-5.94-2.074-6.845-3.314M11.406 2.65 4.562 7.38c-1.977 1.366-3.163 3.653-3.163 6.1v9.568c0 4.06 3.203 7.351 7.155 7.351h13.691c3.951 0 7.154-3.291 7.154-7.351V13.48c0-2.447-1.185-4.734-3.162-6.1L19.39 2.65a6.995 6.995 0 0 0-7.984 0Z"
        }
      ></path>
    </svg>
  );
}

export default NavPropertiesSvgBlueSvgIcon;
/* prettier-ignore-end */
