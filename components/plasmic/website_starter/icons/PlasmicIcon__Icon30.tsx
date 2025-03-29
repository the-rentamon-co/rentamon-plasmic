/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon30Icon(props: Icon30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"#fcfcfc"}
      viewBox={"0 0 16 16"}
      xmlns={"http://www.w3.org/2000/svg"}
      stroke={"#fcfcfc"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        data-name={"Path 157"}
        d={
          "M13.5 1H13V.5a.5.5 0 00-1 0V1H4V.5a.5.5 0 00-1 0V1h-.5A2.5 2.5 0 000 3.5v10A2.5 2.5 0 002.5 16h11a2.5 2.5 0 002.5-2.5v-10A2.5 2.5 0 0013.5 1zm0 1a1.5 1.5 0 011.408 1H13V2zM12 2v1H4V2zM2.5 2H3v1H1.092A1.5 1.5 0 012.5 2zm11 13h-11A1.5 1.5 0 011 13.5V4h14v9.5a1.5 1.5 0 01-1.5 1.5zm-2.672-7.622L8.707 9.5l2.121 2.122a.5.5 0 01-.707.707L8 10.207l-2.121 2.122a.5.5 0 01-.707-.707L7.293 9.5 5.172 7.378a.5.5 0 11.707-.707L8 8.793l2.121-2.122a.5.5 0 11.707.707z"
        }
      ></path>
    </svg>
  );
}

export default Icon30Icon;
/* prettier-ignore-end */
