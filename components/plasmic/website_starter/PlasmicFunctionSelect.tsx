/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: EsNH5a2ZQUjZ

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

import FunctionSelect2 from "../../FunctionSelect2"; // plasmic-import: N1Svf52_yxbM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicFunctionSelect.module.css"; // plasmic-import: EsNH5a2ZQUjZ/css

createPlasmicElementProxy;

export type PlasmicFunctionSelect__VariantMembers = {
  show: "show";
  hide: "hide";
};
export type PlasmicFunctionSelect__VariantsArgs = {
  show?: SingleBooleanChoiceArg<"show">;
  hide?: SingleBooleanChoiceArg<"hide">;
};
type VariantPropType = keyof PlasmicFunctionSelect__VariantsArgs;
export const PlasmicFunctionSelect__VariantProps = new Array<VariantPropType>(
  "show",
  "hide"
);

export type PlasmicFunctionSelect__ArgsType = {};
type ArgPropType = keyof PlasmicFunctionSelect__ArgsType;
export const PlasmicFunctionSelect__ArgProps = new Array<ArgPropType>();

export type PlasmicFunctionSelect__OverridesType = {
  root?: Flex__<"div">;
  functionSelect2?: Flex__<typeof FunctionSelect2>;
};

export interface DefaultFunctionSelectProps {
  show?: SingleBooleanChoiceArg<"show">;
  hide?: SingleBooleanChoiceArg<"hide">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFunctionSelect__RenderFunc(props: {
  variants: PlasmicFunctionSelect__VariantsArgs;
  args: PlasmicFunctionSelect__ArgsType;
  overrides: PlasmicFunctionSelect__OverridesType;
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
        path: "show",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.show
      },
      {
        path: "hide",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hide
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
        sty.root,
        {
          [sty.roothide]: hasVariant($state, "hide", "hide"),
          [sty.rootshow]: hasVariant($state, "show", "show")
        }
      )}
      dir={"rtl"}
    >
      <FunctionSelect2
        data-plasmic-name={"functionSelect2"}
        data-plasmic-override={overrides.functionSelect2}
        className={classNames("__wab_instance", sty.functionSelect2, {
          [sty.functionSelect2hide]: hasVariant($state, "hide", "hide"),
          [sty.functionSelect2show]: hasVariant($state, "show", "show")
        })}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "functionSelect2"],
  functionSelect2: ["functionSelect2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  functionSelect2: typeof FunctionSelect2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFunctionSelect__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFunctionSelect__VariantsArgs;
    args?: PlasmicFunctionSelect__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFunctionSelect__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFunctionSelect__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFunctionSelect__ArgProps,
          internalVariantPropNames: PlasmicFunctionSelect__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFunctionSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFunctionSelect";
  } else {
    func.displayName = `PlasmicFunctionSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicFunctionSelect = Object.assign(
  // Top-level PlasmicFunctionSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    functionSelect2: makeNodeComponent("functionSelect2"),

    // Metadata about props expected for PlasmicFunctionSelect
    internalVariantProps: PlasmicFunctionSelect__VariantProps,
    internalArgProps: PlasmicFunctionSelect__ArgProps
  }
);

export default PlasmicFunctionSelect;
/* prettier-ignore-end */
