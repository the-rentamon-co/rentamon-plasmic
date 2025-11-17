/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavCalendarSvgBlueSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavCalendarSvgBlueSvgIcon(
  props: NavCalendarSvgBlueSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.8"}
        d={
          "M12.898 2.733V.9m0 1.833v1.833m0-1.833h-4.5m-7.5 5.499v8.248c0 1.012.896 1.833 2 1.833h14c1.105 0 2-.82 2-1.833V8.232zm0 0V4.566c0-1.012.896-1.833 2-1.833h2m0-1.833v3.666m13.997 3.666V4.566c0-1.012-.896-1.833-2-1.833h-.5"
        }
      ></path>
    </svg>
  );
}

export default NavCalendarSvgBlueSvgIcon;
/* prettier-ignore-end */
