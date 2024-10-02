// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: I6VyETm3Oi6o

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
import Button from "../../Button"; // plasmic-import: U5bKCJ5DYhib/component
import { AntdInputNumber } from "@plasmicpkgs/antd5/skinny/registerInput";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicDiscount.module.css"; // plasmic-import: I6VyETm3Oi6o/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: aHRi_lZjzHt3/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: nPWd30PDwgwm/icon

createPlasmicElementProxy;

export type PlasmicDiscount__VariantMembers = {};
export type PlasmicDiscount__VariantsArgs = {};
type VariantPropType = keyof PlasmicDiscount__VariantsArgs;
export const PlasmicDiscount__VariantProps = new Array<VariantPropType>();

export type PlasmicDiscount__ArgsType = {};
type ArgPropType = keyof PlasmicDiscount__ArgsType;
export const PlasmicDiscount__ArgProps = new Array<ArgPropType>();

export type PlasmicDiscount__OverridesType = {
  root?: Flex__<"div">;
  modalDiscount?: Flex__<typeof AntdModal>;
  columns?: Flex__<"div">;
  numberInput3?: Flex__<typeof AntdInputNumber>;
};

export interface DefaultDiscountProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDiscount__RenderFunc(props: {
  variants: PlasmicDiscount__VariantsArgs;
  args: PlasmicDiscount__ArgsType;
  overrides: PlasmicDiscount__OverridesType;
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
        path: "modalDiscount.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
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
      },
      {
        path: "numberInput3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.count;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
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
        data-plasmic-name={"modalDiscount"}
        data-plasmic-override={overrides.modalDiscount}
        cancelText={"\u0628\u06cc\u200c\u062e\u06cc\u0627\u0644\u0634"}
        className={classNames("__wab_instance", sty.modalDiscount)}
        closeButtonClassName={classNames({ [sty["pcls_WlzVlznZzWIt"]]: true })}
        defaultStylesClassName={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_plasmic_rich_components_css.plasmic_tokens
        )}
        modalContentClassName={classNames({ [sty["pcls_D8H_Dylqgqwp"]]: true })}
        modalScopeClassName={sty["modalDiscount__modal"]}
        okText={"\u062a\u0627\u06cc\u06cc\u062f"}
        onOpenChange={generateStateOnChangeProp($state, [
          "modalDiscount",
          "open"
        ])}
        open={generateStateValueProp($state, ["modalDiscount", "open"])}
        title={
          "\u062f\u0631\u0635\u062f \u062a\u062e\u0641\u06cc\u0641\ud83d\udd25\u0631\u0648 \u0645\u0634\u062e\u0635 \u06a9\u0646\n"
        }
        trigger={null}
        wrapClassName={classNames({ [sty["pcls_MhveCdfIqfFR"]]: true })}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__bQ2MZ)}>
            <Button
              className={classNames("__wab_instance", sty.button__ls8Kb)}
              onClick={async event => {
                const $steps = {};

                $steps["updateCount"] = true
                  ? (() => {
                      const actionArgs = {
                        operation: 0,
                        variable: {
                          objRoot: $state,
                          variablePath: ["count"]
                        },
                        value: ($state.count = Math.max(0, $state.count - 5))
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
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
                  $steps["updateCount"] != null &&
                  typeof $steps["updateCount"] === "object" &&
                  typeof $steps["updateCount"].then === "function"
                ) {
                  $steps["updateCount"] = await $steps["updateCount"];
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aF7Ss
                )}
              >
                {"-"}
              </div>
            </Button>
          </div>
          <div className={classNames(projectcss.all, sty.column__tJexi)}>
            <AntdInputNumber
              data-plasmic-name={"numberInput3"}
              data-plasmic-override={overrides.numberInput3}
              className={classNames("__wab_instance", sty.numberInput3)}
              controls={false}
              max={50}
              min={200000}
              onChange={generateStateOnChangeProp($state, [
                "numberInput3",
                "value"
              ])}
              placeholder={"\u0645\u062b\u0644\u0627 \u06f2\u06f5"}
              readOnly={true}
              type={"number"}
              value={generateStateValueProp($state, ["numberInput3", "value"])}
            />
          </div>
          <div className={classNames(projectcss.all, sty.column__iqSkX)}>
            <Button
              className={classNames("__wab_instance", sty.button__oQt5Q)}
              onClick={async event => {
                const $steps = {};

                $steps["updateCount"] = true
                  ? (() => {
                      const actionArgs = {
                        operation: 0,
                        variable: {
                          objRoot: $state,
                          variablePath: ["count"]
                        },
                        value: ($state.count = Math.min($state.count + 5, 60))
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
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
                  $steps["updateCount"] != null &&
                  typeof $steps["updateCount"] === "object" &&
                  typeof $steps["updateCount"].then === "function"
                ) {
                  $steps["updateCount"] = await $steps["updateCount"];
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4EEz
                )}
              >
                {"+"}
              </div>
            </Button>
          </div>
        </div>
      </AntdModal>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "modalDiscount", "columns", "numberInput3"],
  modalDiscount: ["modalDiscount", "columns", "numberInput3"],
  columns: ["columns", "numberInput3"],
  numberInput3: ["numberInput3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  modalDiscount: typeof AntdModal;
  columns: "div";
  numberInput3: typeof AntdInputNumber;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDiscount__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDiscount__VariantsArgs;
    args?: PlasmicDiscount__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDiscount__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDiscount__ArgsType,
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
          internalArgPropNames: PlasmicDiscount__ArgProps,
          internalVariantPropNames: PlasmicDiscount__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDiscount__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDiscount";
  } else {
    func.displayName = `PlasmicDiscount.${nodeName}`;
  }
  return func;
}

export const PlasmicDiscount = Object.assign(
  // Top-level PlasmicDiscount renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    modalDiscount: makeNodeComponent("modalDiscount"),
    columns: makeNodeComponent("columns"),
    numberInput3: makeNodeComponent("numberInput3"),

    // Metadata about props expected for PlasmicDiscount
    internalVariantProps: PlasmicDiscount__VariantProps,
    internalArgProps: PlasmicDiscount__ArgProps
  }
);

export default PlasmicDiscount;
/* prettier-ignore-end */