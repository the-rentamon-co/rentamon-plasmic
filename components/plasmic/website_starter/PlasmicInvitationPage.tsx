/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: _g5mpGGn_lAP

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
import Button from "../../Button"; // plasmic-import: U5bKCJ5DYhib/component
import TestimonialsScrolling from "../../TestimonialsScrolling"; // plasmic-import: lrlVKcMJCRk_/component

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicInvitationPage.module.css"; // plasmic-import: _g5mpGGn_lAP/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: aHRi_lZjzHt3/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: nPWd30PDwgwm/icon

createPlasmicElementProxy;

export type PlasmicInvitationPage__VariantMembers = {};
export type PlasmicInvitationPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicInvitationPage__VariantsArgs;
export const PlasmicInvitationPage__VariantProps = new Array<VariantPropType>();

export type PlasmicInvitationPage__ArgsType = {};
type ArgPropType = keyof PlasmicInvitationPage__ArgsType;
export const PlasmicInvitationPage__ArgProps = new Array<ArgPropType>();

export type PlasmicInvitationPage__OverridesType = {
  root?: Flex__<"div">;
  apiRequest?: Flex__<typeof ApiRequest>;
  img?: Flex__<typeof PlasmicImg__>;
  button?: Flex__<typeof Button>;
  testimonialsScrolling?: Flex__<typeof TestimonialsScrolling>;
};

