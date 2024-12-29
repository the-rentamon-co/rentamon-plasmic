// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: HaRcCLE-Zyux

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
import Button3 from "../../Button3"; // plasmic-import: Wp3oKoOgrbtq/component
import { BaseModal } from "@plasmicpkgs/react-aria/skinny/registerModal";
import { BaseDialog } from "@plasmicpkgs/react-aria/skinny/registerDialog";
import { BaseHeading } from "@plasmicpkgs/react-aria/skinny/registerHeading";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicModal2.module.css"; // plasmic-import: HaRcCLE-Zyux/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: RxgjWUbTt0eK/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: maTqXVHqE-KH/icon

createPlasmicElementProxy;

export type PlasmicModal2__VariantMembers = {
  noTrigger: "noTrigger";
};
export type PlasmicModal2__VariantsArgs = {
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
};
type VariantPropType = keyof PlasmicModal2__VariantsArgs;
export const PlasmicModal2__VariantProps = new Array<VariantPropType>(
  "noTrigger"
);

export type PlasmicModal2__ArgsType = {
  isOpen?: boolean;
  closeOnBackdropClick?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  isKeyboardDismissDisabled?: boolean;
  onOpenChange?: (val: boolean) => void;
  trigger?: React.ReactNode;
  heading?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};
type ArgPropType = keyof PlasmicModal2__ArgsType;
export const PlasmicModal2__ArgProps = new Array<ArgPropType>(
  "isOpen",
  "closeOnBackdropClick",
  "showHeader",
  "showFooter",
  "isKeyboardDismissDisabled",
  "onOpenChange",
  "trigger",
  "heading",
  "content",
  "footer"
);

