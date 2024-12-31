// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: gvjKIi6-pXeG

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

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicReservations.module.css"; // plasmic-import: gvjKIi6-pXeG/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: aHRi_lZjzHt3/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: nPWd30PDwgwm/icon

createPlasmicElementProxy;

export type PlasmicReservations__VariantMembers = {};
export type PlasmicReservations__VariantsArgs = {};
type VariantPropType = keyof PlasmicReservations__VariantsArgs;
export const PlasmicReservations__VariantProps = new Array<VariantPropType>();

export type PlasmicReservations__ArgsType = {};
type ArgPropType = keyof PlasmicReservations__ArgsType;
export const PlasmicReservations__ArgProps = new Array<ArgPropType>();

export type PlasmicReservations__OverridesType = {
  root?: Flex__<"div">;
  reserveMainStack?: Flex__<"div">;
  apiRequest?: Flex__<typeof ApiRequest>;
  img?: Flex__<typeof PlasmicImg__>;
  button?: Flex__<typeof Button>;
};

export interface DefaultReservationsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicReservations__RenderFunc(props: {
  variants: PlasmicReservations__VariantsArgs;
  args: PlasmicReservations__ArgsType;
  overrides: PlasmicReservations__OverridesType;
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
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__iThja)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ia94Z
              )}
            >
              {"\u0644\u06cc\u0633\u062a \u0631\u0632\u0631\u0648\u0647\u0627"}
            </div>
            <Stack__
              as={"div"}
              data-plasmic-name={"reserveMainStack"}
              data-plasmic-override={overrides.reserveMainStack}
              hasGap={true}
              className={classNames(projectcss.all, sty.reserveMainStack)}
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
                      sty.text__eqa1B
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $state.apiRequest.error.message;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Error fetching data";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                }
                loadingDisplay={
                  <PlasmicImg__
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"160px"}
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
                  generateStateOnChangeProp($state, [
                    "apiRequest",
                    "error"
                  ]).apply(null, eventArgs);
                }}
                onLoading={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, [
                    "apiRequest",
                    "loading"
                  ]).apply(null, eventArgs);
                }}
                onSuccess={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, [
                    "apiRequest",
                    "data"
                  ]).apply(null, eventArgs);
                }}
                ref={ref => {
                  $refs["apiRequest"] = ref;
                }}
                url={
                  "https://gateway.rentamon.com/webhook/2beea5b6-eb8c-47d6-9746-fe093e22ea39"
                }
              >
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
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
                      className={classNames(projectcss.all, sty.freeBox__uJ85I)}
                      key={currentIndex}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eu8Pg
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $state.apiRequest.data[
                                currentIndex
                              ].GuestName.concat(
                                $state.apiRequest.data[currentIndex]
                                  .GuestLastName
                              );
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "\u062e\u0633\u0631\u0648 \u067e\u0627\u0631\u0633\u0627\u06cc\u06cc";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___5Q5Ku
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $state.apiRequest.data[
                                currentIndex
                              ].enterDate.split(" ")[0];
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "\u06f1\u06f4\u06f0\u06f3/\u06f0\u06f4/\u06f1\u06f2";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___4Gucm
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "smallMobile") ? (
                          <React.Fragment>
                            {(() => {
                              try {
                                return (
                                  // $state.apiRequest.data[currentIndex].platfromName
                                  "مهمانشو"
                                );
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "\u0634\u0628";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        ) : hasVariant(globalVariants, "screen", "mobile") ? (
                          <React.Fragment>
                            {(() => {
                              try {
                                return (
                                  // $state.apiRequest.data[currentIndex].platfromName
                                  "مهمانشو"
                                );
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "\u0634\u0628";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {(() => {
                              try {
                                return $state.apiRequest.data[currentIndex]
                                  .platfromName;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "\u0634\u0628";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        )}
                      </div>
                    </div>
                  );
                })}
              </ApiRequest>
            </Stack__>
          </Stack__>
          <div
            className={classNames(projectcss.all, sty.freeBox___6E2UZ, "fix")}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__maw5U
              )}
            >
              {"\u0628\u0627\u0632\u06af\u0634\u062a "}
            </div>
          </div>
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tqdbP
              )}
            >
              {"\u0628\u0627\u0632\u06af\u0634\u062a"}
            </div>
          </Button>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "reserveMainStack", "apiRequest", "img", "button"],
  reserveMainStack: ["reserveMainStack", "apiRequest", "img"],
  apiRequest: ["apiRequest", "img"],
  img: ["img"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  reserveMainStack: "div";
  apiRequest: typeof ApiRequest;
  img: typeof PlasmicImg__;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReservations__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReservations__VariantsArgs;
    args?: PlasmicReservations__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReservations__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicReservations__ArgsType,
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
          internalArgPropNames: PlasmicReservations__ArgProps,
          internalVariantPropNames: PlasmicReservations__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReservations__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReservations";
  } else {
    func.displayName = `PlasmicReservations.${nodeName}`;
  }
  return func;
}

export const PlasmicReservations = Object.assign(
  // Top-level PlasmicReservations renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reserveMainStack: makeNodeComponent("reserveMainStack"),
    apiRequest: makeNodeComponent("apiRequest"),
    img: makeNodeComponent("img"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicReservations
    internalVariantProps: PlasmicReservations__VariantProps,
    internalArgProps: PlasmicReservations__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicReservations;
/* prettier-ignore-end */
