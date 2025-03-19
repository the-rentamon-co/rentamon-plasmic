// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: lrlVKcMJCRk_

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

import { ApiRequest } from "@/fragment/components/api-request"; // plasmic-import: a17-BE4K1UE7/codeComponent

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicTestimonialsScrolling.module.css"; // plasmic-import: lrlVKcMJCRk_/css

createPlasmicElementProxy;

export type PlasmicTestimonialsScrolling__VariantMembers = {};
export type PlasmicTestimonialsScrolling__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestimonialsScrolling__VariantsArgs;
export const PlasmicTestimonialsScrolling__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTestimonialsScrolling__ArgsType = {};
type ArgPropType = keyof PlasmicTestimonialsScrolling__ArgsType;
export const PlasmicTestimonialsScrolling__ArgProps = new Array<ArgPropType>();

export type PlasmicTestimonialsScrolling__OverridesType = {
  testimonialsScrolling?: Flex__<"div">;
  userTestimonial?: Flex__<typeof ApiRequest>;
  text?: Flex__<"div">;
  frame?: Flex__<"div">;
  quotes?: Flex__<"div">;
  userName4?: Flex__<"div">;
  userPlatform?: Flex__<"div">;
  userCity?: Flex__<"div">;
  userQuote2?: Flex__<"div">;
};

export interface DefaultTestimonialsScrollingProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTestimonialsScrolling__RenderFunc(props: {
  variants: PlasmicTestimonialsScrolling__VariantsArgs;
  args: PlasmicTestimonialsScrolling__ArgsType;
  overrides: PlasmicTestimonialsScrolling__OverridesType;
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
        path: "userTestimonial.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "userTestimonial"
      },
      {
        path: "userTestimonial.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "userTestimonial"
      },
      {
        path: "userTestimonial.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "userTestimonial"
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
    <div
      data-plasmic-name={"testimonialsScrolling"}
      data-plasmic-override={overrides.testimonialsScrolling}
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
        sty.testimonialsScrolling
      )}
    >
      <ApiRequest
        data-plasmic-name={"userTestimonial"}
        data-plasmic-override={overrides.userTestimonial}
        children={null}
        className={classNames("__wab_instance", sty.userTestimonial)}
        errorDisplay={
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {
              "\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a"
            }
          </div>
        }
        loadingDisplay={
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__rMyNm)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            height={"50px"}
            loading={"lazy"}
            src={
              "https://rentamon.com/wp-content/uploads/2024/03/loading-1.gif"
            }
            width={"50px"}
          />
        }
        method={"GET"}
        onError={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["userTestimonial", "error"]).apply(
            null,
            eventArgs
          );
        }}
        onLoading={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, [
            "userTestimonial",
            "loading"
          ]).apply(null, eventArgs);
        }}
        onSuccess={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["userTestimonial", "data"]).apply(
            null,
            eventArgs
          );
        }}
        ref={ref => {
          $refs["userTestimonial"] = ref;
        }}
        url={"https://gateway.rentamon.com/webhook/testimonial"}
      />

      <div
        data-plasmic-name={"frame"}
        data-plasmic-override={overrides.frame}
        className={classNames(projectcss.all, sty.frame)}
      >
        <div
          data-plasmic-name={"quotes"}
          data-plasmic-override={overrides.quotes}
          className={classNames(
            projectcss.all,
            sty.quotes,
            hasVariant(globalVariants, "screen", "smallMobile")
              ? "quotes"
              : "quotes"
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__ml3GW)}>
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $state.userTestimonial.data;
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
                  className={classNames(projectcss.all, sty.freeBox__tyiks)}
                  key={currentIndex}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__yqxv0)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__eCmkO)}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__g5Cp)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"none"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        height={
                          hasVariant(globalVariants, "screen", "smallMobile")
                            ? "44px"
                            : "60px"
                        }
                        loading={"lazy"}
                        src={
                          hasVariant(globalVariants, "screen", "smallMobile")
                            ? (() => {
                                try {
                                  return $state.userTestimonial.data[
                                    currentIndex
                                  ].userPic;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()
                            : (() => {
                                try {
                                  return $state.userTestimonial.data[
                                    currentIndex
                                  ].userPic;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()
                        }
                        width={
                          hasVariant(globalVariants, "screen", "smallMobile")
                            ? "44px"
                            : "60px"
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__gBgy9)}
                    >
                      <div
                        data-plasmic-name={"userName4"}
                        data-plasmic-override={overrides.userName4}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.userName4
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "smallMobile") ? (
                          <React.Fragment>
                            {(() => {
                              try {
                                return $state.userTestimonial.data[currentIndex]
                                  .userName;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0641\u062a\u0627\u062d\u06cc";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {(() => {
                              try {
                                return $state.userTestimonial.data[currentIndex]
                                  .userName;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0641\u062a\u0627\u062d\u06cc";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        )}
                      </div>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__iLqoV)}
                    >
                      <div
                        data-plasmic-name={"userPlatform"}
                        data-plasmic-override={overrides.userPlatform}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.userPlatform
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "smallMobile") ? (
                          <React.Fragment>
                            {(() => {
                              try {
                                return (
                                  "میزبان " +
                                  $state.userTestimonial.data[currentIndex]
                                    .userPlatform
                                );
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0641\u062a\u0627\u062d\u06cc";
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
                                  "میزبان " +
                                  $state.userTestimonial.data[currentIndex]
                                    .userPlatform
                                );
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0641\u062a\u0627\u062d\u06cc";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        )}
                      </div>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__dirV)}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__l4Sj7)}
                        displayHeight={
                          hasVariant(globalVariants, "screen", "smallMobile")
                            ? "17px"
                            : hasVariant(globalVariants, "screen", "mobile")
                            ? "100%"
                            : "25px"
                        }
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={
                          hasVariant(globalVariants, "screen", "smallMobile")
                            ? "12px"
                            : hasVariant(globalVariants, "screen", "mobile")
                            ? "15px"
                            : "17px"
                        }
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/website_starter/images/pinPng.png",
                          fullWidth: 50,
                          fullHeight: 73,
                          aspectRatio: undefined
                        }}
                      />

                      <div
                        data-plasmic-name={"userCity"}
                        data-plasmic-override={overrides.userCity}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.userCity
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "smallMobile") ? (
                          <React.Fragment>
                            {(() => {
                              try {
                                return $state.userTestimonial.data[currentIndex]
                                  .userCity;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0641\u062a\u0627\u062d\u06cc";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {(() => {
                              try {
                                return $state.userTestimonial.data[currentIndex]
                                  .userCity;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0641\u062a\u0627\u062d\u06cc";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__vGlv7)}
                  >
                    <div
                      data-plasmic-name={"userQuote2"}
                      data-plasmic-override={overrides.userQuote2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.userQuote2
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return $state.userTestimonial.data[currentIndex]
                              .userQuote;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "\u062e\u06cc\u0644\u06cc \u06a9\u0627\u0631 \u0645\u0627 \u0631\u0627 \u0622\u0633\u0627\u0646 \u06a9\u0631\u062f\u0647 \u0631\u0627\u0636\u06cc \u0647\u0633\u062a\u0645";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  testimonialsScrolling: [
    "testimonialsScrolling",
    "userTestimonial",
    "text",
    "frame",
    "quotes",
    "userName4",
    "userPlatform",
    "userCity",
    "userQuote2"
  ],
  userTestimonial: ["userTestimonial", "text"],
  text: ["text"],
  frame: [
    "frame",
    "quotes",
    "userName4",
    "userPlatform",
    "userCity",
    "userQuote2"
  ],
  quotes: ["quotes", "userName4", "userPlatform", "userCity", "userQuote2"],
  userName4: ["userName4"],
  userPlatform: ["userPlatform"],
  userCity: ["userCity"],
  userQuote2: ["userQuote2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  testimonialsScrolling: "div";
  userTestimonial: typeof ApiRequest;
  text: "div";
  frame: "div";
  quotes: "div";
  userName4: "div";
  userPlatform: "div";
  userCity: "div";
  userQuote2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestimonialsScrolling__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonialsScrolling__VariantsArgs;
    args?: PlasmicTestimonialsScrolling__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestimonialsScrolling__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTestimonialsScrolling__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          internalArgPropNames: PlasmicTestimonialsScrolling__ArgProps,
          internalVariantPropNames: PlasmicTestimonialsScrolling__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTestimonialsScrolling__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "testimonialsScrolling") {
    func.displayName = "PlasmicTestimonialsScrolling";
  } else {
    func.displayName = `PlasmicTestimonialsScrolling.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonialsScrolling = Object.assign(
  // Top-level PlasmicTestimonialsScrolling renders the root element
  makeNodeComponent("testimonialsScrolling"),
  {
    // Helper components rendering sub-elements
    userTestimonial: makeNodeComponent("userTestimonial"),
    text: makeNodeComponent("text"),
    frame: makeNodeComponent("frame"),
    quotes: makeNodeComponent("quotes"),
    userName4: makeNodeComponent("userName4"),
    userPlatform: makeNodeComponent("userPlatform"),
    userCity: makeNodeComponent("userCity"),
    userQuote2: makeNodeComponent("userQuote2"),

    // Metadata about props expected for PlasmicTestimonialsScrolling
    internalVariantProps: PlasmicTestimonialsScrolling__VariantProps,
    internalArgProps: PlasmicTestimonialsScrolling__ArgProps
  }
);

export default PlasmicTestimonialsScrolling;
/* prettier-ignore-end */