export type PlasmicModal2__OverridesType = {
  ariaDialogTrigger?: Flex__<typeof BaseDialogTrigger>;
  ariaModal?: Flex__<typeof BaseModal>;
  ariaDialog?: Flex__<typeof BaseDialog>;
  ariaHeading?: Flex__<typeof BaseHeading>;
  scrollableContent?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultModal2Props {
  isOpen?: boolean;
  closeOnBackdropClick?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  isKeyboardDismissDisabled?: boolean;
  onOpenChange?: (val: boolean) => void;
  trigger?: React.ReactNode;
  heading?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicModal2__RenderFunc(props: {
  variants: PlasmicModal2__VariantsArgs;
  args: PlasmicModal2__ArgsType;
  overrides: PlasmicModal2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          closeOnBackdropClick: true,
          showHeader: true,
          showFooter: true
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
        type: "writable",
        variableType: "boolean",

        valueProp: "isOpen",
        onChangeProp: "onOpenChange"
      },
      {
        path: "ariaModal.isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true,

        refName: "ariaModal"
      },
      {
        path: "noTrigger",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTrigger
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
        sty.ariaDialogTrigger,
        {
          [sty.ariaDialogTriggernoTrigger]: hasVariant(
            $state,
            "noTrigger",
            "noTrigger"
          )
        }
      )}
      dialog={
        <BaseModal
          data-plasmic-name={"ariaModal"}
          data-plasmic-override={overrides.ariaModal}
          className={classNames("__wab_instance", sty.ariaModal, {
            [sty.ariaModalnoTrigger]: hasVariant(
              $state,
              "noTrigger",
              "noTrigger"
            )
          })}
          defaultOpen={true}
          isDismissable={args.closeOnBackdropClick}
          isKeyboardDismissDisabled={args.isKeyboardDismissDisabled}
          isOpen={generateStateValueProp($state, ["ariaModal", "isOpen"])}
          modalOverlayClass={classNames({ [sty["pcls_UZzMllJfHSPN"]]: true })}
          onOpenChange={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, ["ariaModal", "isOpen"]).apply(
              null,
              eventArgs
            );
          }}
          ref={ref => {
            $refs["ariaModal"] = ref;
          }}
          resetClassName={classNames(
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens
          )}
        >
          <BaseDialog
            data-plasmic-name={"ariaDialog"}
            data-plasmic-override={overrides.ariaDialog}
            className={classNames("__wab_instance", sty.ariaDialog, {
              [sty.ariaDialognoTrigger]: hasVariant(
                $state,
                "noTrigger",
                "noTrigger"
              )
            })}
          >
            {$props.showHeader ? (
              <BaseHeading
                data-plasmic-name={"ariaHeading"}
                data-plasmic-override={overrides.ariaHeading}
                className={classNames("__wab_instance", sty.ariaHeading, {
                  [sty.ariaHeadingnoTrigger]: hasVariant(
                    $state,
                    "noTrigger",
                    "noTrigger"
                  )
                })}
                slot={"title"}
              >
                {renderPlasmicSlot({
                  defaultContents: "Heading",
                  value: args.heading
                })}
              </BaseHeading>
            ) : null}
            <div
              data-plasmic-name={"scrollableContent"}
              data-plasmic-override={overrides.scrollableContent}
              className={classNames(projectcss.all, sty.scrollableContent)}
            >
              {renderPlasmicSlot({
                defaultContents: (
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__kLopt)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tkiul
                      )}
                    >
                      {"This is a Modal!"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kxH3J
                      )}
                    >
                      {
                        "You can put anything here!\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      }
                    </div>
                  </Stack__>
                ),
                value: args.content
              })}
            </div>
            {$props.showFooter ? (
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                {renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__qh9B)}
                    >
                      <Button3
                        color={"muted"}
                        label={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__hoTfS
                            )}
                          >
                            {"Close"}
                          </div>
                        }
                        onClick={async event => {
                          const $steps = {};

                          $steps["updateAriaDialogTriggerIsOpen"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: [
                                      "ariaDialogTrigger",
                                      "isOpen"
                                    ]
                                  },
                                  operation: 0,
                                  value: false
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
                            $steps["updateAriaDialogTriggerIsOpen"] != null &&
                            typeof $steps["updateAriaDialogTriggerIsOpen"] ===
                              "object" &&
                            typeof $steps["updateAriaDialogTriggerIsOpen"]
                              .then === "function"
                          ) {
                            $steps["updateAriaDialogTriggerIsOpen"] =
                              await $steps["updateAriaDialogTriggerIsOpen"];
                          }
                        }}
                        type={"soft"}
                      />
                    </div>
                  ),
                  value: args.footer
                })}
              </div>
            ) : null}
          </BaseDialog>
        </BaseModal>
      }
      isOpen={generateStateValueProp($state, ["ariaDialogTrigger", "isOpen"])}
      onOpenChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, [
          "ariaDialogTrigger",
          "isOpen"
        ]).apply(null, eventArgs);
      }}
      trigger={
        (hasVariant($state, "noTrigger", "noTrigger") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: <Button3 label={"Open Modal"} />,

              value: args.trigger
            })
          : null
      }
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaDialogTrigger: [
    "ariaDialogTrigger",
    "ariaModal",
    "ariaDialog",
    "ariaHeading",
    "scrollableContent",
    "freeBox"
  ],
  ariaModal: [
    "ariaModal",
    "ariaDialog",
    "ariaHeading",
    "scrollableContent",
    "freeBox"
  ],
  ariaDialog: ["ariaDialog", "ariaHeading", "scrollableContent", "freeBox"],
  ariaHeading: ["ariaHeading"],
  scrollableContent: ["scrollableContent"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaDialogTrigger: typeof BaseDialogTrigger;
  ariaModal: typeof BaseModal;
  ariaDialog: typeof BaseDialog;
  ariaHeading: typeof BaseHeading;
  scrollableContent: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicModal2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicModal2__VariantsArgs;
    args?: PlasmicModal2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicModal2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicModal2__ArgsType,
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
          internalArgPropNames: PlasmicModal2__ArgProps,
          internalVariantPropNames: PlasmicModal2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicModal2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaDialogTrigger") {
    func.displayName = "PlasmicModal2";
  } else {
    func.displayName = `PlasmicModal2.${nodeName}`;
  }
  return func;
}

export const PlasmicModal2 = Object.assign(
  // Top-level PlasmicModal2 renders the root element
  makeNodeComponent("ariaDialogTrigger"),
  {
    // Helper components rendering sub-elements
    ariaModal: makeNodeComponent("ariaModal"),
    ariaDialog: makeNodeComponent("ariaDialog"),
    ariaHeading: makeNodeComponent("ariaHeading"),
    scrollableContent: makeNodeComponent("scrollableContent"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicModal2
    internalVariantProps: PlasmicModal2__VariantProps,
    internalArgProps: PlasmicModal2__ArgProps
  }
);

export default PlasmicModal2;
/* prettier-ignore-end */
