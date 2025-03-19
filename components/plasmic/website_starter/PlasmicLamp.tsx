// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: V7sstJTUGr4K

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
import sty from "./PlasmicLamp.module.css"; // plasmic-import: V7sstJTUGr4K/css

import LampLightOfficeSvgrepoComSvgIcon from "./icons/PlasmicIcon__LampLightOfficeSvgrepoComSvg"; // plasmic-import: mJzoZEg-FD56/icon
import LampDeskLightSvgrepoComSvgIcon from "./icons/PlasmicIcon__LampDeskLightSvgrepoComSvg"; // plasmic-import: 8ig9rS6CW5se/icon

createPlasmicElementProxy;

export type PlasmicLamp__VariantMembers = {};
export type PlasmicLamp__VariantsArgs = {};
type VariantPropType = keyof PlasmicLamp__VariantsArgs;
export const PlasmicLamp__VariantProps = new Array<VariantPropType>();

export type PlasmicLamp__ArgsType = {};
type ArgPropType = keyof PlasmicLamp__ArgsType;
export const PlasmicLamp__ArgProps = new Array<ArgPropType>();

export type PlasmicLamp__OverridesType = {
  root?: Flex__<"div">;
  on?: Flex__<"svg">;
  off?: Flex__<"svg">;
};

export interface DefaultLampProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLamp__RenderFunc(props: {
  variants: PlasmicLamp__VariantsArgs;
  args: PlasmicLamp__ArgsType;
  overrides: PlasmicLamp__OverridesType;
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
      {(() => {
        try {
          return true;
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
        <LampLightOfficeSvgrepoComSvgIcon
          data-plasmic-name={"on"}
          data-plasmic-override={overrides.on}
          className={classNames(projectcss.all, sty.on)}
          role={"img"}
        />
      ) : null}
      <LampDeskLightSvgrepoComSvgIcon
        data-plasmic-name={"off"}
        data-plasmic-override={overrides.off}
        className={classNames(projectcss.all, sty.off)}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "on", "off"],
  on: ["on"],
  off: ["off"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  on: "svg";
  off: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLamp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLamp__VariantsArgs;
    args?: PlasmicLamp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLamp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLamp__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicLamp__ArgProps,
          internalVariantPropNames: PlasmicLamp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLamp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLamp";
  } else {
    func.displayName = `PlasmicLamp.${nodeName}`;
  }
  return func;
}

export const PlasmicLamp = Object.assign(
  // Top-level PlasmicLamp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    on: makeNodeComponent("on"),
    off: makeNodeComponent("off"),

    // Metadata about props expected for PlasmicLamp
    internalVariantProps: PlasmicLamp__VariantProps,
    internalArgProps: PlasmicLamp__ArgProps
  }
);

export default PlasmicLamp;
/* prettier-ignore-end */
