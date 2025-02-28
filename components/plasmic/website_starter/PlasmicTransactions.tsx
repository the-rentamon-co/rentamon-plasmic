// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: N1STB8Bv46WD

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

import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import { ApiRequest } from "@/fragment/components/api-request"; // plasmic-import: a17-BE4K1UE7/codeComponent
import SideBar2 from "../../SideBar2"; // plasmic-import: 03ZPQfFyBXgI/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicTransactions.module.css"; // plasmic-import: N1STB8Bv46WD/css

createPlasmicElementProxy;

export type PlasmicTransactions__VariantMembers = {};
export type PlasmicTransactions__VariantsArgs = {};
type VariantPropType = keyof PlasmicTransactions__VariantsArgs;
export const PlasmicTransactions__VariantProps = new Array<VariantPropType>();

export type PlasmicTransactions__ArgsType = {};
type ArgPropType = keyof PlasmicTransactions__ArgsType;
export const PlasmicTransactions__ArgProps = new Array<ArgPropType>();

export type PlasmicTransactions__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
  profile?: Flex__<typeof ApiRequest>;
  header?: Flex__<"div">;
  sideBar2?: Flex__<typeof SideBar2>;
  tableHeader?: Flex__<"div">;
  item?: Flex__<"div">;
  apiRequest?: Flex__<typeof ApiRequest>;
  favicon?: Flex__<typeof Embed>;
  returnButton?: Flex__<"div">;
  clarity?: Flex__<typeof Embed>;
};

export interface DefaultTransactionsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTransactions__RenderFunc(props: {
  variants: PlasmicTransactions__VariantsArgs;
  args: PlasmicTransactions__ArgsType;
  overrides: PlasmicTransactions__OverridesType;
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
        path: "apiRequest.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiRequest"
      },
      {
        path: "apiRequest.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiRequest"
      },
      {
        path: "apiRequest.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiRequest"
      },
      {
        path: "profile.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "profile"
      },
      {
        path: "profile.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "profile"
      },
      {
        path: "profile.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "profile"
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
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
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
            sty.root
          )}
        >
          <SideEffect
            data-plasmic-name={"sideEffect"}
            data-plasmic-override={overrides.sideEffect}
            className={classNames("__wab_instance", sty.sideEffect)}
            onMount={async () => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (async () => {
                          const isPlasmicStudio =
                            Object.values($ctx.Fragment.previewApiConfig)
                              .length > 0;
                          console.log("side effect started");
                          async function refreshToken() {
                            if (isPlasmicStudio) return;
                            console.log("side effect in the cudition");
                            try {
                              const response = await fetch(
                                "https://sso.rentamon.com/auth/refresh",
                                {
                                  method: "GET",
                                  credentials: "include"
                                }
                              );
                              console.log("Refreshed Token in 10 minutes");
                              if (response.ok) {
                                const data = await response.json();
                                console.log(
                                  "Token refreshed successfully:",
                                  data
                                );
                              } else {
                                console.error(
                                  "Failed to refresh token:",
                                  response.status
                                );
                              }
                            } catch (error) {
                              console.error("Error refreshing token:", error);
                            }
                          }
                          setInterval(refreshToken, 300000);
                          refreshToken();
                          function getCookie(name) {
                            const value = `; ${globalThis.document.cookie}`;
                            const parts = value.split(`; ${name}=`);
                            if (parts.length === 2)
                              return parts.pop().split(";").shift();
                          }
                          const ussoRefreshAvailable =
                            getCookie("usso_refresh_available") || false;
                          console.log(
                            "this is ussoRefresh: ",
                            ussoRefreshAvailable
                          );
                          const ussoAccessAvailable =
                            getCookie("usso_access_available") || false;
                          console.log(
                            "this is ussoAccessAvailable: ",
                            ussoAccessAvailable
                          );
                          if (!ussoAccessAvailable && !isPlasmicStudio) {
                            if (!ussoRefreshAvailable) {
                              console.log("got here in redirect");
                              return (window.location.href =
                                "https://sso.rentamon.com/web/index.html?callback=https://app.rentamon.com/panel/");
                            } else {
                              console.log("got here in refreshToken");
                              return fetch(
                                "https://sso.rentamon.com/auth/refresh",
                                {
                                  method: "GET",
                                  credentials: "include"
                                }
                              )
                                .then(response => {
                                  if (!response.ok) {
                                    throw new Error("Failed to refresh token");
                                  }
                                  return response.json();
                                })
                                .then(data => {
                                  console.log("Token refreshed:", data);
                                  window.location.reload();
                                })
                                .catch(error => {
                                  console.error("Error:", error);
                                  window.location.href =
                                    "https://sso.rentamon.com/web/index.html?callback=https://app.rentamon.com/panel/";
                                });
                            }
                          }
                        })();
                      }
                    };
                    return (({ customFunction }) => {
                      return customFunction();
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runCode"] != null &&
                typeof $steps["runCode"] === "object" &&
                typeof $steps["runCode"].then === "function"
              ) {
                $steps["runCode"] = await $steps["runCode"];
              }
            }}
          />

          <ApiRequest
            data-plasmic-name={"profile"}
            data-plasmic-override={overrides.profile}
            children={null}
            className={classNames("__wab_instance", sty.profile)}
            errorDisplay={null}
            loadingDisplay={null}
            method={"GET"}
            onError={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["profile", "error"]).apply(
                null,
                eventArgs
              );
            }}
            onLoading={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["profile", "loading"]).apply(
                null,
                eventArgs
              );
            }}
            onSuccess={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["profile", "data"]).apply(
                null,
                eventArgs
              );
            }}
            ref={ref => {
              $refs["profile"] = ref;
            }}
            url={"https://api-v2.rentamon.com/api/user_info?property_id=1"}
          />

          <div
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(projectcss.all, sty.header)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__sDWy4)}>
              <SideBar2
                data-plasmic-name={"sideBar2"}
                data-plasmic-override={overrides.sideBar2}
                className={classNames("__wab_instance", sty.sideBar2)}
                isOpen={false}
                userData={(() => {
                  try {
                    return $state.profile.data;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              />

              <div className={classNames(projectcss.all, sty.freeBox__pfauu)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gX6Ao
                  )}
                >
                  {
                    "\u06af\u0632\u0627\u0631\u0634 \u0645\u0635\u0631\u0641 \u0627\u0639\u062a\u0628\u0627\u0631"
                  }
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__prOxi)}>
              <div
                data-plasmic-name={"tableHeader"}
                data-plasmic-override={overrides.tableHeader}
                className={classNames(projectcss.all, sty.tableHeader)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__fk6Iq)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__yUNg1)}
                    displayHeight={"15px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/website_starter/images/image38.svg",
                      fullWidth: 14,
                      fullHeight: 12,
                      aspectRatio: 1.166667
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dqFdj
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "\u0639\u0646\u0648\u0627\u0646"
                      : "\u0639\u0646\u0648\u0627\u0646"}
                  </div>
                </Stack__>
                <div className={classNames(projectcss.all, sty.freeBox__o5AF)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__e0KU
                    )}
                  >
                    {"\u062a\u0627\u0631\u06cc\u062e"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__tnAne)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yuf6G
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "smallMobile") ? (
                      <React.Fragment>
                        <React.Fragment>
                          {"\u0645\u0628\u0644\u063a "}
                        </React.Fragment>
                        {
                          <sup
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              projectcss.plasmic_default__inline,
                              sty.sup__a5ZK7
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <sub
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    projectcss.plasmic_default__inline,
                                    sty.sub__niRhG
                                  )}
                                >
                                  {"(\u062a\u0648\u0645\u0627\u0646)"}
                                </sub>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </sup>
                        }
                        <React.Fragment>{""}</React.Fragment>
                      </React.Fragment>
                    ) : hasVariant(globalVariants, "screen", "mobile") ? (
                      <React.Fragment>
                        <React.Fragment>
                          {"\u0645\u0628\u0644\u063a "}
                        </React.Fragment>
                        {
                          <sup
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              projectcss.plasmic_default__inline,
                              sty.sup__xljuz
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <sub
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    projectcss.plasmic_default__inline,
                                    sty.sub__yaPeF
                                  )}
                                >
                                  {"(\u062a\u0648\u0645\u0627\u0646)"}
                                </sub>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </sup>
                        }
                        <React.Fragment>{""}</React.Fragment>
                      </React.Fragment>
                    ) : (
                      "\u0645\u0628\u0644\u063a (\u062a\u0648\u0645\u0627\u0646)"
                    )}
                  </div>
                </div>
              </div>
              {(() => {
                try {
                  return $state.apiRequest.data[0].reason != null;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })()
                ? (_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return $state.apiRequest.data;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })()
                  ).map((__plasmic_item_0, __plasmic_idx_0) => {
                    const currentItem = __plasmic_item_0;
                    const currentIndex = __plasmic_idx_0;
                    return (
                      <div
                        data-plasmic-name={"item"}
                        data-plasmic-override={overrides.item}
                        className={classNames(projectcss.all, sty.item)}
                        key={currentIndex}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__l4Nm
                          )}
                        >
                          {(() => {
                            try {
                              return (
                                $state.apiRequest.data[currentIndex].status !=
                                "decrease"
                              );
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return true;
                              }
                              throw e;
                            }
                          })() ? (
                            <PlasmicImg__
                              alt={""}
                              className={classNames(sty.img__jklRg)}
                              displayHeight={"15px"}
                              displayMaxHeight={"none"}
                              displayMaxWidth={"100%"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: "/plasmic/website_starter/images/image38.svg",
                                fullWidth: 14,
                                fullHeight: 12,
                                aspectRatio: 1.166667
                              }}
                            />
                          ) : null}
                          {(() => {
                            try {
                              return (
                                $state.apiRequest.data[currentIndex].status ==
                                "decrease"
                              );
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return true;
                              }
                              throw e;
                            }
                          })() ? (
                            <PlasmicImg__
                              alt={""}
                              className={classNames(sty.img__uxrTx)}
                              displayHeight={"15px"}
                              displayMaxHeight={"none"}
                              displayMaxWidth={"100%"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: "/plasmic/website_starter/images/image39.svg",
                                fullWidth: 14,
                                fullHeight: 12,
                                aspectRatio: 1.166667
                              }}
                            />
                          ) : null}
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__kv54W
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return $state.apiRequest.data[currentIndex]
                                    .reason;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "\u062e\u0631\u06cc\u062f \u0627\u0639\u062a\u0628\u0627\u0631";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </Stack__>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__njSro
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__tYydp
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return $state.apiRequest.data[currentIndex]
                                    .date;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "\u06f1\u06f4\u06f0\u06f3/\u06f0\u06f9/\u06f2\u06f5";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__nyRbP
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__jQXc
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return $state.apiRequest.data[currentIndex]
                                    .price;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "\u06f2\u06f0\u06f0/\u06f0\u06f0\u06f0";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <ApiRequest
            data-plasmic-name={"apiRequest"}
            data-plasmic-override={overrides.apiRequest}
            className={classNames("__wab_instance", sty.apiRequest)}
            errorDisplay={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___05ZQ
                )}
              >
                {
                  "\u062e\u0637\u0627 \u062f\u0631 \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u0627\u0631\u062a\u0628\u0627\u0637"
                }
              </div>
            }
            loadingDisplay={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__eb7Hm)}
                displayHeight={"76px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={
                  "https://rentamon.com/wp-content/uploads/2024/03/loading-1.gif"
                }
              />
            }
            method={"GET"}
            onError={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["apiRequest", "error"]).apply(
                null,
                eventArgs
              );
            }}
            onLoading={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, [
                "apiRequest",
                "loading"
              ]).apply(null, eventArgs);
            }}
            onSuccess={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["apiRequest", "data"]).apply(
                null,
                eventArgs
              );
            }}
            ref={ref => {
              $refs["apiRequest"] = ref;
            }}
            url={"https://gateway.rentamon.com/webhook/transactions"}
          >
            {(() => {
              try {
                return $state.apiRequest.data[0].staus == "false";
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6V8Xa
                )}
              >
                {
                  "\u0627\u0637\u0644\u0627\u0639\u0627\u062a\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f"
                }
              </div>
            ) : null}
          </ApiRequest>
          <Embed
            data-plasmic-name={"favicon"}
            data-plasmic-override={overrides.favicon}
            className={classNames("__wab_instance", sty.favicon)}
            code={
              '<script>\r\n  // \u0633\u0627\u062e\u062a\u0646 \u06cc\u06a9 \u062a\u06af link\r\n  const link = document.createElement("link");\r\n  link.rel = "icon"; // \u0646\u0648\u0639 \u0644\u06cc\u0646\u06a9: \u0622\u06cc\u06a9\u0648\u0646\r\n  link.href = "https://rentamon.com/wp-content/uploads/2023/08/R-Logo-7059df.png"; // \u0622\u062f\u0631\u0633 \u062a\u0635\u0648\u06cc\u0631\r\n  link.sizes = "192x192"; // \u0633\u0627\u06cc\u0632 \u0622\u06cc\u06a9\u0648\u0646\r\n\r\n  // \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0644\u06cc\u0646\u06a9 \u0628\u0647 \u062a\u06af <head>\r\n  document.head.appendChild(link);\r\n</script>\r\n'
            }
          />

          <div
            data-plasmic-name={"returnButton"}
            data-plasmic-override={overrides.returnButton}
            className={classNames(projectcss.all, sty.returnButton, "fix")}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__i6Ki)}
              onClick={async event => {
                const $steps = {};

                $steps["runCode"] = true
                  ? (() => {
                      const actionArgs = {
                        customFunction: async () => {
                          return (() => {
                            return window.history.back();
                          })();
                        }
                      };
                      return (({ customFunction }) => {
                        return customFunction();
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["runCode"] != null &&
                  typeof $steps["runCode"] === "object" &&
                  typeof $steps["runCode"].then === "function"
                ) {
                  $steps["runCode"] = await $steps["runCode"];
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gpLd3
                )}
              >
                {"\u0628\u0627\u0632\u06af\u0634\u062a "}
              </div>
            </div>
          </div>
          <Embed
            data-plasmic-name={"clarity"}
            data-plasmic-override={overrides.clarity}
            className={classNames("__wab_instance", sty.clarity)}
            code={
              '<script type="text/javascript">\r\n    (function(c,l,a,r,i,t,y){\r\n        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\r\n        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;\r\n        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\r\n    })(window, document, "clarity", "script", "iv4wnfjr7k");\r\n</script>'
            }
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "sideEffect",
    "profile",
    "header",
    "sideBar2",
    "tableHeader",
    "item",
    "apiRequest",
    "favicon",
    "returnButton",
    "clarity"
  ],
  sideEffect: ["sideEffect"],
  profile: ["profile"],
  header: ["header", "sideBar2", "tableHeader", "item"],
  sideBar2: ["sideBar2"],
  tableHeader: ["tableHeader"],
  item: ["item"],
  apiRequest: ["apiRequest"],
  favicon: ["favicon"],
  returnButton: ["returnButton"],
  clarity: ["clarity"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
  profile: typeof ApiRequest;
  header: "div";
  sideBar2: typeof SideBar2;
  tableHeader: "div";
  item: "div";
  apiRequest: typeof ApiRequest;
  favicon: typeof Embed;
  returnButton: "div";
  clarity: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTransactions__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTransactions__VariantsArgs;
    args?: PlasmicTransactions__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTransactions__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTransactions__ArgsType,
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
          internalArgPropNames: PlasmicTransactions__ArgProps,
          internalVariantPropNames: PlasmicTransactions__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTransactions__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTransactions";
  } else {
    func.displayName = `PlasmicTransactions.${nodeName}`;
  }
  return func;
}

export const PlasmicTransactions = Object.assign(
  // Top-level PlasmicTransactions renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),
    profile: makeNodeComponent("profile"),
    header: makeNodeComponent("header"),
    sideBar2: makeNodeComponent("sideBar2"),
    tableHeader: makeNodeComponent("tableHeader"),
    item: makeNodeComponent("item"),
    apiRequest: makeNodeComponent("apiRequest"),
    favicon: makeNodeComponent("favicon"),
    returnButton: makeNodeComponent("returnButton"),
    clarity: makeNodeComponent("clarity"),

    // Metadata about props expected for PlasmicTransactions
    internalVariantProps: PlasmicTransactions__VariantProps,
    internalArgProps: PlasmicTransactions__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTransactions;
/* prettier-ignore-end */
