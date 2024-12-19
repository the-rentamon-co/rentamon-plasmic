// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: PT85RDIdexix

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

import { DatePicker } from "@/fragment/components/date-picker"; // plasmic-import: MR9MOBuvKPN3/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicCalendar3.module.css"; // plasmic-import: PT85RDIdexix/css

createPlasmicElementProxy;

export type PlasmicCalendar3__VariantMembers = {};
export type PlasmicCalendar3__VariantsArgs = {};
type VariantPropType = keyof PlasmicCalendar3__VariantsArgs;
export const PlasmicCalendar3__VariantProps = new Array<VariantPropType>();

export type PlasmicCalendar3__ArgsType = {};
type ArgPropType = keyof PlasmicCalendar3__ArgsType;
export const PlasmicCalendar3__ArgProps = new Array<ArgPropType>();

export type PlasmicCalendar3__OverridesType = {
  root?: Flex__<"div">;
  datePicker?: Flex__<typeof DatePicker>;
  text?: Flex__<"div">;
};

export interface DefaultCalendar3Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCalendar3__RenderFunc(props: {
  variants: PlasmicCalendar3__VariantsArgs;
  args: PlasmicCalendar3__ArgsType;
  overrides: PlasmicCalendar3__OverridesType;
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
        path: "datePicker.value",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "datePicker.values",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      },
      {
        path: "datePicker.month",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "datePicker.year",
        type: "private",
        variableType: "object",
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
      <DatePicker
        data-plasmic-name={"datePicker"}
        data-plasmic-override={overrides.datePicker}
        className={classNames("__wab_instance", sty.datePicker)}
        dayCell={(dateProps: any) => (
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
            onClick={async event => {
              const $steps = {};

              $steps["updateDatePickerValue"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["datePicker", "value"]
                      },
                      operation: 0,
                      value: console.log("ok")
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
                $steps["updateDatePickerValue"] != null &&
                typeof $steps["updateDatePickerValue"] === "object" &&
                typeof $steps["updateDatePickerValue"].then === "function"
              ) {
                $steps["updateDatePickerValue"] = await $steps[
                  "updateDatePickerValue"
                ];
              }
            }}
          >
            {"Enter some text"}
          </div>
        )}
        holidays={[]}
        locale={"fa"}
        mode={"multiple"}
        onChange={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["datePicker", "value"]).apply(
            null,
            eventArgs
          );
          generateStateOnChangeProp($state, ["datePicker", "values"]).apply(
            null,
            eventArgs
          );

          (async date => {
            const $steps = {};

            $steps["updateDatePickerValue"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["datePicker", "value"]
                    },
                    operation: 0,
                    value: console.log("salam")
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
              $steps["updateDatePickerValue"] != null &&
              typeof $steps["updateDatePickerValue"] === "object" &&
              typeof $steps["updateDatePickerValue"].then === "function"
            ) {
              $steps["updateDatePickerValue"] = await $steps[
                "updateDatePickerValue"
              ];
            }
          }).apply(null, eventArgs);
        }}
        onMonthChange={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["datePicker", "month"]).apply(
            null,
            eventArgs
          );
        }}
        onYearChange={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["datePicker", "year"]).apply(
            null,
            eventArgs
          );
        }}
        value={generateStateValueProp($state, ["datePicker", "value"])}
        values={generateStateValueProp($state, ["datePicker", "values"])}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "datePicker", "text"],
  datePicker: ["datePicker", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  datePicker: typeof DatePicker;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCalendar3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCalendar3__VariantsArgs;
    args?: PlasmicCalendar3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCalendar3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCalendar3__ArgsType,
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
          internalArgPropNames: PlasmicCalendar3__ArgProps,
          internalVariantPropNames: PlasmicCalendar3__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCalendar3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCalendar3";
  } else {
    func.displayName = `PlasmicCalendar3.${nodeName}`;
  }
  return func;
}

export const PlasmicCalendar3 = Object.assign(
  // Top-level PlasmicCalendar3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    datePicker: makeNodeComponent("datePicker"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicCalendar3
    internalVariantProps: PlasmicCalendar3__VariantProps,
    internalArgProps: PlasmicCalendar3__ArgProps
  }
);

export default PlasmicCalendar3;
/* prettier-ignore-end */
