// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: 2Zx_RdVTcu-q/codeComponent
import { GrowthBook } from "@/fragment/growthbook"; // plasmic-import: oyqC-S2Y0_JR/codeComponent
import { Splunk } from "@/fragment/splunk"; // plasmic-import: 1L5rk5eEXbTQ/codeComponent
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;
  growthBookProps?: Partial<
    Omit<React.ComponentProps<typeof GrowthBook>, "children">
  >;
  splunkProps?: Partial<Omit<React.ComponentProps<typeof Splunk>, "children">>;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    fragmentProps,
    growthBookProps,
    splunkProps,
    antdConfigProviderProps,
    embedCssProps
  } = props;

  return (
    <Fragment
      {...fragmentProps}
      apiConfig={
        fragmentProps && "apiConfig" in fragmentProps
          ? fragmentProps.apiConfig!
          : {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              withCredentials: true
            }
      }
      previewApiConfig={
        fragmentProps && "previewApiConfig" in fragmentProps
          ? fragmentProps.previewApiConfig!
          : undefined
      }
      primaryColor={
        fragmentProps && "primaryColor" in fragmentProps
          ? fragmentProps.primaryColor!
          : "#000000"
      }
      rtl={fragmentProps && "rtl" in fragmentProps ? fragmentProps.rtl! : true}
    >
      <GrowthBook
        {...growthBookProps}
        apiHost={
          growthBookProps && "apiHost" in growthBookProps
            ? growthBookProps.apiHost!
            : undefined
        }
        clientKey={
          growthBookProps && "clientKey" in growthBookProps
            ? growthBookProps.clientKey!
            : undefined
        }
        previewAttributes={
          growthBookProps && "previewAttributes" in growthBookProps
            ? growthBookProps.previewAttributes!
            : undefined
        }
      >
        <Splunk
          {...splunkProps}
          defaultApiHost={
            splunkProps && "defaultApiHost" in splunkProps
              ? splunkProps.defaultApiHost!
              : undefined
          }
          defaultApiKey={
            splunkProps && "defaultApiKey" in splunkProps
              ? splunkProps.defaultApiKey!
              : undefined
          }
        >
          <AntdConfigProvider
            {...antdConfigProviderProps}
            borderRadius={
              antdConfigProviderProps &&
              "borderRadius" in antdConfigProviderProps
                ? antdConfigProviderProps.borderRadius!
                : 6
            }
            colorBgBase={
              antdConfigProviderProps &&
              "colorBgBase" in antdConfigProviderProps
                ? antdConfigProviderProps.colorBgBase!
                : "#ffffff"
            }
            colorError={
              antdConfigProviderProps && "colorError" in antdConfigProviderProps
                ? antdConfigProviderProps.colorError!
                : "#ff4d4f"
            }
            colorInfo={
              antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
                ? antdConfigProviderProps.colorInfo!
                : "#1677ff"
            }
            colorPrimary={
              antdConfigProviderProps &&
              "colorPrimary" in antdConfigProviderProps
                ? antdConfigProviderProps.colorPrimary!
                : "#327CE4"
            }
            colorSuccess={
              antdConfigProviderProps &&
              "colorSuccess" in antdConfigProviderProps
                ? antdConfigProviderProps.colorSuccess!
                : "#52c41a"
            }
            colorWarning={
              antdConfigProviderProps &&
              "colorWarning" in antdConfigProviderProps
                ? antdConfigProviderProps.colorWarning!
                : "#faad14"
            }
            controlHeight={
              antdConfigProviderProps &&
              "controlHeight" in antdConfigProviderProps
                ? antdConfigProviderProps.controlHeight!
                : 32
            }
            defaultDark={
              antdConfigProviderProps &&
              "defaultDark" in antdConfigProviderProps
                ? antdConfigProviderProps.defaultDark!
                : false
            }
            lineWidth={
              antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
                ? antdConfigProviderProps.lineWidth!
                : 1
            }
            loadingText={
              antdConfigProviderProps &&
              "loadingText" in antdConfigProviderProps
                ? antdConfigProviderProps.loadingText!
                : undefined
            }
            removeLoading={
              antdConfigProviderProps &&
              "removeLoading" in antdConfigProviderProps
                ? antdConfigProviderProps.removeLoading!
                : true
            }
            sizeStep={
              antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
                ? antdConfigProviderProps.sizeStep!
                : 4
            }
            sizeUnit={
              antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
                ? antdConfigProviderProps.sizeUnit!
                : 4
            }
            themeStyles={
              antdConfigProviderProps &&
              "themeStyles" in antdConfigProviderProps
                ? antdConfigProviderProps.themeStyles!
                : true
                ? {
                    fontFamily: "Estedad",
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    color: "#203647",
                    letterSpacing: "normal"
                  }
                : undefined
            }
            wireframe={
              antdConfigProviderProps && "wireframe" in antdConfigProviderProps
                ? antdConfigProviderProps.wireframe!
                : false
            }
          >
            <EmbedCss
              {...embedCssProps}
              css={
                embedCssProps && "css" in embedCssProps
                  ? embedCssProps.css!
                  : "@font-face {\r\n  font-family: 'Estedad';\r\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-Thin.ttf');\r\n  font-weight: 100;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Estedad';\r\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-ExtraLight.ttf');\r\n  font-weight: 200;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Estedad';\r\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-Light.ttf');\r\n  font-weight: 300;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Estedad';\r\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-Regular.ttf');\r\n  font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Estedad';\r\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-Medium.ttf');\r\n  font-weight: 500;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Estedad';\r\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-SemiBold.ttf');\r\n  font-weight: 600;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Estedad';\r\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-ExtraBold.ttf');\r\n  font-weight: 800;\r\n}\r\n\r\nbody {\r\n  direction: rtl;\r\n  font-family: 'Estedad';\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  body::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.negative {\r\n  direction: ltr;\r\n}\r\n\r\n.ant-modal-close-x {\r\n  display: none !important;\r\n}\r\n\r\n.ant-modal-close {\r\n  display: none !important;\r\n}\r\n\r\n\r\n/* \u062a\u0639\u0631\u06cc\u0641 \u0627\u0641\u06a9\u062a \u0686\u0634\u0645\u06a9 \u0632\u062f\u0646 */\r\n@keyframes blink {\r\n\r\n  0%,\r\n  100% {\r\n    opacity: 1;\r\n    /* \u0642\u0627\u0628\u0644 \u0645\u0634\u0627\u0647\u062f\u0647 */\r\n  }\r\n\r\n  50% {\r\n    opacity: 0;\r\n    /* \u0646\u0627\u067e\u062f\u06cc\u062f */\r\n  }\r\n}\r\n\r\n/* \u0627\u0633\u062a\u0627\u06cc\u0644 \u0639\u0646\u0635\u0631 */\r\n.element {\r\n  animation: blink 0.5s infinite;\r\n  /* \u062a\u06a9\u0631\u0627\u0631 \u0628\u06cc\u200c\u0646\u0647\u0627\u06cc\u062a \u0647\u0631 \u062f\u0648 \u062b\u0627\u0646\u06cc\u0647 */\r\n}\r\n\r\n\r\n.disable {\r\n  filter: saturate(0);\r\n  color: #acacac;\r\n  /* \u06a9\u0627\u0647\u0634 \u0627\u0634\u0628\u0627\u0639 \u0628\u0647 \u0635\u0641\u0631 */\r\n}\r\n\r\n\r\n\r\n.ant-modal-content {\r\n  border-radius: 30px !important;\r\n}\r\n\r\n.vh {\r\n  height: 100vh;\r\n  border-radius: 30px;\r\n}\r\n\r\n\r\n\r\n.rmdp-header-values {\r\n  font-size: 19px;\r\n}\r\n\r\n\r\n.\u03c1sw {\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n}\r\n\r\n.rmdp-arrow {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n.profileImage {\r\n  object-fit: cover;\r\n}\r\n\r\n\r\n#jajigaphone {\r\n  border-radius: 30px;\r\n}\r\n\r\n\r\n\r\n@keyframes slideRight {\r\n  0% {\r\n    transform: translateX(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(100%);\r\n  }\r\n}\r\n\r\n\r\n.card {\r\n  animation: slideRight 10s linear infinite;\r\n}\r\n\r\n\r\nclickable {\r\n  cursor: pointer;\r\n  /* \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u062a\u0631\u0646\u0632\u06cc\u0634\u0646 */\r\n\r\n}\r\n\r\n.clickable:active {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  transition: background-color 0.2s ease;\r\n  /* \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0631\u0646\u06af \u06a9\u0645\u200c\u0631\u0646\u06af */\r\n}"
              }
            >
              {children}
            </EmbedCss>
          </AntdConfigProvider>
        </Splunk>
      </GrowthBook>
    </Fragment>
  );
}
