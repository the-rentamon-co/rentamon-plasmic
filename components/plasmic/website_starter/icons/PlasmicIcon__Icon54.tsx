/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon54IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon54Icon(props: Icon54IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      viewBox={"0 0 24 24"}
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 11l-4 4-2-2m-5 3.8v-5.348c0-.534 0-.801.065-1.05a2 2 0 01.28-.617c.145-.213.346-.39.748-.741l4.801-4.202c.746-.652 1.119-.978 1.538-1.102.37-.11.765-.11 1.135 0 .42.124.794.45 1.54 1.104l4.8 4.2c.403.352.603.528.748.74.127.19.222.398.28.618.065.249.065.516.065 1.05v5.352c0 1.118 0 1.677-.218 2.105a2 2 0 01-.875.873c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a1.999 1.999 0 01-.874-.873C4 18.48 4 17.92 4 16.8z"
        }
        stroke={"#acacac"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon54Icon;
/* prettier-ignore-end */
