// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: jfPuTUqbVaoo

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicPaymentError.module.css"; // plasmic-import: jfPuTUqbVaoo/css

createPlasmicElementProxy;

export type PlasmicPaymentError__VariantMembers = {};
export type PlasmicPaymentError__VariantsArgs = {};
type VariantPropType = keyof PlasmicPaymentError__VariantsArgs;
export const PlasmicPaymentError__VariantProps = new Array<VariantPropType>();

export type PlasmicPaymentError__ArgsType = {};
type ArgPropType = keyof PlasmicPaymentError__ArgsType;
export const PlasmicPaymentError__ArgProps = new Array<ArgPropType>();

export type PlasmicPaymentError__OverridesType = {
  paymentError?: Flex__<"div">;
  embedHtml?: Flex__<typeof Embed>;
  successful?: Flex__<typeof PlasmicImg__>;
  columns?: Flex__<"div">;
  linkbtn2?: Flex__<typeof AntdButton>;
};

export interface DefaultPaymentErrorProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPaymentError__RenderFunc(props: {
  variants: PlasmicPaymentError__VariantsArgs;
  args: PlasmicPaymentError__ArgsType;
  overrides: PlasmicPaymentError__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "sur",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "surveyform",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsaSuSwU8JUYf()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"paymentError"}
          data-plasmic-override={overrides.paymentError}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.paymentError
          )}
        >
          <Embed
            data-plasmic-name={"embedHtml"}
            data-plasmic-override={overrides.embedHtml}
            className={classNames("__wab_instance", sty.embedHtml)}
            code={
              "<script>\r\n        String.prototype.EntoFa = function() {\r\n            return this.replace(/\\d/g, d => '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'[d]);\r\n        }\r\n        function convertNumbersInPage() {\r\n            const elements = document.querySelectorAll('body *:not(script):not(style)');\r\n            elements.forEach(element => {\r\n                element.childNodes.forEach(node => {\r\n                    if (node.nodeType === Node.TEXT_NODE) {\r\n                        node.nodeValue = node.nodeValue.EntoFa();\r\n                    }\r\n                });\r\n            });\r\n        }\r\n    setTimeout(convertNumbersInPage, 1000);\r\n    </script>"
            }
          />

          <div className={classNames(projectcss.all, sty.freeBox__kyyXs)}>
            <div className={classNames(projectcss.all, sty.freeBox__eXxw)}>
              <PlasmicImg__
                data-plasmic-name={"successful"}
                data-plasmic-override={overrides.successful}
                alt={""}
                className={classNames(sty.successful)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? "140px"
                    : "240px"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/website_starter/images/group536Png.png",
                  fullWidth: 264,
                  fullHeight: 264,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__t2ZKr)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ay8Au
                )}
              >
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "\u067e\u0631\u062f\u0627\u062e\u062a \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f!"
                  : "\u067e\u0631\u062f\u0627\u062e\u062a \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f!"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__c9SjP
                )}
              >
                {hasVariant(globalVariants, "screen", "mobile") ? (
                  <React.Fragment>
                    {(() => {
                      try {
                        return ">> " + $ctx.fetchedData.list[0].tagline;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "\u0645\u062a\u0646 \u0645\u0639\u0631\u0641\u06cc \u0634\u0631\u06a9\u062a \u062c\u0627\u0628\u0627\u0645\u0627 \u0648 \u0628\u0647 \u0637\u0648\u0631 \u06a9\u0644\u06cc \u0627\u0647\u062f\u0627\u0641 \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0628\u0647 \u0637\u0648\u0631 \u062e\u0644\u0627\u0635\u0647 \u0646\u0648\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u062a\u0627 \u06a9\u0627\u0631\u0628\u0631 \u0628\u062a\u0648\u0627\u0646 \u0627\u0632 \u062e\u062f\u0645\u0627\u062a \u0648 \u0627\u0647\u062f\u0627\u0641 \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u0622\u06af\u0627\u0647 \u0634\u0648\u062f. \u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u062a\u0646 \u0645\u0639\u0631\u0641\u06cc \u0634\u0631\u06a9\u062a \u062c\u0627\u0628\u0627\u0645\u0627 \u0648 \u0628\u0647 \u0637\u0648\u0631 \u06a9\u0644\u06cc \u0627\u0647\u062f\u0627\u0641 \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0628\u0647 \u0637\u0648\u0631 \u062e\u0644\u0627\u0635\u0647 \u0646\u0648\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u062a\u0627 \u06a9\u0627\u0631\u0628\u0631 \u0628\u062a\u0648\u0627\u0646 \u0627\u0632 \u062e\u062f\u0645\u0627\u062a \u0648 \u0627\u0647\u062f\u0627\u0641 \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u0622\u06af\u0627\u0647 \u0634\u0648\u062f. ";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                ) : (
                  "\u0645\u0628\u0644\u063a \u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u0646\u0647\u0627\u06cc\u062a\u0627 \u0637\u06cc \u06f7\u06f2 \u0633\u0627\u0639\u062a \u0622\u06cc\u0646\u062f\u0647 \u0628\u0647 \u062d\u0633\u0627\u0628 \u0634\u0645\u0627 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0647\n\n\n\u062f\u0631\u0635\u0648\u0631\u062a \u0646\u06cc\u0627\u0632 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u062f\u0631 \u06a9\u0646\u0627\u0631\u062a\u0647\n\u06f0\u06f9\u06f0\u06f3\u06f8\u06f7\u06f7\u06f8\u06f6\u06f0\u06f6  \u0631\u0648\u0632\u0647\u0627\u06cc \u0627\u062f\u0627\u0631\u06cc \u0627\u0632 \u06f9 \u0627\u0644\u06cc \u06f1\u06f7"
                )}
              </div>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__dhKo)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hcVrF
                    )}
                  >
                    {"\u0646\u0627\u0645 \u067e\u0644\u062a\u0641\u0631\u0645"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__rsfYv)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tbVgA
                    )}
                  >
                    {"\u0646\u0627\u0645 \u067e\u0644\u062a\u0641\u0631\u0645"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__qjoa)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__flAnv
                    )}
                  >
                    {"\u0646\u0627\u0645 \u067e\u0644\u062a\u0641\u0631\u0645"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__o3DxZ)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zSZi
                    )}
                  >
                    {"\u0646\u0627\u0645 \u067e\u0644\u062a\u0641\u0631\u0645"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__yvRcN)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vq1Zc
                    )}
                  >
                    {"\u0646\u0627\u0645 \u067e\u0644\u062a\u0641\u0631\u0645"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__xjcOq)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qOEwH
                    )}
                  >
                    {"\u0646\u0627\u0645 \u067e\u0644\u062a\u0641\u0631\u0645"}
                  </div>
                </div>
                <div
                  className={classNames(projectcss.all, sty.column__m1ZQm)}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__wFeO0)}>
                {(
                  hasVariant(globalVariants, "screen", "mobile") ? true : false
                ) ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__puqxF
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile") ? (
                      "\u0645\u0628\u0644\u063a \u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u0646\u0647\u0627\u06cc\u062a\u0627 \u0637\u06cc \u06f7\u06f2 \u0633\u0627\u0639\u062a \u0622\u06cc\u0646\u062f\u0647 \u0628\u0647 \u062d\u0633\u0627\u0628\u062a \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0647\n\n\n\u062f\u0631\u0635\u0648\u0631\u062a \u0646\u06cc\u0627\u0632 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u062f\u0631 \u06a9\u0646\u0627\u0631\u062a\u0647\n\u06f0\u06f9\u06f0\u06f3\u06f8\u06f7\u06f7\u06f8\u06f6\u06f0\u06f6  \u0631\u0648\u0632\u0647\u0627\u06cc \u0627\u062f\u0627\u0631\u06cc \u06f9 \u0627\u0644\u06cc \u06f1\u06f7"
                    ) : (
                      <React.Fragment>
                        {(() => {
                          try {
                            return $ctx.fetchedData.list[0].description;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "\u0645\u062a\u0646 \u0645\u0639\u0631\u0641\u06cc \u0634\u0631\u06a9\u062a \u062c\u0627\u0628\u0627\u0645\u0627 \u0648 \u0628\u0647 \u0637\u0648\u0631 \u06a9\u0644\u06cc \u0627\u0647\u062f\u0627\u0641 \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0628\u0647 \u0637\u0648\u0631 \u062e\u0644\u0627\u0635\u0647 \u0646\u0648\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u062a\u0627 \u06a9\u0627\u0631\u0628\u0631 \u0628\u062a\u0648\u0627\u0646 \u0627\u0632 \u062e\u062f\u0645\u0627\u062a \u0648 \u0627\u0647\u062f\u0627\u0641 \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u0622\u06af\u0627\u0647 \u0634\u0648\u062f. \u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u062a\u0646 \u0645\u0639\u0631\u0641\u06cc \u0634\u0631\u06a9\u062a \u062c\u0627\u0628\u0627\u0645\u0627 \u0648 \u0628\u0647 \u0637\u0648\u0631 \u06a9\u0644\u06cc \u0627\u0647\u062f\u0627\u0641 \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0628\u0647 \u0637\u0648\u0631 \u062e\u0644\u0627\u0635\u0647 \u0646\u0648\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u062a\u0627 \u06a9\u0627\u0631\u0628\u0631 \u0628\u062a\u0648\u0627\u0646 \u0627\u0632 \u062e\u062f\u0645\u0627\u062a \u0648 \u0627\u0647\u062f\u0627\u0641 \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u0622\u06af\u0627\u0647 \u0634\u0648\u062f. ";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
            {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
              <div className={classNames(projectcss.all, sty.freeBox__f4DUi)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__eevK
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile") ? (
                    <React.Fragment>
                      {(() => {
                        try {
                          return (
                            " پشتیبانی: ⭐️ " +
                            $ctx.fetchedData.list[0].supportScore
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "\u0627\u0645\u062a\u06cc\u0627\u0632 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc: \u2b50\ufe0f\u06f4";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {(() => {
                        try {
                          return (
                            "امتیاز پشتیبانی: ⭐️ " +
                            $ctx.fetchedData.list[0].supportScore
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "\u0627\u0645\u062a\u06cc\u0627\u0632 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc: \u2b50\ufe0f\u06f4";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  )}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nMMrA
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile") ? (
                    <React.Fragment>
                      {(() => {
                        try {
                          return (
                            " کارمزد: % " +
                            $ctx.fetchedData.list[0].commissionRate
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "\u0645\u06cc\u0632\u0627\u0646 \u06a9\u0645\u06cc\u0633\u06cc\u0648\u0646: X%";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {(() => {
                        try {
                          return (
                            "نرخ کمیسیون: % " +
                            $ctx.fetchedData.list[0].commissionRate
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "\u0645\u06cc\u0632\u0627\u0646 \u06a9\u0645\u06cc\u0633\u06cc\u0648\u0646: X%";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  )}
                </div>
                <AntdButton
                  data-plasmic-name={"linkbtn2"}
                  data-plasmic-override={overrides.linkbtn2}
                  className={classNames("__wab_instance", sty.linkbtn2)}
                  onClick={async () => {
                    const $steps = {};

                    $steps["goToPage"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: (() => {
                              try {
                                return (
                                  "https://" + $ctx.fetchedData.list[0].url
                                );
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()
                          };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToPage"] != null &&
                      typeof $steps["goToPage"] === "object" &&
                      typeof $steps["goToPage"].then === "function"
                    ) {
                      $steps["goToPage"] = await $steps["goToPage"];
                    }
                  }}
                  submitsForm={false}
                  type={"primary"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ywKfT
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return (
                            "برای ثبت اقامتگاه در " +
                            $ctx.fetchedData.list[0].name +
                            " اینجا بزنید"
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "\u0628\u0631\u0627\u06cc \u062b\u0628\u062a \u0627\u0642\u0627\u0645\u062a\u06af\u0627\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u067e\u0644\u062a\u0641\u0631\u0645\u060c \u0627\u06cc\u0646\u062c\u0627 \u0628\u0632\u0646\u06cc\u062f";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                </AntdButton>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__skhKr)}>
            <div
              className={classNames(projectcss.all, sty.freeBox___33Keo)}
              onClick={async event => {
                const $steps = {};

                $steps["goToHttpsRentamonComPricing"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: "https://rentamon.com/pricing"
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToHttpsRentamonComPricing"] != null &&
                  typeof $steps["goToHttpsRentamonComPricing"] === "object" &&
                  typeof $steps["goToHttpsRentamonComPricing"].then ===
                    "function"
                ) {
                  $steps["goToHttpsRentamonComPricing"] = await $steps[
                    "goToHttpsRentamonComPricing"
                  ];
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fKr7Q
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FCFCFC" }}
                  >
                    {
                      "\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u062a\u0639\u0631\u0641\u0647\u200c\u0647\u0627"
                    }
                  </span>
                </React.Fragment>
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__caLZh)}
            onClick={async event => {
              const $steps = {};

              $steps["goToHttpsRentamonComPanels"] = true
                ? (() => {
                    const actionArgs = {
                      destination: "https://rentamon.com/panels"
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToHttpsRentamonComPanels"] != null &&
                typeof $steps["goToHttpsRentamonComPanels"] === "object" &&
                typeof $steps["goToHttpsRentamonComPanels"].then === "function"
              ) {
                $steps["goToHttpsRentamonComPanels"] = await $steps[
                  "goToHttpsRentamonComPanels"
                ];
              }
            }}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5CKam
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "var(--token-8nedppYkGVaH)" }}
                >
                  {
                    "\u0646\u0645\u0627\u06cc\u0634 \u062a\u0642\u0648\u06cc\u0645"
                  }
                </span>
              </React.Fragment>
            </div>
          </div>
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <div className={classNames(projectcss.all, sty.freeBox___2OF8O)} />
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <div className={classNames(projectcss.all, sty.freeBox__eCkSh)} />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  paymentError: [
    "paymentError",
    "embedHtml",
    "successful",
    "columns",
    "linkbtn2"
  ],
  embedHtml: ["embedHtml"],
  successful: ["successful"],
  columns: ["columns"],
  linkbtn2: ["linkbtn2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  paymentError: "div";
  embedHtml: typeof Embed;
  successful: typeof PlasmicImg__;
  columns: "div";
  linkbtn2: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPaymentError__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPaymentError__VariantsArgs;
    args?: PlasmicPaymentError__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPaymentError__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPaymentError__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPaymentError__ArgProps,
          internalVariantPropNames: PlasmicPaymentError__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPaymentError__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "paymentError") {
    func.displayName = "PlasmicPaymentError";
  } else {
    func.displayName = `PlasmicPaymentError.${nodeName}`;
  }
  return func;
}

export const PlasmicPaymentError = Object.assign(
  // Top-level PlasmicPaymentError renders the root element
  makeNodeComponent("paymentError"),
  {
    // Helper components rendering sub-elements
    embedHtml: makeNodeComponent("embedHtml"),
    successful: makeNodeComponent("successful"),
    columns: makeNodeComponent("columns"),
    linkbtn2: makeNodeComponent("linkbtn2"),

    // Metadata about props expected for PlasmicPaymentError
    internalVariantProps: PlasmicPaymentError__VariantProps,
    internalArgProps: PlasmicPaymentError__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPaymentError;
/* prettier-ignore-end */
