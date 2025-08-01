/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: juphYAqvVhVp

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

import NavbarRntHeader from "../../NavbarRntHeader"; // plasmic-import: gWac1FMbIJat/component
import { Iframe } from "@plasmicpkgs/plasmic-basic-components";
import ClarityRntComponent from "../../ClarityRntComponent"; // plasmic-import: J5D8c7V05ty1/component
import FaviconRntComponent from "../../FaviconRntComponent"; // plasmic-import: 2Chy9NeUIB9Q/component
import RentamonFooter from "../../RentamonFooter"; // plasmic-import: DSdlo5kdtbOe/component

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./Plasmicدستیارهوشمصنوعیرنتامون.module.css"; // plasmic-import: juphYAqvVhVp/css

createPlasmicElementProxy;

export type Plasmicدستیارهوشمصنوعیرنتامون__VariantMembers = {};
export type Plasmicدستیارهوشمصنوعیرنتامون__VariantsArgs = {};
type VariantPropType = keyof Plasmicدستیارهوشمصنوعیرنتامون__VariantsArgs;
export const Plasmicدستیارهوشمصنوعیرنتامون__VariantProps =
  new Array<VariantPropType>();

export type Plasmicدستیارهوشمصنوعیرنتامون__ArgsType = {};
type ArgPropType = keyof Plasmicدستیارهوشمصنوعیرنتامون__ArgsType;
export const Plasmicدستیارهوشمصنوعیرنتامون__ArgProps = new Array<ArgPropType>();

export type Plasmicدستیارهوشمصنوعیرنتامون__OverridesType = {
  root?: Flex__<"div">;
  navbarRntHeader?: Flex__<typeof NavbarRntHeader>;
  mainContents?: Flex__<"div">;
  intro1st?: Flex__<"div">;
  introTitle?: Flex__<"div">;
  دربارهما?: Flex__<"div">;
  introCalendarLeft?: Flex__<"div">;
  ai?: Flex__<typeof Iframe>;
  introCalendarLeft2?: Flex__<"div">;
  html?: Flex__<"div">;
  clarityRntComponent?: Flex__<typeof ClarityRntComponent>;
  faviconRntComponent?: Flex__<typeof FaviconRntComponent>;
  rentamonFooter?: Flex__<typeof RentamonFooter>;
};

export interface DefaultدستیارهوشمصنوعیرنتامونProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmicدستیارهوشمصنوعیرنتامون__RenderFunc(props: {
  variants: Plasmicدستیارهوشمصنوعیرنتامون__VariantsArgs;
  args: Plasmicدستیارهوشمصنوعیرنتامون__ArgsType;
  overrides: Plasmicدستیارهوشمصنوعیرنتامون__OverridesType;
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
        path: "propertyId",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
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
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">
          {Plasmicدستیارهوشمصنوعیرنتامون.pageMetadata.title}
        </title>
        <meta
          key="og:title"
          property="og:title"
          content={Plasmicدستیارهوشمصنوعیرنتامون.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={Plasmicدستیارهوشمصنوعیرنتامون.pageMetadata.title}
        />
      </Head>

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
          <NavbarRntHeader
            data-plasmic-name={"navbarRntHeader"}
            data-plasmic-override={overrides.navbarRntHeader}
            className={classNames("__wab_instance", sty.navbarRntHeader)}
          />

          <div
            data-plasmic-name={"mainContents"}
            data-plasmic-override={overrides.mainContents}
            className={classNames(projectcss.all, sty.mainContents)}
          >
            <div
              data-plasmic-name={"intro1st"}
              data-plasmic-override={overrides.intro1st}
              className={classNames(projectcss.all, sty.intro1st)}
            >
              <div
                data-plasmic-name={"introTitle"}
                data-plasmic-override={overrides.introTitle}
                className={classNames(projectcss.all, sty.introTitle)}
              >
                <div
                  data-plasmic-name={
                    "\u062f\u0631\u0628\u0627\u0631\u0647\u0645\u0627"
                  }
                  data-plasmic-override={overrides.دربارهما}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.دربارهما
                  )}
                >
                  {
                    "\u062f\u0633\u062a\u06cc\u0627\u0631 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0631\u0646\u062a\u0627\u0645\u0648\u0646 (\u0622\u0632\u0645\u0627\u06cc\u0634\u06cc)"
                  }
                </div>
              </div>
              <div
                data-plasmic-name={"introCalendarLeft"}
                data-plasmic-override={overrides.introCalendarLeft}
                className={classNames(projectcss.all, sty.introCalendarLeft)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__yeaZj)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"16%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/website_starter/images/group672Png.png",
                    fullWidth: 252,
                    fullHeight: 194,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__j0An
                  )}
                >
                  {hasVariant(globalVariants, "screen", "tablet")
                    ? "\u062f\u0633\u062a\u06cc\u0627\u0631 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u0647 \u0631\u0627\u062d\u062a\u200c\u062a\u0631 \u0628\u0627 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u06a9\u0627\u0631 \u06a9\u0646\u06cc\u060c \u0642\u06cc\u0645\u062a\u200c\u06af\u0630\u0627\u0631\u06cc \u062f\u0642\u06cc\u0642\u200c\u062a\u0631\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u060c \u0646\u06a9\u0627\u062a \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u0628\u0631\u0627\u06cc \u0628\u0647\u0628\u0648\u062f \u0648\u06cc\u0644\u0627 \u06cc\u0627\u062f \u0628\u06af\u06cc\u0631\u06cc \u0648 \u062a\u062c\u0631\u0628\u0647\u200c\u06cc \u0628\u0647\u062a\u0631\u06cc \u0628\u0631\u0627\u06cc \u0645\u0647\u0645\u0627\u0646\u200c\u0647\u0627 \u062e\u0644\u0642 \u06a9\u0646\u06cc. "
                    : "\u062f\u0633\u062a\u06cc\u0627\u0631 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u0647 \u0631\u0627\u062d\u062a\u200c\u062a\u0631 \u0628\u0627 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u06a9\u0627\u0631 \u06a9\u0646\u06cc\u060c \u0642\u06cc\u0645\u062a\u200c\u06af\u0630\u0627\u0631\u06cc \u062f\u0642\u06cc\u0642\u200c\u062a\u0631\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u060c \u0646\u06a9\u0627\u062a \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u0628\u0631\u0627\u06cc \u0628\u0647\u0628\u0648\u062f \u0648\u06cc\u0644\u0627 \u06cc\u0627\u062f \u0628\u06af\u06cc\u0631\u06cc \u0648 \u062a\u062c\u0631\u0628\u0647\u200c\u06cc \u0628\u0647\u062a\u0631\u06cc \u0628\u0631\u0627\u06cc \u0645\u0647\u0645\u0627\u0646\u200c\u0647\u0627 \u062e\u0644\u0642 \u06a9\u0646\u06cc. "}
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__mtZ2O)}>
              <div className={classNames(projectcss.all, sty.freeBox__fuF1X)}>
                <Iframe
                  data-plasmic-name={"ai"}
                  data-plasmic-override={overrides.ai}
                  className={classNames("__wab_instance", sty.ai)}
                  onLoad={async event => {
                    const $steps = {};

                    $steps["runCode"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return (() => {
                                const sessionId =
                                  localStorage.getItem("n8n-chat/sessionId");
                                return console.log("sessionId", sessionId);
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
                  preview={true}
                  src={
                    "https://n8n-ger.darkube.app/webhook/e26291be-d10e-43cd-b6e8-f0f49ad6cf55/chat"
                  }
                  srcDoc={"<div><h3>Heading</h3><p>Example text...</p></div>"}
                  useHtml={false}
                />
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"introCalendarLeft2"}
            data-plasmic-override={overrides.introCalendarLeft2}
            className={classNames(projectcss.all, sty.introCalendarLeft2)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8PpNb
              )}
            >
              {"\u0645\u062b\u0644\u0627 \u0628\u067e\u0631\u0633:"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xt10Q
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "- \u0645\u0647\u0645\u0627\u0646 \u0646\u0638\u0631 \u06af\u0630\u0627\u0634\u062a\u0647 \u00ab\u0633\u0631\u0648\u06cc\u0633 \u0628\u0647\u062f\u0627\u0634\u062a\u06cc \u0634\u0633\u062a\u0647 \u0648 \u0636\u062f\u0639\u0641\u0648\u0646\u06cc \u0646\u0634\u062f\u0647 \u0628\u0648\u062f\r\u00bb \u062d\u0627\u0644\u0627 \u0645\u0646 \u0686\u0637\u0648\u0631 \u067e\u0627\u0633\u062e \u0628\u062f\u0645\u061f\n- \u062a\u0627\u0632\u0647 \u0634\u0631\u0648\u0639 \u06a9\u0631\u062f\u0645. \u0686\u0637\u0648\u0631 \u0645\u0633\u0627\u0641\u0631\u0647\u0627\u06cc \u0628\u06cc\u0634\u062a\u0631\u06cc \u0628\u06af\u06cc\u0631\u0645\u061f\n- \u0686\u0637\u0648\u0631 \u0627\u0645\u062a\u06cc\u0627\u0632 \u06f5 \u0633\u062a\u0627\u0631\u0647 \u0628\u06af\u06cc\u0631\u0645\u061f\n- \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u0686\u0647 \u062e\u062f\u0645\u0627\u062a\u06cc \u062f\u0627\u0631\u0647\u061f\n- \u06a9\u0627\u0631\u0645\u0632\u062f \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u0686\u0642\u062f\u0631\u0647\u061f"
                : "- \u0645\u0647\u0645\u0627\u0646 \u0646\u0638\u0631 \u06af\u0630\u0627\u0634\u062a\u0647 \u00ab\u0633\u0631\u0648\u06cc\u0633 \u0628\u0647\u062f\u0627\u0634\u062a\u06cc \u0634\u0633\u062a\u0647 \u0648 \u0636\u062f\u0639\u0641\u0648\u0646\u06cc \u0646\u0634\u062f\u0647 \u0628\u0648\u062f\r\u00bb \u062d\u0627\u0644\u0627 \u0645\u0646 \u0686\u0637\u0648\u0631 \u067e\u0627\u0633\u062e \u0628\u062f\u0645\u061f\n- \u062a\u0627\u0632\u0647 \u0634\u0631\u0648\u0639 \u06a9\u0631\u062f\u0645. \u0686\u0637\u0648\u0631 \u0645\u0633\u0627\u0641\u0631\u0647\u0627\u06cc \u0628\u06cc\u0634\u062a\u0631\u06cc \u0628\u06af\u06cc\u0631\u0645\u061f\n- \u0686\u0637\u0648\u0631 \u0627\u0645\u062a\u06cc\u0627\u0632 \u06f5 \u0633\u062a\u0627\u0631\u0647 \u0628\u06af\u06cc\u0631\u0645\u061f\n- \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u0686\u0647 \u062e\u062f\u0645\u0627\u062a\u06cc \u062f\u0627\u0631\u0647\u061f\n- \u06a9\u0627\u0631\u0645\u0632\u062f \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u0686\u0642\u062f\u0631\u0647\u061f"}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__oLz4E)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__b6WLs
                )}
              >
                {hasVariant(globalVariants, "screen", "tablet")
                  ? "\u0627\u0645\u06cc\u062f\u0648\u0627\u0631\u06cc\u0645 \u0628\u0627 \u06a9\u0645\u06a9 \u0627\u06cc\u0646 \u062f\u0633\u062a\u06cc\u0627\u0631\u060c \u0645\u06cc\u0632\u0628\u0627\u0646 \u0645\u0648\u0641\u0642\u200c\u062a\u0631\u06cc \u0628\u0634\u06cc \u0648 \u0628\u0627 \u0627\u0641\u0632\u0627\u06cc\u0634 \u062f\u0631\u0622\u0645\u062f\u060c \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631\u062a \u0631\u0648 \u062d\u0633\u0627\u0628\u06cc \u0631\u0634\u062f \u0628\u062f\u06cc. \u270c\ufe0f"
                  : "\u0627\u0645\u06cc\u062f\u0648\u0627\u0631\u06cc\u0645 \u0628\u0627 \u06a9\u0645\u06a9 \u0627\u06cc\u0646 \u062f\u0633\u062a\u06cc\u0627\u0631\u060c \u0645\u06cc\u0632\u0628\u0627\u0646 \u0645\u0648\u0641\u0642\u200c\u062a\u0631\u06cc \u0628\u0634\u06cc \u0648 \u0628\u0627 \u0627\u0641\u0632\u0627\u06cc\u0634 \u062f\u0631\u0622\u0645\u062f\u060c \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631\u062a \u0631\u0648 \u062d\u0633\u0627\u0628\u06cc \u0631\u0634\u062f \u0628\u062f\u06cc. \u270c\ufe0f"}
              </div>
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : false
              ) ? (
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__slB8)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"16%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/website_starter/images/group672Png.png",
                    fullWidth: 252,
                    fullHeight: 194,
                    aspectRatio: undefined
                  }}
                />
              ) : null}
            </div>
          </div>
          <div
            data-plasmic-name={"html"}
            data-plasmic-override={overrides.html}
            className={classNames(projectcss.all, sty.html)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___9Ex4O)}>
              <ClarityRntComponent
                data-plasmic-name={"clarityRntComponent"}
                data-plasmic-override={overrides.clarityRntComponent}
                className={classNames(
                  "__wab_instance",
                  sty.clarityRntComponent
                )}
              />

              <FaviconRntComponent
                data-plasmic-name={"faviconRntComponent"}
                data-plasmic-override={overrides.faviconRntComponent}
                className={classNames(
                  "__wab_instance",
                  sty.faviconRntComponent
                )}
              />
            </div>
          </div>
          <RentamonFooter
            data-plasmic-name={"rentamonFooter"}
            data-plasmic-override={overrides.rentamonFooter}
            className={classNames("__wab_instance", sty.rentamonFooter)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbarRntHeader",
    "mainContents",
    "intro1st",
    "introTitle",
    "\u062f\u0631\u0628\u0627\u0631\u0647\u0645\u0627",
    "introCalendarLeft",
    "ai",
    "introCalendarLeft2",
    "html",
    "clarityRntComponent",
    "faviconRntComponent",
    "rentamonFooter"
  ],
  navbarRntHeader: ["navbarRntHeader"],
  mainContents: [
    "mainContents",
    "intro1st",
    "introTitle",
    "\u062f\u0631\u0628\u0627\u0631\u0647\u0645\u0627",
    "introCalendarLeft",
    "ai"
  ],
  intro1st: [
    "intro1st",
    "introTitle",
    "\u062f\u0631\u0628\u0627\u0631\u0647\u0645\u0627",
    "introCalendarLeft"
  ],
  introTitle: [
    "introTitle",
    "\u062f\u0631\u0628\u0627\u0631\u0647\u0645\u0627"
  ],
  دربارهما: ["\u062f\u0631\u0628\u0627\u0631\u0647\u0645\u0627"],
  introCalendarLeft: ["introCalendarLeft"],
  ai: ["ai"],
  introCalendarLeft2: ["introCalendarLeft2"],
  html: ["html", "clarityRntComponent", "faviconRntComponent"],
  clarityRntComponent: ["clarityRntComponent"],
  faviconRntComponent: ["faviconRntComponent"],
  rentamonFooter: ["rentamonFooter"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbarRntHeader: typeof NavbarRntHeader;
  mainContents: "div";
  intro1st: "div";
  introTitle: "div";
  دربارهما: "div";
  introCalendarLeft: "div";
  ai: typeof Iframe;
  introCalendarLeft2: "div";
  html: "div";
  clarityRntComponent: typeof ClarityRntComponent;
  faviconRntComponent: typeof FaviconRntComponent;
  rentamonFooter: typeof RentamonFooter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmicدستیارهوشمصنوعیرنتامون__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmicدستیارهوشمصنوعیرنتامون__VariantsArgs;
    args?: Plasmicدستیارهوشمصنوعیرنتامون__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmicدستیارهوشمصنوعیرنتامون__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<Plasmicدستیارهوشمصنوعیرنتامون__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: Plasmicدستیارهوشمصنوعیرنتامون__ArgProps,
          internalVariantPropNames: Plasmicدستیارهوشمصنوعیرنتامون__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmicدستیارهوشمصنوعیرنتامون__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName =
      "Plasmic\u062f\u0633\u062a\u06cc\u0627\u0631\u0647\u0648\u0634\u0645\u0635\u0646\u0648\u0639\u06cc\u0631\u0646\u062a\u0627\u0645\u0648\u0646";
  } else {
    func.displayName = `Plasmicدستیارهوشمصنوعیرنتامون.${nodeName}`;
  }
  return func;
}

