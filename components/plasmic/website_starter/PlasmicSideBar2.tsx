// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: 03ZPQfFyBXgI

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

import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicSideBar2.module.css"; // plasmic-import: 03ZPQfFyBXgI/css

import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: GlNmRVfZkYuK/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: 7-GvAf5G7Hmg/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: G4zLKDdGFlpV/icon
import Icon13Icon from "./icons/PlasmicIcon__Icon13"; // plasmic-import: 523_R9Q_1fOL/icon
import Icon9Icon from "./icons/PlasmicIcon__Icon9"; // plasmic-import: -W2vZqDz6R8K/icon
import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: ephTBPt3GwGA/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: PfTCttn7BvdX/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: mmPtFHknd4hG/icon

createPlasmicElementProxy;

export type PlasmicSideBar2__VariantMembers = {};
export type PlasmicSideBar2__VariantsArgs = {};
type VariantPropType = keyof PlasmicSideBar2__VariantsArgs;
export const PlasmicSideBar2__VariantProps = new Array<VariantPropType>();

export type PlasmicSideBar2__ArgsType = {
  isOpen?: boolean;
  userData?: any;
};
type ArgPropType = keyof PlasmicSideBar2__ArgsType;
export const PlasmicSideBar2__ArgProps = new Array<ArgPropType>(
  "isOpen",
  "userData"
);

export type PlasmicSideBar2__OverridesType = {
  modalSidebar?: Flex__<typeof AntdModal>;
};

