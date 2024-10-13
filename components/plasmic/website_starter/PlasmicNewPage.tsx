// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: qnoSvk5APDQU

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

import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import { AntdDropdown } from "@plasmicpkgs/antd5/skinny/registerDropdown";
import { AntdMenuItem } from "@plasmicpkgs/antd5/skinny/registerMenu";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { Switch } from "@/fragment/components/switch"; // plasmic-import: fYS4AeYPi-91/codeComponent
import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: qnoSvk5APDQU/css

createPlasmicElementProxy;

export type PlasmicNewPage__VariantMembers = {};
export type PlasmicNewPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage__VariantsArgs;
export const PlasmicNewPage__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage__ArgsType;
export const PlasmicNewPage__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage__OverridesType = {
  root?: Flex__<"div">;
  topContainer?: Flex__<"section">;
  mainSection?: Flex__<"section">;
  httpRestApiFetcher?: Flex__<typeof DataFetcher>;
  dropdown?: Flex__<typeof AntdDropdown>;
  button?: Flex__<typeof AntdButton>;
  img?: Flex__<typeof PlasmicImg__>;
  fragmentSwitch?: Flex__<typeof Switch>;
  embedHtml?: Flex__<typeof Embed>;
};

export interface DefaultNewPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewPage__RenderFunc(props: {
  variants: PlasmicNewPage__VariantsArgs;
  args: PlasmicNewPage__ArgsType;
  overrides: PlasmicNewPage__OverridesType;
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

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "fragmentSwitch.checked",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return (() => {
                return localStorage.getItem("IsShabInstant") === "true";
              })();
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return false;
              }
              throw e;
            }
          })()
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
          <section
            data-plasmic-name={"topContainer"}
            data-plasmic-override={overrides.topContainer}
            className={classNames(projectcss.all, sty.topContainer)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qkgw
              )}
            >
              {
                "\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0631\u0632\u0631\u0648 \u0622\u0646\u06cc \u26a1\ufe0f"
              }
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ngkPi
              )}
            >
              {"\u062a\u0627 \u06f3\u06f0 \u0645\u0647\u0631"}
            </div>
          </section>
          <section
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <DataFetcher
              data-plasmic-name={"httpRestApiFetcher"}
              data-plasmic-override={overrides.httpRestApiFetcher}
              className={classNames("__wab_instance", sty.httpRestApiFetcher)}
              dataName={"fetchedData"}
              errorDisplay={
                <DataCtxReader__>
                  {$ctx => "Error fetching data"}
                </DataCtxReader__>
              }
              errorName={"fetchError"}
              headers={{
                "Content-Type": "application/json",
                Accept: "application/json"
              }}
              loadingDisplay={
                <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
              }
              method={"GET"}
              noLayout={false}
              url={"https://api.github.com/users/plasmicapp/repos"}
            >
              <DataCtxReader__>
                {$ctx => (
                  <AntdDropdown
                    data-plasmic-name={"dropdown"}
                    data-plasmic-override={overrides.dropdown}
                    className={classNames("__wab_instance", sty.dropdown)}
                    dropdownMenuScopeClassName={sty["dropdown__dropdownMenu"]}
                    menuItems={() => (
                      <React.Fragment>
                        <AntdMenuItem
                          className={classNames(
                            "__wab_instance",
                            sty.menuItem___0DgU
                          )}
                          key={"menu-item-1"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__ihY1P
                            )}
                          >
                            {"Menu item"}
                          </div>
                        </AntdMenuItem>
                        <AntdMenuItem
                          className={classNames(
                            "__wab_instance",
                            sty.menuItem__cn0Fu
                          )}
                          key={"menu-item-2"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__o6Dua
                            )}
                          >
                            {"Menu item"}
                          </div>
                        </AntdMenuItem>
                      </React.Fragment>
                    )}
                    menuItemsJson={[
                      { type: "item", value: "action1", label: "Action 1" },
                      { type: "item", value: "action2", label: "Action 2" }
                    ]}
                  >
                    <AntdButton
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__xatDt
                        )}
                      >
                        {
                          "\u0627\u0646\u062a\u062e\u0627\u0628 \u0627\u0642\u0627\u0645\u062a\u06af\u0627\u0647"
                        }
                      </div>
                    </AntdButton>
                  </AntdDropdown>
                )}
              </DataCtxReader__>
            </DataFetcher>
            <div className={classNames(projectcss.all, sty.freeBox__gWfWp)}>
              <div className={classNames(projectcss.all, sty.freeBox___07Kpo)}>
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"44px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"44px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/website_starter/images/image.png",
                    fullWidth: 88,
                    fullHeight: 88,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jbz7
                  )}
                >
                  {"\u0634\u0628"}
                </div>
                {(() => {
                  const child$Props = {
                    checked: generateStateValueProp($state, [
                      "fragmentSwitch",
                      "checked"
                    ]),
                    className: classNames("__wab_instance", sty.fragmentSwitch),
                    disabled: false,
                    onCheckedChange: async (...eventArgs: any) => {
                      generateStateOnChangeProp($state, [
                        "fragmentSwitch",
                        "checked"
                      ]).apply(null, eventArgs);
                      (async checked => {
                        const $steps = {};

                        $steps["runCode"] = true
                          ? (() => {
                              const actionArgs = {
                                customFunction: async () => {
                                  return localStorage.setItem(
                                    "IsShabInstant",
                                    $state.fragmentSwitch.checked
                                  );
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

                        $steps["invokeGlobalAction"] = true
                          ? (() => {
                              const actionArgs = {
                                args: [
                                  "POST",
                                  "https://rentamon-n8n.darkube.app/webhook/shab-instant",
                                  undefined,
                                  (() => {
                                    try {
                                      return $state.fragmentSwitch.checked
                                        ? {
                                            property_id: 1,
                                            action: "set_instant"
                                          }
                                        : {
                                            property_id: 1,
                                            action: "unset_instant"
                                          };
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return {
                                          dates: "1403-05-30",
                                          property_id: 1,
                                          action: "unset_instant"
                                        };
                                      }
                                      throw e;
                                    }
                                  })(),
                                  (() => {
                                    try {
                                      return {
                                        headers: {
                                          "Content-Type":
                                            "application/x-www-form-urlencoded",
                                          Authorization: `Bearer ${
                                            document.cookie
                                              .split("; ")
                                              .find(row =>
                                                row.startsWith(
                                                  "usso_access_token"
                                                )
                                              )
                                              .split("=")[1]
                                          }`
                                        },
                                        withCredentials: true
                                      };
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return {
                                          withCredentials: true,
                                          headers: {
                                            "Content-Type":
                                              "application/x-www-form-urlencoded"
                                          }
                                        };
                                      }
                                      throw e;
                                    }
                                  })()
                                ]
                              };
                              return $globalActions[
                                "Fragment.apiRequest"
                              ]?.apply(null, [...actionArgs.args]);
                            })()
                          : undefined;
                        if (
                          $steps["invokeGlobalAction"] != null &&
                          typeof $steps["invokeGlobalAction"] === "object" &&
                          typeof $steps["invokeGlobalAction"].then ===
                            "function"
                        ) {
                          $steps["invokeGlobalAction"] = await $steps[
                            "invokeGlobalAction"
                          ];
                        }
                      }).apply(null, eventArgs);
                    }
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "checked",
                        plasmicStateName: "fragmentSwitch.checked"
                      }
                    ],
                    [],
                    undefined ?? {},
                    child$Props
                  );
                  initializePlasmicStates(
                    $state,
                    [
                      {
                        name: "fragmentSwitch.checked",
                        initFunc: ({ $props, $state, $queries }) =>
                          (() => {
                            try {
                              return (() => {
                                return (
                                  localStorage.getItem("IsShabInstant") ===
                                  "true"
                                );
                              })();
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return false;
                              }
                              throw e;
                            }
                          })()
                      }
                    ],
                    []
                  );
                  return (
                    <Switch
                      data-plasmic-name={"fragmentSwitch"}
                      data-plasmic-override={overrides.fragmentSwitch}
                      {...child$Props}
                    />
                  );
                })()}
              </div>
            </div>
          </section>
          <Embed
            data-plasmic-name={"embedHtml"}
            data-plasmic-override={overrides.embedHtml}
            className={classNames("__wab_instance", sty.embedHtml)}
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
    "topContainer",
    "mainSection",
    "httpRestApiFetcher",
    "dropdown",
    "button",
    "img",
    "fragmentSwitch",
    "embedHtml"
  ],
  topContainer: ["topContainer"],
  mainSection: [
    "mainSection",
    "httpRestApiFetcher",
    "dropdown",
    "button",
    "img",
    "fragmentSwitch"
  ],
  httpRestApiFetcher: ["httpRestApiFetcher", "dropdown", "button"],
  dropdown: ["dropdown", "button"],
  button: ["button"],
  img: ["img"],
  fragmentSwitch: ["fragmentSwitch"],
  embedHtml: ["embedHtml"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  topContainer: "section";
  mainSection: "section";
  httpRestApiFetcher: typeof DataFetcher;
  dropdown: typeof AntdDropdown;
  button: typeof AntdButton;
  img: typeof PlasmicImg__;
  fragmentSwitch: typeof Switch;
  embedHtml: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage__VariantsArgs;
    args?: PlasmicNewPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage__ArgsType,
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
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    topContainer: makeNodeComponent("topContainer"),
    mainSection: makeNodeComponent("mainSection"),
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    dropdown: makeNodeComponent("dropdown"),
    button: makeNodeComponent("button"),
    img: makeNodeComponent("img"),
    fragmentSwitch: makeNodeComponent("fragmentSwitch"),
    embedHtml: makeNodeComponent("embedHtml"),

    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */
