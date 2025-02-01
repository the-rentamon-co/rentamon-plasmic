// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: JDKbvzOHcQCj

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

import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import Wallet from "../../Wallet"; // plasmic-import: bHX7IYOtGqc7/component
import PropertyName from "../../PropertyName"; // plasmic-import: 35iXAFb28kzU/component
import FragmentLongPress from "../../FragmentLongPress"; // plasmic-import: F6FdGjFt2-9F/component
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: JDKbvzOHcQCj/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  httpRestApiFetcher?: Flex__<typeof DataFetcher>;
  wallet?: Flex__<typeof Wallet>;
  propertyName?: Flex__<typeof PropertyName>;
  fragmentLongPress?: Flex__<typeof FragmentLongPress>;
  modal?: Flex__<typeof AntdModal>;
  form?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  textArea?: Flex__<typeof AntdTextArea>;
  button?: Flex__<typeof AntdButton>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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
      },
      {
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
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
    <React.Fragment>
      <Head></Head>

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
          <div className={classNames(projectcss.all, sty.freeBox__co91K)}>
            <div className={classNames(projectcss.all, sty.freeBox___3Lpss)}>
              <DataFetcher
                data-plasmic-name={"httpRestApiFetcher"}
                data-plasmic-override={overrides.httpRestApiFetcher}
                className={classNames("__wab_instance", sty.httpRestApiFetcher)}
                dataName={"fetchedData"}
                errorDisplay={
                  <DataCtxReader__>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__yOg4X
                        )}
                      >
                        {"Error fetching data"}
                      </div>
                    )}
                  </DataCtxReader__>
                }
                errorName={"fetchError"}
                headers={{
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM0MjQ5MTYwLCJpYXQiOjE3MjM4ODExNjAsImp0aSI6IjZjZmQ0YWZhNjMwZTQ1Yzg4ZmY1ZGU4NmY4Y2YyNjAzIiwidXNlcl9pZCI6NDY2fQ.clklsxrxx5HrjKxBi8rmb1sl2lrmGJ2tc0_Lkb_4T84"
                }}
                loadingDisplay={
                  <DataCtxReader__>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___8TX84
                        )}
                      >
                        {"Loading..."}
                      </div>
                    )}
                  </DataCtxReader__>
                }
                method={"GET"}
                noLayout={false}
                url={(() => {
                  try {
                    return "https://rentamon-api.liara.run/api/user_info?property_id=1";
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <Wallet
                      data-plasmic-name={"wallet"}
                      data-plasmic-override={overrides.wallet}
                      className={classNames("__wab_instance", sty.wallet)}
                    />
                  )}
                </DataCtxReader__>
              </DataFetcher>
              <PropertyName
                data-plasmic-name={"propertyName"}
                data-plasmic-override={overrides.propertyName}
                className={classNames("__wab_instance", sty.propertyName)}
              />
            </div>
          </div>
          <FragmentLongPress
            data-plasmic-name={"fragmentLongPress"}
            data-plasmic-override={overrides.fragmentLongPress}
            className={classNames("__wab_instance", sty.fragmentLongPress)}
            onLongPress={async () => {
              const $steps = {};

              $steps["updateModalOpen"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["modal", "open"]
                      },
                      operation: 0,
                      value: true
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
                $steps["updateModalOpen"] != null &&
                typeof $steps["updateModalOpen"] === "object" &&
                typeof $steps["updateModalOpen"].then === "function"
              ) {
                $steps["updateModalOpen"] = await $steps["updateModalOpen"];
              }
            }}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bReIo
              )}
            >
              {"Enter some text"}
            </div>
          </FragmentLongPress>
          <AntdModal
            data-plasmic-name={"modal"}
            data-plasmic-override={overrides.modal}
            className={classNames("__wab_instance", sty.modal)}
            defaultStylesClassName={classNames(
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              plasmic_antd_5_hostless_css.plasmic_tokens,
              plasmic_plasmic_rich_components_css.plasmic_tokens
            )}
            hideFooter={true}
            modalScopeClassName={sty["modal__modal"]}
            onOpenChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["modal", "open"]).apply(
                null,
                eventArgs
              );
            }}
            open={generateStateValueProp($state, ["modal", "open"])}
            title={"Modal title"}
            trigger={null}
          >
            {(() => {
              const child$Props = {
                className: classNames("__wab_instance", sty.form),
                extendedOnValuesChange: async (...eventArgs: any) => {
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "value",
                    ["form", "value"],
                    FormWrapper_Helpers
                  ).apply(null, eventArgs);
                },
                formItems: undefined,
                labelCol: { span: 8, horizontalOnly: true },
                layout: "vertical",
                mode: undefined,
                onIsSubmittingChange: async (...eventArgs: any) => {
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "isSubmitting",
                    ["form", "isSubmitting"],
                    FormWrapper_Helpers
                  ).apply(null, eventArgs);
                },
                ref: ref => {
                  $refs["form"] = ref;
                },
                wrapperCol: { span: 16, horizontalOnly: true }
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "value",
                    plasmicStateName: "form.value"
                  },
                  {
                    name: "isSubmitting",
                    plasmicStateName: "form.isSubmitting"
                  }
                ],
                [],
                FormWrapper_Helpers ?? {},
                child$Props
              );

              return (
                <FormWrapper
                  data-plasmic-name={"form"}
                  data-plasmic-override={overrides.form}
                  {...child$Props}
                >
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField__jrb4U
                    )}
                    label={"Name"}
                    name={"name"}
                  >
                    <AntdInput
                      className={classNames("__wab_instance", sty.input)}
                    />
                  </FormItemWrapper>
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField__nfMbp
                    )}
                    label={"Message"}
                    name={"message"}
                  >
                    <AntdTextArea
                      className={classNames("__wab_instance", sty.textArea)}
                    />
                  </FormItemWrapper>
                  <AntdButton
                    className={classNames("__wab_instance", sty.button)}
                    submitsForm={true}
                    type={"primary"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ncfzt
                      )}
                    >
                      {"Submit"}
                    </div>
                  </AntdButton>
                </FormWrapper>
              );
            })()}
          </AntdModal>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "httpRestApiFetcher",
    "wallet",
    "propertyName",
    "fragmentLongPress",
    "modal",
    "form",
    "input",
    "textArea",
    "button"
  ],
  httpRestApiFetcher: ["httpRestApiFetcher", "wallet"],
  wallet: ["wallet"],
  propertyName: ["propertyName"],
  fragmentLongPress: ["fragmentLongPress"],
  modal: ["modal", "form", "input", "textArea", "button"],
  form: ["form", "input", "textArea", "button"],
  input: ["input"],
  textArea: ["textArea"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  httpRestApiFetcher: typeof DataFetcher;
  wallet: typeof Wallet;
  propertyName: typeof PropertyName;
  fragmentLongPress: typeof FragmentLongPress;
  modal: typeof AntdModal;
  form: typeof FormWrapper;
  input: typeof AntdInput;
  textArea: typeof AntdTextArea;
  button: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    wallet: makeNodeComponent("wallet"),
    propertyName: makeNodeComponent("propertyName"),
    fragmentLongPress: makeNodeComponent("fragmentLongPress"),
    modal: makeNodeComponent("modal"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    textArea: makeNodeComponent("textArea"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