export interface DefaultInvitationPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInvitationPage__RenderFunc(props: {
  variants: PlasmicInvitationPage__VariantsArgs;
  args: PlasmicInvitationPage__ArgsType;
  overrides: PlasmicInvitationPage__OverridesType;
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
          <ApiRequest
            data-plasmic-name={"apiRequest"}
            data-plasmic-override={overrides.apiRequest}
            className={classNames("__wab_instance", sty.apiRequest)}
            errorDisplay={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__t97UG
                )}
              >
                {"Error fetching data"}
              </div>
            }
            loadingDisplay={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__u2GpF
                )}
              >
                {"Loading..."}
              </div>
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
            url={(() => {
              try {
                return `https://gateway.rentamon.com/webhook/get_referral_code_info?code=${$ctx.params.invite_code}`;
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

          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___73I8V)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__pdbF7)}>
              <div className={classNames(projectcss.all, sty.freeBox__lIzAm)}>
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100px"}
                  loading={"lazy"}
                  src={(() => {
                    try {
                      return $state.apiRequest.data[0].profile_pic;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return {
                          src: "/plasmic/website_starter/images/small300X288Jpg2.jpg",
                          fullWidth: 300,
                          fullHeight: 300,
                          aspectRatio: undefined
                        };
                      }
                      throw e;
                    }
                  })()}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__euiv1)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7R8Gd
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return (
                          $state.apiRequest.data[0].first_name +
                          " " +
                          $state.apiRequest.data[0].last_name
                        );
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "\u0645\u06cc\u0644\u0627\u062f \u0647\u0645\u062a\u06cc";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___8Ivdf)}>
              <div className={classNames(projectcss.all, sty.freeBox__vy7Gw)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kLvIj
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return `${
                          $state.apiRequest.data[0].first_name +
                          " " +
                          $state.apiRequest.data[0].last_name
                        } به رنتامون دعوتت کرده. به جمع میزبان‌هایی که در مسیر رشد کسب‌وکارشون و توسعه‌ی گردشگریِ کشور زیبامون هستن :)`;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "\u0646\u06cc\u0645\u0627 \u0627\u06a9\u0628\u0631 \u0632\u0627\u062f\u0647 \u0628\u0647 \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u062f\u0639\u0648\u062a\u062a \u06a9\u0631\u062f\u0647. \u0628\u0647 \u062c\u0645\u0639 \u0645\u06cc\u0632\u0628\u0627\u0646\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0631 \u0645\u0633\u06cc\u0631 \u0631\u0634\u062f \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631\u0634\u0648\u0646 \u0648 \u062a\u0648\u0633\u0639\u0647\u200c\u06cc \u06af\u0631\u062f\u0634\u06af\u0631\u06cc\u0650 \u06a9\u0634\u0648\u0631 \u0632\u06cc\u0628\u0627\u0645\u0648\u0646 \u0647\u0633\u062a\u0646 :)";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
              </div>
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__jn6Yz)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hEvvJ
                )}
              >
                {
                  "\u0647\u0645\u06cc\u0646 \u0627\u0644\u0627\u0646 \u062f\u0631 \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u062b\u0628\u062a \u0646\u0627\u0645 \u06a9\u0646 \u0648 ..."
                }
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__oi07T)}>
                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  onClick={async event => {
                    const $steps = {};

                    $steps["runCode"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return (() => {
                                function setCookie(name, value, hours) {
                                  let expires = "";
                                  if (hours) {
                                    const date = new Date();
                                    date.setTime(
                                      date.getTime() + hours * 60 * 60 * 1000
                                    );
                                    expires = "; expires=" + date.toUTCString();
                                  }
                                  document.cookie =
                                    name +
                                    "=" +
                                    (value || "") +
                                    expires +
                                    "; path=/";
                                }
                                setCookie(
                                  "invite_code",
                                  $ctx.params.invite_code,
                                  720
                                );
                                return console.log(
                                  "done",
                                  $ctx.params.invite_code
                                );
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

                    $steps["runCode2"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return (() => {
                                return window.open(
                                  "https://sso.rentamon.com/web/index.html?callback=https://app.rentamon.com/activation/1/",
                                  "_blank"
                                );
                              })();
                            }
                          };
                          return (({ customFunction }) => {
                            return customFunction();
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["runCode2"] != null &&
                      typeof $steps["runCode2"] === "object" &&
                      typeof $steps["runCode2"].then === "function"
                    ) {
                      $steps["runCode2"] = await $steps["runCode2"];
                    }
                  }}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hLLaC
                    )}
                  >
                    {"\u062b\u0628\u062a \u0646\u0627\u0645"}
                  </div>
                </Button>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9OOaM
                )}
              >
                {
                  "\u0645\u0628\u0644\u063a  \u06f1\u06f0\u06f0 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646 \u0647\u062f\u06cc\u0647 \u0628\u06af\u06cc\u0631"
                }
              </div>
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox___5Eq8E)}>
              <TestimonialsScrolling
                data-plasmic-name={"testimonialsScrolling"}
                data-plasmic-override={overrides.testimonialsScrolling}
                className={classNames(
                  "__wab_instance",
                  sty.testimonialsScrolling
                )}
              />
            </div>
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "apiRequest", "img", "button", "testimonialsScrolling"],
  apiRequest: ["apiRequest"],
  img: ["img"],
  button: ["button"],
  testimonialsScrolling: ["testimonialsScrolling"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  apiRequest: typeof ApiRequest;
  img: typeof PlasmicImg__;
  button: typeof Button;
  testimonialsScrolling: typeof TestimonialsScrolling;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInvitationPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInvitationPage__VariantsArgs;
    args?: PlasmicInvitationPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInvitationPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInvitationPage__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicInvitationPage__ArgProps,
          internalVariantPropNames: PlasmicInvitationPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInvitationPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInvitationPage";
  } else {
    func.displayName = `PlasmicInvitationPage.${nodeName}`;
  }
  return func;
}

export const PlasmicInvitationPage = Object.assign(
  // Top-level PlasmicInvitationPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    apiRequest: makeNodeComponent("apiRequest"),
    img: makeNodeComponent("img"),
    button: makeNodeComponent("button"),
    testimonialsScrolling: makeNodeComponent("testimonialsScrolling"),

    // Metadata about props expected for PlasmicInvitationPage
    internalVariantProps: PlasmicInvitationPage__VariantProps,
    internalArgProps: PlasmicInvitationPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicInvitationPage;
/* prettier-ignore-end */
