// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: gWac1FMbIJat

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

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicNavbarRentamonComponent.module.css"; // plasmic-import: gWac1FMbIJat/css

createPlasmicElementProxy;

export type PlasmicNavbarRentamonComponent__VariantMembers = {};
export type PlasmicNavbarRentamonComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbarRentamonComponent__VariantsArgs;
export const PlasmicNavbarRentamonComponent__VariantProps =
  new Array<VariantPropType>();

export type PlasmicNavbarRentamonComponent__ArgsType = {};
type ArgPropType = keyof PlasmicNavbarRentamonComponent__ArgsType;
export const PlasmicNavbarRentamonComponent__ArgProps =
  new Array<ArgPropType>();

export type PlasmicNavbarRentamonComponent__OverridesType = {
  navBarFaghih?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  freeBox?: Flex__<"div">;
};

export interface DefaultNavbarRentamonComponentProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavbarRentamonComponent__RenderFunc(props: {
  variants: PlasmicNavbarRentamonComponent__VariantsArgs;
  args: PlasmicNavbarRentamonComponent__ArgsType;
  overrides: PlasmicNavbarRentamonComponent__OverridesType;
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
      data-plasmic-name={"navBarFaghih"}
      data-plasmic-override={overrides.navBarFaghih}
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
        sty.navBarFaghih
      )}
    >
      <NavigationBar
        data-plasmic-name={"navigationBar"}
        data-plasmic-override={overrides.navigationBar}
        brand={
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__uJuXj
            )}
            component={Link}
            href={"#"}
            platform={"nextjs"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__iP1Vn)}
              displayHeight={"36px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              onClick={async event => {
                const $steps = {};

                $steps["goToHomepage"] = true
                  ? (() => {
                      const actionArgs = { destination: `/` };
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
                  $steps["goToHomepage"] != null &&
                  typeof $steps["goToHomepage"] === "object" &&
                  typeof $steps["goToHomepage"].then === "function"
                ) {
                  $steps["goToHomepage"] = await $steps["goToHomepage"];
                }
              }}
              src={{
                src: "/plasmic/website_starter/images/rentamonFaLowPng.png",
                fullWidth: 200,
                fullHeight: 99,
                aspectRatio: undefined
              }}
            />
          </PlasmicLink__>
        }
        className={classNames("__wab_instance", sty.navigationBar)}
        closeButton={
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__p1R3F)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={"https://static1.plasmic.app/close.svg"}
          />
        }
        itemsGap={8}
        menuItems={
          <React.Fragment>
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__qiqR
                )}
                component={Link}
                href={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? `/panel`
                    : "/"
                }
                platform={"nextjs"}
              >
                {"\u0648\u0631\u0648\u062f"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__w3OVd
                )}
                component={Link}
                href={
                  "https://sso.rentamon.com/web/index.html?callback=https://rentamon.com/panel"
                }
                platform={"nextjs"}
              >
                {"\u062b\u0628\u062a\u200c\u0646\u0627\u0645"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__cwZwa
                )}
                component={Link}
                href={`/download`}
                platform={"nextjs"}
              >
                {
                  "\u062f\u0627\u0646\u0644\u0648\u062f \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"
                }
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__kh6Yr
                )}
                component={Link}
                href={`/pricing`}
                platform={"nextjs"}
              >
                {"\u062a\u0639\u0631\u0641\u0647"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__vseFw
                )}
                component={Link}
                href={`/about-us`}
                platform={"nextjs"}
              >
                {"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"}
              </PlasmicLink__>
            </div>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ryWoj
              )}
              component={Link}
              href={`/panel`}
              platform={"nextjs"}
            >
              {"\u0648\u0631\u0648\u062f"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__kjkxV
              )}
              component={Link}
              href={
                "https://sso.rentamon.com/web/index.html?callback=https://rentamon.com/panel"
              }
              platform={"nextjs"}
            >
              {"\u062b\u0628\u062a\u200c\u0646\u0627\u0645"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ytkiw
              )}
              component={Link}
              href={`/download`}
              platform={"nextjs"}
            >
              {
                "\u062f\u0627\u0646\u0644\u0648\u062f \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"
              }
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__jRxEo
              )}
              component={Link}
              href={`/pricing`}
              platform={"nextjs"}
            >
              {"\u062a\u0639\u0631\u0641\u0647"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___01Gak
              )}
              component={Link}
              href={`/about-us`}
              platform={"nextjs"}
            >
              {"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"}
            </PlasmicLink__>
          </React.Fragment>
        }
        openButton={
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__xdJvU)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={
              hasVariant(globalVariants, "screen", "mobile") ? "26px" : "none"
            }
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={
              hasVariant(globalVariants, "screen", "mobile") ? "100%" : "auto"
            }
            src={"https://static1.plasmic.app/menu.svg"}
          />
        }
        responsiveBreakpoint={768}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  navBarFaghih: ["navBarFaghih", "navigationBar", "freeBox"],
  navigationBar: ["navigationBar", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  navBarFaghih: "div";
  navigationBar: typeof NavigationBar;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbarRentamonComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbarRentamonComponent__VariantsArgs;
    args?: PlasmicNavbarRentamonComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbarRentamonComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbarRentamonComponent__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicNavbarRentamonComponent__ArgProps,
          internalVariantPropNames: PlasmicNavbarRentamonComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbarRentamonComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "navBarFaghih") {
    func.displayName = "PlasmicNavbarRentamonComponent";
  } else {
    func.displayName = `PlasmicNavbarRentamonComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarRentamonComponent = Object.assign(
  // Top-level PlasmicNavbarRentamonComponent renders the root element
  makeNodeComponent("navBarFaghih"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicNavbarRentamonComponent
    internalVariantProps: PlasmicNavbarRentamonComponent__VariantProps,
    internalArgProps: PlasmicNavbarRentamonComponent__ArgProps
  }
);

export default PlasmicNavbarRentamonComponent;
/* prettier-ignore-end */
