/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstantBookingSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstantBookingSvgIcon(props: InstantBookingSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M12.618 10.744a1 1 0 0 1 1.2 1.265l-.281.91a1 1 0 0 1-.791.692L2.532 15.312a.982.982 0 0 1-.402-1.921z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M6.182 23.29a1 1 0 0 1-.613.398c-.854.171-1.495-.768-1.025-1.502l6.97-10.885a1 1 0 0 1 .841-.461h.712a1 1 0 0 1 .816 1.578zM4.09 14.696a1 1 0 0 1-.748.442l-.829.07c-.86.072-1.402-.905-.884-1.596l7.816-10.44a.97.97 0 0 1 .623-.374c.831-.131 1.42.789.954 1.49z"
        }
      ></path>
    </svg>
  );
}

export default InstantBookingSvgIcon;
/* prettier-ignore-end */
