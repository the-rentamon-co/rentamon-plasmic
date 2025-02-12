// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: DSdlo5kdtbOe

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

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicRentamonFooter.module.css"; // plasmic-import: DSdlo5kdtbOe/css

createPlasmicElementProxy;

export type PlasmicRentamonFooter__VariantMembers = {};
export type PlasmicRentamonFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicRentamonFooter__VariantsArgs;
export const PlasmicRentamonFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicRentamonFooter__ArgsType = {};
type ArgPropType = keyof PlasmicRentamonFooter__ArgsType;
export const PlasmicRentamonFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicRentamonFooter__OverridesType = {
  footer?: Flex__<"div">;
  mid?: Flex__<"div">;
  _1st?: Flex__<"div">;
  top?: Flex__<"div">;
  but?: Flex__<"div">;
};

export interface DefaultRentamonFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRentamonFooter__RenderFunc(props: {
  variants: PlasmicRentamonFooter__VariantsArgs;
  args: PlasmicRentamonFooter__ArgsType;
  overrides: PlasmicRentamonFooter__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsaSuSwU8JUYf()
  });

  return (
    <div
      data-plasmic-name={"footer"}
      data-plasmic-override={overrides.footer}
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
        sty.footer
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__bbk5A)}>
        <div
          data-plasmic-name={"mid"}
          data-plasmic-override={overrides.mid}
          className={classNames(projectcss.all, sty.mid)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__bKwGn)}>
            <div className={classNames(projectcss.all, sty.freeBox___8NVqX)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__jJcc)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                onClick={async event => {
                  const $steps = {};

                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return (() => {
                              return window.open(
                                "https://trustseal.enamad.ir/?id=519096&Code=fdj2sP7CDtWiwQ8TSBYwkC5IZBhGPG16",
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
                    $steps["runCode"] != null &&
                    typeof $steps["runCode"] === "object" &&
                    typeof $steps["runCode"].then === "function"
                  ) {
                    $steps["runCode"] = await $steps["runCode"];
                  }
                }}
                src={{
                  src: "/plasmic/website_starter/images/image50.png",
                  fullWidth: 125,
                  fullHeight: 136,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__zeOcA)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__musna
                )}
              >
                {
                  "\u062f\u0627\u0631\u0627\u06cc \u0646\u0645\u0627\u062f \u0627\u0639\u062a\u0645\u0627\u062f \u062a\u062c\u0627\u0631\u062a \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9 (\u0627\u06cc\u0646\u0645\u0627\u062f)\r\n\r"
                }
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___6NgD)}>
            <div className={classNames(projectcss.all, sty.freeBox__kl8Ks)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__fgjwb)}
                displayHeight={"147px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/website_starter/images/image49.png",
                  fullWidth: 150,
                  fullHeight: 200,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__zpfjo)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xral5
                )}
              >
                {
                  "\u0639\u0636\u0648 \u067e\u0627\u0631\u06a9 \u0639\u0644\u0645 \u0648 \u0641\u0646\u0627\u0648\u0631\u06cc \u0627\u0633\u062a\u0627\u0646 \u0642\u0645"
                }
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__rneVq)}>
            <div className={classNames(projectcss.all, sty.freeBox__jg7Dj)} />

            <div className={classNames(projectcss.all, sty.freeBox__nlJwg)} />
          </div>
        </div>
      </div>
      <div
        data-plasmic-name={"_1st"}
        data-plasmic-override={overrides._1st}
        className={classNames(projectcss.all, sty._1st)}
      >
        <div className={classNames(projectcss.all, sty.freeBox___4Otdk)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__xugAr
            )}
          >
            {
              "\u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u062f\u0631 \u0634\u0628\u06a9\u0647\u200c\u0647\u0627\u06cc \u0627\u062c\u062a\u0645\u0627\u0639\u06cc"
            }
          </div>
        </div>
      </div>
      <div
        data-plasmic-name={"top"}
        data-plasmic-override={overrides.top}
        className={classNames(projectcss.all, sty.top)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__mfJK)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__n8G93)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"40%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            onClick={async event => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          return window.open("https://eitaa.com/rentamon_ir");
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
            src={{
              src: "/plasmic/website_starter/images/image52.png",
              fullWidth: 120,
              fullHeight: 120,
              aspectRatio: undefined
            }}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__ptz4H)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__lRbQg)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"40%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            onClick={async event => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          return window.open(
                            "https://www.instagram.com/rentamon.ir"
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
            }}
            src={{
              src: "/plasmic/website_starter/images/image53.png",
              fullWidth: 120,
              fullHeight: 120,
              aspectRatio: undefined
            }}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__pbryw)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__lkNc)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"40%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            onClick={async event => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          return window.open("https://t.me/rentamon_ir");
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
            src={{
              src: "/plasmic/website_starter/images/image51.png",
              fullWidth: 120,
              fullHeight: 120,
              aspectRatio: undefined
            }}
          />
        </div>
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"but"}
        data-plasmic-override={overrides.but}
        hasGap={true}
        className={classNames(projectcss.all, sty.but)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__hVQnd)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cednT
            )}
          >
            {
              "\u062f\u0631\u062f\u0633\u0631\u0647\u0627\u06cc  \u0645\u062f\u06cc\u0631\u06cc\u062a \u062a\u0642\u0648\u06cc\u0645 \u0627\u0642\u0627\u0645\u062a\u06af\u0627\u0647 \u0631\u0648 \u0628\u0633\u067e\u0627\u0631 \u0628\u0647 \u0631\u0646\u062a\u0627\u0645\u0648\u0646\u060c \u0648 \u0648\u0642\u062a\u200c\u062a\u0648 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0647\u0627\u06cc \u0645\u0647\u0645\u200c\u062a\u0631 \u0622\u0632\u0627\u062f \u06a9\u0646 :)"
            }
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__js4R)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gLJN
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {
                  "\u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u067e\u0631 \u06a9\u0627\u0631\u0628\u0631\u062f:\r"
                }
              </span>
              <React.Fragment>{"\n"}</React.Fragment>
              {
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link__jRcOx
                  )}
                  component={Link}
                  href={"https://rentamon.com/demo/features"}
                  platform={"nextjs"}
                >
                  {
                    "\u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u067e\u0646\u0644 \u0645\u062f\u06cc\u0631\u06cc\u062a"
                  }
                </PlasmicLink__>
              }
              <React.Fragment>{"\r\n"}</React.Fragment>
              {
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link__nlmQx
                  )}
                  component={Link}
                  href={"/pricing"}
                  platform={"nextjs"}
                >
                  {
                    "\u0634\u0627\u0631\u0698 \u06a9\u06cc\u0641 \u067e\u0648\u0644"
                  }
                </PlasmicLink__>
              }
              <React.Fragment>{"\r\n"}</React.Fragment>
              {
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link__vfWxE
                  )}
                  component={Link}
                  href={
                    "https://rentamon.com/%d9%82%d9%88%d8%a7%d9%86%db%8c%d9%86-%d8%b1%d9%86%d8%aa%d8%a7%d9%85%d9%88%d9%86/"
                  }
                  platform={"nextjs"}
                >
                  {
                    "\u0642\u0648\u0627\u0646\u06cc\u0646 \u0648 \u0645\u0642\u0631\u0631\u0627\u062a"
                  }
                </PlasmicLink__>
              }
              <React.Fragment>{"\r\n"}</React.Fragment>
              {
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link__ga3Cy
                  )}
                  component={Link}
                  href={
                    "https://rentamon.com/\u062f\u0631\u0628\u0627\u0631\u0647-\u0645\u0627"
                  }
                  platform={"nextjs"}
                >
                  {"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"}
                </PlasmicLink__>
              }
              <React.Fragment>{"\r\n"}</React.Fragment>
              {
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link__nrAWt
                  )}
                  component={Link}
                  href={"https://rentamon.com/integrations/"}
                  platform={"nextjs"}
                >
                  {
                    "\u0635\u0627\u062d\u0628 \u067e\u0644\u062a\u0641\u0631\u0645 \u0627\u062c\u0627\u0631\u0647 \u0627\u0642\u0627\u0645\u062a\u06af\u0627\u0647 \u0647\u0633\u062a\u06cc\u061f"
                  }
                </PlasmicLink__>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__rLfH4)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__zFLzn
            )}
          >
            {hasVariant(globalVariants, "screen", "smallMobile") ? (
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {
                    "\u06f0\u06f2\u06f1\u06f9\u06f1\u06f0\u06f9\u06f6\u06f2\u06f2\u06f7 \u0631\u0648\u0632\u0647\u0627\u06cc \u0627\u062f\u0627\u0631\u06cc \u0627\u0632 \u06f9 \u0627\u0644\u06cc \u06f1\u06f7\r"
                  }
                </span>
                <React.Fragment>
                  {
                    "\ninfo [@] rentamon.com\r\n\u0642\u0645\u060c \u067e\u0631\u062f\u06cc\u0633\u0627\u0646\u060c \u0628\u0644\u0648\u0627\u0631 \u0645\u0648\u0644\u0648\u06cc\u060c \u067e\u0627\u0631\u06a9 \u0639\u0644\u0645 \u0648 \u0641\u0646\u0627\u0648\u0631\u06cc \u0627\u0633\u062a\u0627\u0646 \u0642\u0645\u060c \u0628\u0644\u0648\u06a9 \u06f1\u060c\u200c \u0637\u0628\u0642\u0647 \u06f3\n\u0634\u0631\u06a9\u062a \u062a\u0648\u0633\u0639\u0647 \u0641\u0646\u0627\u0648\u0631\u06cc \u0648 \u062a\u0648\u0627\u0646\u0645\u0646\u062f\u0633\u0627\u0632\u06cc \u0634\u0631\u06cc\u0641"
                  }
                </React.Fragment>
              </React.Fragment>
            ) : hasVariant(globalVariants, "screen", "mobile") ? (
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {
                    "\u06f0\u06f2\u06f1\u06f9\u06f1\u06f0\u06f9\u06f6\u06f2\u06f2\u06f7 \u0631\u0648\u0632\u0647\u0627\u06cc \u0627\u062f\u0627\u0631\u06cc \u0627\u0632 \u06f9 \u0627\u0644\u06cc \u06f1\u06f7\r"
                  }
                </span>
                <React.Fragment>
                  {
                    "\ninfo [@] rentamon.com\r\n\u0642\u0645\u060c \u067e\u0631\u062f\u06cc\u0633\u0627\u0646\u060c \u0628\u0644\u0648\u0627\u0631 \u0645\u0648\u0644\u0648\u06cc\u060c \u067e\u0627\u0631\u06a9 \u0639\u0644\u0645 \u0648 \u0641\u0646\u0627\u0648\u0631\u06cc \u0627\u0633\u062a\u0627\u0646 \u0642\u0645\u060c \u0628\u0644\u0648\u06a9 \u06f1\u060c\u200c \u0637\u0628\u0642\u0647 \u06f3\n\u0634\u0631\u06a9\u062a \u062a\u0648\u0633\u0639\u0647 \u0641\u0646\u0627\u0648\u0631\u06cc \u0648 \u062a\u0648\u0627\u0646\u0645\u0646\u062f\u0633\u0627\u0632\u06cc \u0634\u0631\u06cc\u0641"
                  }
                </React.Fragment>
              </React.Fragment>
            ) : hasVariant(globalVariants, "screen", "tablet") ? (
              "\u06f0\u06f2\u06f1\u06f9\u06f1\u06f0\u06f9\u06f6\u06f2\u06f2\u06f7 \u0631\u0648\u0632\u0647\u0627\u06cc \u0627\u062f\u0627\u0631\u06cc \u0627\u0632 \u06f9 \u0627\u0644\u06cc \u06f1\u06f7\r\ninfo [@] rentamon.com\r\n\u0642\u0645\u060c \u067e\u0631\u062f\u06cc\u0633\u0627\u0646\u060c \u0628\u0644\u0648\u0627\u0631 \u0645\u0648\u0644\u0648\u06cc\u060c \u067e\u0627\u0631\u06a9 \u0639\u0644\u0645 \u0648 \u0641\u0646\u0627\u0648\u0631\u06cc \u0627\u0633\u062a\u0627\u0646 \u0642\u0645\u060c \u0628\u0644\u0648\u06a9 \u06f1\u060c\u200c \u0637\u0628\u0642\u0647 \u06f3\n\u0634\u0631\u06a9\u062a \u062a\u0648\u0633\u0639\u0647 \u0641\u0646\u0627\u0648\u0631\u06cc \u0648 \u062a\u0648\u0627\u0646\u0645\u0646\u062f\u0633\u0627\u0632\u06cc \u0634\u0631\u06cc\u0641"
            ) : (
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {
                    "\u06f0\u06f2\u06f1\u06f9\u06f1\u06f0\u06f9\u06f6\u06f2\u06f2\u06f7 \u0631\u0648\u0632\u0647\u0627\u06cc \u0627\u062f\u0627\u0631\u06cc \u0627\u0632 \u06f9 \u0627\u0644\u06cc \u06f1\u06f7\r"
                  }
                </span>
                <React.Fragment>
                  {
                    "\ninfo [@] rentamon.com\r\n\u0642\u0645\u060c \u067e\u0631\u062f\u06cc\u0633\u0627\u0646\u060c \u0628\u0644\u0648\u0627\u0631 \u0645\u0648\u0644\u0648\u06cc\u060c \u067e\u0627\u0631\u06a9 \u0639\u0644\u0645 \u0648 \u0641\u0646\u0627\u0648\u0631\u06cc \u0627\u0633\u062a\u0627\u0646 \u0642\u0645\u060c \u0628\u0644\u0648\u06a9 \u06f1\u060c\u200c \u0637\u0628\u0642\u0647 \u06f3\n\u0634\u0631\u06a9\u062a \u062a\u0648\u0633\u0639\u0647 \u0641\u0646\u0627\u0648\u0631\u06cc \u0648 \u062a\u0648\u0627\u0646\u0645\u0646\u062f\u0633\u0627\u0632\u06cc \u0634\u0631\u06cc\u0641"
                  }
                </React.Fragment>
              </React.Fragment>
            )}
          </div>
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  footer: ["footer", "mid", "_1st", "top", "but"],
  mid: ["mid"],
  _1st: ["_1st"],
  top: ["top"],
  but: ["but"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  footer: "div";
  mid: "div";
  _1st: "div";
  top: "div";
  but: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRentamonFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRentamonFooter__VariantsArgs;
    args?: PlasmicRentamonFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRentamonFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRentamonFooter__ArgsType,
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
          internalArgPropNames: PlasmicRentamonFooter__ArgProps,
          internalVariantPropNames: PlasmicRentamonFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRentamonFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footer") {
    func.displayName = "PlasmicRentamonFooter";
  } else {
    func.displayName = `PlasmicRentamonFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicRentamonFooter = Object.assign(
  // Top-level PlasmicRentamonFooter renders the root element
  makeNodeComponent("footer"),
  {
    // Helper components rendering sub-elements
    mid: makeNodeComponent("mid"),
    _1st: makeNodeComponent("_1st"),
    top: makeNodeComponent("top"),
    but: makeNodeComponent("but"),

    // Metadata about props expected for PlasmicRentamonFooter
    internalVariantProps: PlasmicRentamonFooter__VariantProps,
    internalArgProps: PlasmicRentamonFooter__ArgProps
  }
);

export default PlasmicRentamonFooter;
/* prettier-ignore-end */
