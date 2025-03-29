/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"1.8"}
        d={"M.91 5.1h18.182"}
      ></path>

      <rect
        x={".9"}
        y={".9"}
        width={"18.2"}
        height={"13.2"}
        rx={"2.1"}
        stroke={"currentColor"}
        strokeWidth={"1.8"}
      ></rect>

      <path
        d={
          "M5.833 6.411l.54.045-.018.549c.342.018.684.102 1.026.252l-.117.684a3.234 3.234 0 00-.918-.207L6.31 9.39c.624.222 1.005.489 1.143.801.066.15.1.324.1.522 0 .36-.12.654-.36.882-.24.228-.553.375-.937.441l-.009.594h-.53l.008-.558a3.584 3.584 0 01-1.215-.243l.144-.648c.468.162.828.246 1.08.252l.027-1.503c-.378-.144-.68-.318-.909-.522-.222-.204-.333-.498-.333-.882 0-.39.12-.714.36-.972s.552-.426.936-.504l.018-.639zm-.639 2.088c0 .294.195.522.585.684l.027-1.404c-.408.108-.612.348-.612.72zm1.638 2.214c0-.228-.177-.42-.53-.576l-.028 1.233c.372-.102.558-.321.558-.657z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
