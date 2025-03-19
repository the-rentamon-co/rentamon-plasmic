// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: EEc42h-qyFt-

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

import { BaseDialogTrigger } from "@plasmicpkgs/react-aria/skinny/registerDialogTrigger";
import Button3 from "../../Button3"; // plasmic-import: 5VoVqiGmU3In/component
import { BasePopover } from "@plasmicpkgs/react-aria/skinny/registerPopover";
import OverlayArrow from "../../OverlayArrow"; // plasmic-import: HuPO2VxnKkx5/component
import { BaseDialog } from "@plasmicpkgs/react-aria/skinny/registerDialog";

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicPopover.module.css"; // plasmic-import: EEc42h-qyFt-/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: ElHWritzoqrj/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: BTVUACcl_W-Y/icon

createPlasmicElementProxy;

export type PlasmicPopover__VariantMembers = {};
export type PlasmicPopover__VariantsArgs = {};
type VariantPropType = keyof PlasmicPopover__VariantsArgs;
export const PlasmicPopover__VariantProps = new Array<VariantPropType>();

export type PlasmicPopover__ArgsType = {
  shouldFlip?: boolean;
  offset?: number;
  onOpenChange?: (val: boolean) => void;
  showArrow?: boolean;
  placement?: "top" | "bottom" | "start" | "end" | "left" | "right";
  trigger?: React.ReactNode;
  content?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPopover__ArgsType;
export const PlasmicPopover__ArgProps = new Array<ArgPropType>(
  "shouldFlip",
  "offset",
  "onOpenChange",
  "showArrow",
  "placement",
  "trigger",
  "content"
);

export type PlasmicPopover__OverridesType = {
  ariaDialogTrigger?: Flex__<typeof BaseDialogTrigger>;
  ariaPopover?: Flex__<typeof BasePopover>;
  overlayArrow?: Flex__<typeof OverlayArrow>;
  ariaDialog?: Flex__<typeof BaseDialog>;
};

export interface DefaultPopoverProps {
  shouldFlip?: boolean;
  offset?: number;
  onOpenChange?: (val: boolean) => void;
  showArrow?: boolean;
  placement?: "top" | "bottom" | "start" | "end" | "left" | "right";
  trigger?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPopover__RenderFunc(props: {
  variants: PlasmicPopover__VariantsArgs;
  args: PlasmicPopover__ArgsType;
  overrides: PlasmicPopover__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          shouldFlip: true,
          offset: 12,
          placement: "bottom"
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
        path: "ariaDialogTrigger.isOpen",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onChangeProp: "onOpenChange"
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
    <BaseDialogTrigger
      data-plasmic-name={"ariaDialogTrigger"}
      data-plasmic-override={overrides.ariaDialogTrigger}
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
        sty.ariaDialogTrigger
      )}
      dialog={
        <BasePopover
          data-plasmic-name={"ariaPopover"}
          data-plasmic-override={overrides.ariaPopover}
          className={classNames("__wab_instance", sty.ariaPopover)}
          matchTriggerWidth={true}
          offset={args.offset}
          placement={args.placement}
          resetClassName={classNames(
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens
          )}
          shouldFlip={args.shouldFlip}
        >
          {$props.showArrow ? (
            <OverlayArrow
              data-plasmic-name={"overlayArrow"}
              data-plasmic-override={overrides.overlayArrow}
              className={classNames("__wab_instance", sty.overlayArrow)}
            />
          ) : null}
          <BaseDialog
            data-plasmic-name={"ariaDialog"}
            data-plasmic-override={overrides.ariaDialog}
            className={classNames("__wab_instance", sty.ariaDialog)}
          >
            {renderPlasmicSlot({
              defaultContents: (
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__z5AfC)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fmrJd
                    )}
                  >
                    {"This is a Popover!"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sOh2C
                    )}
                  >
                    {"You can put anything here!"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wz8Hd
                    )}
                  >
                    {
                      "Use it in a `Aria Dialog Trigger` component to trigger it on a button click."
                    }
                  </div>
                </Stack__>
              ),
              value: args.content
            })}
          </BaseDialog>
        </BasePopover>
      }
      isOpen={generateStateValueProp($state, ["ariaDialogTrigger", "isOpen"])}
      onOpenChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, [
          "ariaDialogTrigger",
          "isOpen"
        ]).apply(null, eventArgs);
      }}
      trigger={renderPlasmicSlot({
        defaultContents: (
          <Button3
            className={classNames("__wab_instance", sty.button3__oDpld)}
            label={"Open Popover"}
          />
        ),

        value: args.trigger
      })}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaDialogTrigger: [
    "ariaDialogTrigger",
    "ariaPopover",
    "overlayArrow",
    "ariaDialog"
  ],
  ariaPopover: ["ariaPopover", "overlayArrow", "ariaDialog"],
  overlayArrow: ["overlayArrow"],
  ariaDialog: ["ariaDialog"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaDialogTrigger: typeof BaseDialogTrigger;
  ariaPopover: typeof BasePopover;
  overlayArrow: typeof OverlayArrow;
  ariaDialog: typeof BaseDialog;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPopover__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPopover__VariantsArgs;
    args?: PlasmicPopover__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPopover__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPopover__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPopover__ArgProps,
          internalVariantPropNames: PlasmicPopover__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPopover__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaDialogTrigger") {
    func.displayName = "PlasmicPopover";
  } else {
    func.displayName = `PlasmicPopover.${nodeName}`;
  }
  return func;
}

export const PlasmicPopover = Object.assign(
  // Top-level PlasmicPopover renders the root element
  makeNodeComponent("ariaDialogTrigger"),
  {
    // Helper components rendering sub-elements
    ariaPopover: makeNodeComponent("ariaPopover"),
    overlayArrow: makeNodeComponent("overlayArrow"),
    ariaDialog: makeNodeComponent("ariaDialog"),

    // Metadata about props expected for PlasmicPopover
    internalVariantProps: PlasmicPopover__VariantProps,
    internalArgProps: PlasmicPopover__ArgProps
  }
);

export default PlasmicPopover;
/* prettier-ignore-end */