export interface DefaultSideBar2Props {
  isOpen?: boolean;
  userData?: any;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSideBar2__RenderFunc(props: {
  variants: PlasmicSideBar2__VariantsArgs;
  args: PlasmicSideBar2__ArgsType;
  overrides: PlasmicSideBar2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          isOpen: true
        },
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
        path: "modalSidebar.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.isOpen;
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
    <AntdModal
      data-plasmic-name={"modalSidebar"}
      data-plasmic-override={overrides.modalSidebar}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.modalSidebar
      )}
      defaultStylesClassName={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens
      )}
      hideFooter={true}
      maskClosable={true}
      modalContentClassName={classNames({ [sty["pcls_uK2s887hZzv8"]]: true })}
      modalScopeClassName={sty["modalSidebar__modal"]}
      onOpenChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, ["modalSidebar", "open"]).apply(
          null,
          eventArgs
        );
      }}
      open={generateStateValueProp($state, ["modalSidebar", "open"])}
      title={
        <div
          className={classNames(projectcss.all, sty.freeBox__bKks3)}
          onClick={async event => {
            const $steps = {};

            $steps["updateModalOpen"] = true
              ? (() => {
                  const actionArgs = {
                    operation: 0,
                    variable: {
                      objRoot: $state,
                      variablePath: ["modalSidebar", "open"]
                    }
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateModalOpen"] != null &&
              typeof $steps["updateModalOpen"] === "object" &&
              typeof $steps["updateModalOpen"].then === "function"
            ) {
              $steps["updateModalOpen"] = await $steps["updateModalOpen"];
            }
          }}
        >
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__si1Ge)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"20px"}
            loading={"lazy"}
            src={
              hasVariant(globalVariants, "screen", "mobile")
                ? {
                    src: "/plasmic/website_starter/images/image36.svg",
                    fullWidth: 21,
                    fullHeight: 24,
                    aspectRatio: 0.875
                  }
                : {
                    src: "/plasmic/website_starter/images/image36.svg",
                    fullWidth: 21,
                    fullHeight: 24,
                    aspectRatio: 0.875
                  }
            }
          />
        </div>
      }
      trigger={
        <div className={classNames(projectcss.all, sty.freeBox__zlZzK)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__o0UC)}
            displayHeight={
              hasVariant(globalVariants, "screen", "smallMobile")
                ? "20px"
                : hasVariant(globalVariants, "screen", "mobile")
                ? "27px"
                : hasVariant(globalVariants, "screen", "tablet")
                ? "41px"
                : "49px"
            }
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/website_starter/images/image37.svg",
              fullWidth: 21,
              fullHeight: 24,
              aspectRatio: 0.875
            }}
          />
        </div>
      }
      width={hasVariant(globalVariants, "screen", "mobile") ? "75%" : "50%"}
      wrapClassName={classNames({ [sty["pcls_CJNwevy9HtLv"]]: true })}
    >
      <div className={classNames(projectcss.all, sty.freeBox__zNdeq, "vh")}>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__jzKe6)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobile") ? "60px" : "100px"
          }
          height={"100px"}
          loading={"lazy"}
          src={(() => {
            try {
              return $props.userData.user_info.profile_image;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return {
                  src: "/plasmic/website_starter/images/image31.svg",
                  fullWidth: 96,
                  fullHeight: 96,
                  aspectRatio: 1
                };
              }
              throw e;
            }
          })()}
          width={"100px"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gj0UI
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.userData.user_info.first_name.concat(
                  " ",
                  $props.userData.user_info.last_name
                );
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__frdDg)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__yk8
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return (() => {
                    const balance_info = $props.userData.user_info.balance_info;
                    const reducedBalance = balance_info.balance / 10;
                    const formattedBalance = new Intl.NumberFormat(
                      "fa-IR"
                    ).format(reducedBalance);
                    return `اعتبار: ${formattedBalance} تومان`;
                  })();
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </Stack__>
        <div className={classNames(projectcss.all, sty.freeBox__nmPd)} />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__klQF, "clickable")}
          onClick={async event => {
            const $steps = {};

            $steps["updateModalSidebarOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["modalSidebar", "open"]
                    },
                    operation: 0
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateModalSidebarOpen"] != null &&
              typeof $steps["updateModalSidebarOpen"] === "object" &&
              typeof $steps["updateModalSidebarOpen"].then === "function"
            ) {
              $steps["updateModalSidebarOpen"] = await $steps[
                "updateModalSidebarOpen"
              ];
            }

            $steps["runCode"] = true
              ? (() => {
                  const actionArgs = {
                    customFunction: async () => {
                      return (window.location.href =
                        "https://rentamon.com/pricing/");
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
          <Icon5Icon
            className={classNames(projectcss.all, sty.svg__s3Sds)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__hcNg
            )}
          >
            {"\u0634\u0627\u0631\u0698 \u06a9\u06cc\u0641 \u067e\u0648\u0644"}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(
            projectcss.all,
            sty.freeBox___5JuLu,
            "clickable"
          )}
          onClick={async event => {
            const $steps = {};

            $steps["updateModalSidebarOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["modalSidebar", "open"]
                    },
                    operation: 0
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateModalSidebarOpen"] != null &&
              typeof $steps["updateModalSidebarOpen"] === "object" &&
              typeof $steps["updateModalSidebarOpen"].then === "function"
            ) {
              $steps["updateModalSidebarOpen"] = await $steps[
                "updateModalSidebarOpen"
              ];
            }

            $steps["goToPanelCalendar"] = false
              ? (() => {
                  const actionArgs = { destination: `/panel` };
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
              $steps["goToPanelCalendar"] != null &&
              typeof $steps["goToPanelCalendar"] === "object" &&
              typeof $steps["goToPanelCalendar"].then === "function"
            ) {
              $steps["goToPanelCalendar"] = await $steps["goToPanelCalendar"];
            }
          }}
        >
          <Icon6Icon
            className={classNames(projectcss.all, sty.svg__yFikr)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__otwx1
            )}
          >
            {
              "\u062a\u0642\u0648\u06cc\u0645 \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647"
            }
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(
            projectcss.all,
            sty.freeBox__hfEa2,
            "clickable"
          )}
          onClick={async event => {
            const $steps = {};

            $steps["updateModalSidebarOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["modalSidebar", "open"]
                    },
                    operation: 0
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateModalSidebarOpen"] != null &&
              typeof $steps["updateModalSidebarOpen"] === "object" &&
              typeof $steps["updateModalSidebarOpen"].then === "function"
            ) {
              $steps["updateModalSidebarOpen"] = await $steps[
                "updateModalSidebarOpen"
              ];
            }

            $steps["goToInstantReserve"] = true
              ? (() => {
                  const actionArgs = { destination: `/instant-reserve` };
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
              $steps["goToInstantReserve"] != null &&
              typeof $steps["goToInstantReserve"] === "object" &&
              typeof $steps["goToInstantReserve"].then === "function"
            ) {
              $steps["goToInstantReserve"] = await $steps["goToInstantReserve"];
            }
          }}
        >
          <Icon7Icon
            className={classNames(projectcss.all, sty.svg__oeo6L)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__zZboN
            )}
          >
            {"\u0631\u0632\u0631\u0648 \u0622\u0646\u06cc"}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(
            projectcss.all,
            sty.freeBox__v6FnF,
            "clickable"
          )}
        >
          <Icon13Icon
            className={classNames(projectcss.all, sty.svg__i5X8Z)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___4ITo
            )}
          >
            {
              "\u06af\u0632\u0627\u0631\u0634 \u0645\u0635\u0631\u0641 \u0627\u0639\u062a\u0628\u0627\u0631"
            }
          </div>
        </Stack__>
        <div className={classNames(projectcss.all, sty.freeBox__sWbL)} />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(
            projectcss.all,
            sty.freeBox___6SALn,
            "clickable"
          )}
        >
          <Icon9Icon
            className={classNames(projectcss.all, sty.svg__hanOi)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__hw3Xm
            )}
            onClick={async event => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          return (window.location.href =
                            "https://rentamon.com/");
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
            {"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc"}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(
            projectcss.all,
            sty.freeBox__xeLsa,
            "clickable"
          )}
          onClick={async event => {
            const $steps = {};

            $steps["updateModalSidebarOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["modalSidebar", "open"]
                    },
                    operation: 0
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateModalSidebarOpen"] != null &&
              typeof $steps["updateModalSidebarOpen"] === "object" &&
              typeof $steps["updateModalSidebarOpen"].then === "function"
            ) {
              $steps["updateModalSidebarOpen"] = await $steps[
                "updateModalSidebarOpen"
              ];
            }

            $steps["runCode"] = true
              ? (() => {
                  const actionArgs = {
                    customFunction: async () => {
                      return (() => {
                        return (window.location.href =
                          "https://rentamon.com/download");
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
          <Icon14Icon
            className={classNames(projectcss.all, sty.svg__zDxBe)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__zns75
            )}
          >
            {
              "\u062f\u0631\u06cc\u0627\u0641\u062a \u0622\u062e\u0631\u06cc\u0646 \u0646\u0633\u062e\u0647"
            }
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(
            projectcss.all,
            sty.freeBox___4HzoA,
            "clickable"
          )}
          onClick={async event => {
            const $steps = {};

            $steps["updateModalSidebarOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["modalSidebar", "open"]
                    },
                    operation: 0
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateModalSidebarOpen"] != null &&
              typeof $steps["updateModalSidebarOpen"] === "object" &&
              typeof $steps["updateModalSidebarOpen"].then === "function"
            ) {
              $steps["updateModalSidebarOpen"] = await $steps[
                "updateModalSidebarOpen"
              ];
            }

            $steps["runCode"] = true
              ? (() => {
                  const actionArgs = {
                    customFunction: async () => {
                      return (() => {
                        return (window.location.href =
                          "https://sso.rentamon.com/auth/logout?callback=https://rentamon.com/panel");
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
          <Icon11Icon
            className={classNames(projectcss.all, sty.svg___87ITw)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__lej7C
            )}
          >
            {"\u062e\u0631\u0648\u062c"}
          </div>
        </Stack__>
        <div className={classNames(projectcss.all, sty.freeBox__z3V5X)} />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__giLd)}
        >
          <Icon15Icon
            className={classNames(projectcss.all, sty.svg__umjx5)}
            onClick={async event => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          return (window.location.href =
                            "https://rentamon.com/");
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
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gEePk
            )}
          >
            {
              "\u06f0\u06f2\u06f1-\u06f9\u06f1\u06f0\u06f9\u06f6\u06f2\u06f2\u06f7\n\u0631\u0648\u0632\u0647\u0627\u06cc \u0627\u062f\u0627\u0631\u06cc \u0627\u0632 \u06f9 \u062a\u0627 \u06f1\u06f7"
            }
          </div>
        </Stack__>
      </div>
    </AntdModal>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  modalSidebar: ["modalSidebar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  modalSidebar: typeof AntdModal;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSideBar2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSideBar2__VariantsArgs;
    args?: PlasmicSideBar2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSideBar2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSideBar2__ArgsType,
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
          internalArgPropNames: PlasmicSideBar2__ArgProps,
          internalVariantPropNames: PlasmicSideBar2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSideBar2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "modalSidebar") {
    func.displayName = "PlasmicSideBar2";
  } else {
    func.displayName = `PlasmicSideBar2.${nodeName}`;
  }
  return func;
}

export const PlasmicSideBar2 = Object.assign(
  // Top-level PlasmicSideBar2 renders the root element
  makeNodeComponent("modalSidebar"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSideBar2
    internalVariantProps: PlasmicSideBar2__VariantProps,
    internalArgProps: PlasmicSideBar2__ArgProps
  }
);

export default PlasmicSideBar2;
/* prettier-ignore-end */