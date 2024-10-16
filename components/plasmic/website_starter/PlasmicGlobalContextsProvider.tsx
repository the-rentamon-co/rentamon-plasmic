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
                  : "@font-face {\n  font-family: 'Estedad';\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-Thin.ttf');\n  font-weight: 100;\n}\n@font-face {\n  font-family: 'Estedad';\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-ExtraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: 'Estedad';\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: 'Estedad';\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-Regular.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: 'Estedad';\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'Estedad';\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-SemiBold.ttf');\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Estedad';\n  src: url('https://rentamon-files.storage.iran.liara.space/fonts/estedad/Estedad-ExtraBold.ttf');\n  font-weight: 800;\n}\n\nbody {\n  direction: rtl;\n  font-family: 'Estedad';\n}\n\n@media (max-width: 767px) {\n  body::-webkit-scrollbar {\n    display: none; \n  }\n}\n\n.negative {\n  direction: ltr;\n}\n"
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
