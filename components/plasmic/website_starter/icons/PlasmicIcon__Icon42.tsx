// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon42Icon(props: Icon42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 29 29"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"currentColor"} d={"M0 0h29v29H0z"}></path>

      <defs>
        <pattern
          id={"fRCB4bpc0RvGa"}
          patternContentUnits={"objectBoundingBox"}
          width={"1"}
          height={"1"}
        >
          <use xlinkHref={"#fRCB4bpc0RvGb"} transform={"scale(.02)"}></use>
        </pattern>

        <image
          id={"fRCB4bpc0RvGb"}
          width={"50"}
          height={"50"}
          preserveAspectRatio={"none"}
          xlinkHref={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFklEQVR4nO2ZT4hNURzHDwqDlERE0iz8SRb+FQkrJZuRkIWFsJCFhT8Lf/LGSGQhFInF8MbM4vf9nvvqLZ6FxaRoGqHIWFgoFvIn/80QM3N1uNObbnfuvPveufe+qfetb73FPd9zPu+9e/78jlI11VRTYspkMqO11itIHiZ5E8Bdkg+Nvc83ABwCsNw8q6pNIjKNZBOA1yTdEv0KwEnTNu3xq+bm5vEkTwDojgDg9w+SxwuFwrhUIERkPsknFQD43QVgUdIQ60h+sQjxzwA+k1ybCASANSR7bEMMgukmuTpWCJL1JD/FBcGiP+ZyubmxQIjIGAAPEoBwvV+mw/RpHQTA/qQg6FlE9lmFyOfzE0i+TxoEwDvTtzUQ880kDcEizF5rICQ7UwTpsAKhtZ4OoD9FkH4zBhsgW9KCYBFmc8UgZi+VNgjJYzZArlUByFUbIG0BwX0AXgycNWwZ/zP7AvprswEivtCvWuulKiaJyDIA33x9inUQAJdVzAJwJQmQRhWzADRaBwGQG/EgABpI9vpCj1gbcekgrqkHADgnIpMihTmOM5XkB1/YH1MlUSmAsOhOEakrOYzkAV/AbwDbVAJCOIjxwShh8DU+H+voo4G0Rwm7bX2bYA/kWZSwC77GL0VkVqwEcYCQXGBebl/ATzMVmppWqTla6w0kb5HUIrI9cRAjkqeDggA8L6V2S3J3QNujiYMYATgVsJaYATWoYQTgTcAgerzdQpi7hgF5rMqRiCwm+dQXdt913VEhberiOlkCyKpypbVeHxC4I6yN5dqwO7CemR2yqkSmEOADeau1njnU8yKyylQNLUJ8L3XCCJXWeqX/4APgnoiMDYGZISJ7AJwhebZMNwHYZaUIMSCSFwO+qUKk/U81KJvNTgTwKOB9MX+7ejWSpLWeHTS1ekfUTGtr6xQ1UuQ4zsKQO0OzVhTM/ozkTgBbB9tc5oS9V4lLROZUMMW2x3JtUK7MJaY3I/WWsbAtUdUmx3HmkbwO4FeEhS39q+mh1NLSMpnkJgCXAOS92cxfiLtDcuOQITXVVJOyrb8PwAlP1d4n1AAAAABJRU5ErkJggg=="
          }
        ></image>
      </defs>
    </svg>
  );
}

export default Icon42Icon;
/* prettier-ignore-end */
