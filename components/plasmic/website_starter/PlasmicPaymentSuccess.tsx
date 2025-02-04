// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: P-CxSrGa5GbD

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
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicPaymentSuccess.module.css"; // plasmic-import: P-CxSrGa5GbD/css

createPlasmicElementProxy;

export type PlasmicPaymentSuccess__VariantMembers = {};
export type PlasmicPaymentSuccess__VariantsArgs = {};
type VariantPropType = keyof PlasmicPaymentSuccess__VariantsArgs;
export const PlasmicPaymentSuccess__VariantProps = new Array<VariantPropType>();

export type PlasmicPaymentSuccess__ArgsType = {};
type ArgPropType = keyof PlasmicPaymentSuccess__ArgsType;
export const PlasmicPaymentSuccess__ArgProps = new Array<ArgPropType>();

export type PlasmicPaymentSuccess__OverridesType = {
  paymentSuccess?: Flex__<"div">;
  embedHtml?: Flex__<typeof Embed>;
  successful?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultPaymentSuccessProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPaymentSuccess__RenderFunc(props: {
  variants: PlasmicPaymentSuccess__VariantsArgs;
  args: PlasmicPaymentSuccess__ArgsType;
  overrides: PlasmicPaymentSuccess__OverridesType;
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
          data-plasmic-name={"paymentSuccess"}
          data-plasmic-override={overrides.paymentSuccess}
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
            sty.paymentSuccess
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

          <div className={classNames(projectcss.all, sty.freeBox___0AyQx)}>
            <div className={classNames(projectcss.all, sty.freeBox__hkyq9)}>
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
                    ? "180px"
                    : "240px"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/website_starter/images/checkPng.png",
                  fullWidth: 483,
                  fullHeight: 484,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sWhN5
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "\u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f"
                : "\u067e\u0631\u062f\u0627\u062e\u062a \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f"}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__qv6Bb)}>
              <div className={classNames(projectcss.all, sty.freeBox___0IaJ7)}>
                <div className={classNames(projectcss.all, sty.freeBox__brmxc)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cI0YB
                    )}
                  >
                    {"\u06a9\u062f \u067e\u06cc\u06af\u06cc\u0631\u06cc:"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__dUcoS)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0S5Du
                    )}
                  >
                    {"Enter some text"}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={classNames(projectcss.all, sty.freeBox__su0Hi)}
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
                  typeof $steps["goToHttpsRentamonComPanels"].then ===
                    "function"
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
                  sty.text__hG9Gz
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "var(--token-8nedppYkGVaH)" }}
                  >
                    {
                      "\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u067e\u0646\u0644 \u0645\u062f\u06cc\u0631\u06cc\u062a \u0627\u0642\u0627\u0645\u062a\u06af\u0627\u0647"
                    }
                  </span>
                </React.Fragment>
              </div>
            </div>
          </div>
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <div className={classNames(projectcss.all, sty.freeBox__zoeQd)} />
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <div className={classNames(projectcss.all, sty.freeBox__sJiz8)} />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  paymentSuccess: ["paymentSuccess", "embedHtml", "successful"],
  embedHtml: ["embedHtml"],
  successful: ["successful"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  paymentSuccess: "div";
  embedHtml: typeof Embed;
  successful: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPaymentSuccess__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPaymentSuccess__VariantsArgs;
    args?: PlasmicPaymentSuccess__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPaymentSuccess__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPaymentSuccess__ArgsType,
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
          internalArgPropNames: PlasmicPaymentSuccess__ArgProps,
          internalVariantPropNames: PlasmicPaymentSuccess__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPaymentSuccess__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "paymentSuccess") {
    func.displayName = "PlasmicPaymentSuccess";
  } else {
    func.displayName = `PlasmicPaymentSuccess.${nodeName}`;
  }
  return func;
}

export const PlasmicPaymentSuccess = Object.assign(
  // Top-level PlasmicPaymentSuccess renders the root element
  makeNodeComponent("paymentSuccess"),
  {
    // Helper components rendering sub-elements
    embedHtml: makeNodeComponent("embedHtml"),
    successful: makeNodeComponent("successful"),

    // Metadata about props expected for PlasmicPaymentSuccess
    internalVariantProps: PlasmicPaymentSuccess__VariantProps,
    internalArgProps: PlasmicPaymentSuccess__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPaymentSuccess;
/* prettier-ignore-end */
