/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: 4kdcaD2KbS-w

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

import Checkbox from "../../Checkbox"; // plasmic-import: kNwK3iA1B39P/component

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicPolicies.module.css"; // plasmic-import: 4kdcaD2KbS-w/css

createPlasmicElementProxy;

export type PlasmicPolicies__VariantMembers = {};
export type PlasmicPolicies__VariantsArgs = {};
type VariantPropType = keyof PlasmicPolicies__VariantsArgs;
export const PlasmicPolicies__VariantProps = new Array<VariantPropType>();

export type PlasmicPolicies__ArgsType = {};
type ArgPropType = keyof PlasmicPolicies__ArgsType;
export const PlasmicPolicies__ArgProps = new Array<ArgPropType>();

export type PlasmicPolicies__OverridesType = {
  policiesCheckbox?: Flex__<typeof Checkbox>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  text?: Flex__<"div">;
};

export interface DefaultPoliciesProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPolicies__RenderFunc(props: {
  variants: PlasmicPolicies__VariantsArgs;
  args: PlasmicPolicies__ArgsType;
  overrides: PlasmicPolicies__OverridesType;
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
        path: "policiesCheckbox.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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
    <Checkbox
      data-plasmic-name={"policiesCheckbox"}
      data-plasmic-override={overrides.policiesCheckbox}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.policiesCheckbox)}
      isChecked={
        generateStateValueProp($state, ["policiesCheckbox", "isChecked"]) ??
        false
      }
      onChange={async (...eventArgs: any) => {
        ((...eventArgs) => {
          generateStateOnChangeProp($state, ["policiesCheckbox", "isChecked"])(
            eventArgs[0]
          );
        }).apply(null, eventArgs);

        if (
          eventArgs.length > 1 &&
          eventArgs[1] &&
          eventArgs[1]._plasmic_state_init_
        ) {
          return;
        }
      }}
    >
      <PlasmicLink__
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(
          projectcss.all,
          projectcss.a,
          projectcss.__wab_text,
          sty.link
        )}
        component={Link}
        href={
          "https://rentamon.com/%d9%82%d9%88%d8%a7%d9%86%db%8c%d9%86-%d8%b1%d9%86%d8%aa%d8%a7%d9%85%d9%88%d9%86/"
        }
        platform={"nextjs"}
        target={"_blank"}
      >
        {
          "\u0642\u0648\u0627\u0646\u06cc\u0646 \u0648 \u0645\u0642\u0631\u0631\u0627\u062a"
        }
      </PlasmicLink__>
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        <React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ color: "#1F3546" }}
          >
            {
              " \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u0631\u0648 \u0645\u06cc\u200c\u067e\u0630\u06cc\u0631\u0645."
            }
          </span>
        </React.Fragment>
      </div>
    </Checkbox>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  policiesCheckbox: ["policiesCheckbox", "link", "text"],
  link: ["link"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  policiesCheckbox: typeof Checkbox;
  link: "a";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPolicies__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPolicies__VariantsArgs;
    args?: PlasmicPolicies__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPolicies__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPolicies__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPolicies__ArgProps,
          internalVariantPropNames: PlasmicPolicies__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPolicies__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "policiesCheckbox") {
    func.displayName = "PlasmicPolicies";
  } else {
    func.displayName = `PlasmicPolicies.${nodeName}`;
  }
  return func;
}

export const PlasmicPolicies = Object.assign(
  // Top-level PlasmicPolicies renders the root element
  makeNodeComponent("policiesCheckbox"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicPolicies
    internalVariantProps: PlasmicPolicies__VariantProps,
    internalArgProps: PlasmicPolicies__ArgProps
  }
);

export default PlasmicPolicies;
/* prettier-ignore-end */
