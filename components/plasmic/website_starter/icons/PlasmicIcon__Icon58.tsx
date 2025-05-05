/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon58Icon(props: Icon58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 58 62"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.025 8.203a12.5 12.5 0 0113.551-.258l.399.258 14 9.413A12.501 12.501 0 0155.5 27.99V47c0 6.904-5.596 12.5-12.5 12.5H15C8.096 59.5 2.5 53.904 2.5 47V27.99l.006-.39a12.501 12.501 0 015.52-9.984l14-9.413z"
        }
        stroke={"#8165D6"}
        strokeWidth={"5"}
      ></path>

      <path
        d={
          "M41.656 40.5C39.781 43.5 35.731 48 29 48c-6.731 0-10.781-5-12.656-7.5"
        }
        stroke={"#8165D6"}
        strokeWidth={"4.8"}
      ></path>

      <ellipse
        cx={"41.656"}
        cy={"40.5"}
        rx={"2.344"}
        ry={"2.5"}
        fill={"#8165D6"}
      ></ellipse>

      <ellipse
        cx={"16.344"}
        cy={"40.5"}
        rx={"2.344"}
        ry={"2.5"}
        fill={"#8165D6"}
      ></ellipse>
    </svg>
  );
}

export default Icon58Icon;
/* prettier-ignore-end */
