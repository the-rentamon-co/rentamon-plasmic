// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: sqOPHlPEQq33

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
import { AntdInputNumber } from "@plasmicpkgs/antd5/skinny/registerInput";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicChangePrice.module.css"; // plasmic-import: sqOPHlPEQq33/css

createPlasmicElementProxy;

export type PlasmicChangePrice__VariantMembers = {};
export type PlasmicChangePrice__VariantsArgs = {};
type VariantPropType = keyof PlasmicChangePrice__VariantsArgs;
export const PlasmicChangePrice__VariantProps = new Array<VariantPropType>();

export type PlasmicChangePrice__ArgsType = {};
type ArgPropType = keyof PlasmicChangePrice__ArgsType;
export const PlasmicChangePrice__ArgProps = new Array<ArgPropType>();

export type PlasmicChangePrice__OverridesType = {
  root?: Flex__<"div">;
  modalChangePrice?: Flex__<typeof AntdModal>;
  columns?: Flex__<"div">;
  column?: Flex__<"div">;
  numberInput2?: Flex__<typeof AntdInputNumber>;
};

export interface DefaultChangePriceProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicChangePrice__RenderFunc(props: {
  variants: PlasmicChangePrice__VariantsArgs;
  args: PlasmicChangePrice__ArgsType;
  overrides: PlasmicChangePrice__OverridesType;
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
        path: "modalChangePrice.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
      },
      {
        path: "numberInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "count",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return 0;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 0;
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
      <AntdModal
        data-plasmic-name={"modalChangePrice"}
        data-plasmic-override={overrides.modalChangePrice}
        cancelText={"\u0628\u06cc\u200c\u062e\u06cc\u0627\u0644\u0634"}
        className={classNames("__wab_instance", sty.modalChangePrice)}
        closeButtonClassName={classNames({ [sty["pcls_T7s1DEPGsHqK"]]: true })}
        defaultStylesClassName={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_plasmic_rich_components_css.plasmic_tokens
        )}
        modalScopeClassName={sty["modalChangePrice__modal"]}
        okText={"\u062a\u0627\u06cc\u06cc\u062f"}
        onOpenChange={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["modalChangePrice", "open"]).apply(
            null,
            eventArgs
          );
        }}
        open={generateStateValueProp($state, ["modalChangePrice", "open"])}
        title={
          "\u0646\u0631\u062e \ud83d\udcb5 \u0631\u0648 \u0628\u0647 \u062a\u0648\u0645\u0646 \u0648\u0627\u0631\u062f \u06a9\u0646"
        }
        trigger={null}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div
            data-plasmic-name={"column"}
            data-plasmic-override={overrides.column}
            className={classNames(projectcss.all, sty.column)}
          >
            <AntdInputNumber
              data-plasmic-name={"numberInput2"}
              data-plasmic-override={overrides.numberInput2}
              className={classNames("__wab_instance", sty.numberInput2)}
              controls={false}
              max={50}
              min={200000}
              onChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "numberInput2",
                  "value"
                ]).apply(null, eventArgs);
              }}
              placeholder={
                "\u0645\u062b\u0644\u0627 \u06f2\u06f0\u06f0/\u06f0\u06f0\u06f0"
              }
              readOnly={true}
              type={"number"}
              value={generateStateValueProp($state, ["numberInput2", "value"])}
            />
          </div>
        </div>
      </AntdModal>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "modalChangePrice", "columns", "column", "numberInput2"],
  modalChangePrice: ["modalChangePrice", "columns", "column", "numberInput2"],
  columns: ["columns", "column", "numberInput2"],
  column: ["column", "numberInput2"],
  numberInput2: ["numberInput2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  modalChangePrice: typeof AntdModal;
  columns: "div";
  column: "div";
  numberInput2: typeof AntdInputNumber;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChangePrice__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChangePrice__VariantsArgs;
    args?: PlasmicChangePrice__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChangePrice__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChangePrice__ArgsType,
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
          internalArgPropNames: PlasmicChangePrice__ArgProps,
          internalVariantPropNames: PlasmicChangePrice__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChangePrice__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChangePrice";
  } else {
    func.displayName = `PlasmicChangePrice.${nodeName}`;
  }
  return func;
}

export const PlasmicChangePrice = Object.assign(
  // Top-level PlasmicChangePrice renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    modalChangePrice: makeNodeComponent("modalChangePrice"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    numberInput2: makeNodeComponent("numberInput2"),

    // Metadata about props expected for PlasmicChangePrice
    internalVariantProps: PlasmicChangePrice__VariantProps,
    internalArgProps: PlasmicChangePrice__ArgProps
  }
);

export default PlasmicChangePrice;
/* prettier-ignore-end */