export const Plasmicدستیارهوشمصنوعیرنتامون = Object.assign(
  // Top-level Plasmicدستیارهوشمصنوعیرنتامون renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarRntHeader: makeNodeComponent("navbarRntHeader"),
    mainContents: makeNodeComponent("mainContents"),
    intro1st: makeNodeComponent("intro1st"),
    introTitle: makeNodeComponent("introTitle"),
    دربارهما: makeNodeComponent(
      "\u062f\u0631\u0628\u0627\u0631\u0647\u0645\u0627"
    ),
    introCalendarLeft: makeNodeComponent("introCalendarLeft"),
    ai: makeNodeComponent("ai"),
    introCalendarLeft2: makeNodeComponent("introCalendarLeft2"),
    html: makeNodeComponent("html"),
    clarityRntComponent: makeNodeComponent("clarityRntComponent"),
    faviconRntComponent: makeNodeComponent("faviconRntComponent"),
    rentamonFooter: makeNodeComponent("rentamonFooter"),

    // Metadata about props expected for Plasmicدستیارهوشمصنوعیرنتامون
    internalVariantProps: Plasmicدستیارهوشمصنوعیرنتامون__VariantProps,
    internalArgProps: Plasmicدستیارهوشمصنوعیرنتامون__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "دستیار هوش مصنوعی رنتامون",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmicدستیارهوشمصنوعیرنتامون;
/* prettier-ignore-end */
