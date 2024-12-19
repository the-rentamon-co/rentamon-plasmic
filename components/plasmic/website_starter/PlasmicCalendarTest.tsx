// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: FDBji6QDqVJ5

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

import Calendar3 from "../../Calendar3"; // plasmic-import: PT85RDIdexix/component
import { SliderWrapper } from "@plasmicpkgs/react-slick";
import { sliderHelpers as SliderWrapper_Helpers } from "@plasmicpkgs/react-slick";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicCalendarTest.module.css"; // plasmic-import: FDBji6QDqVJ5/css

createPlasmicElementProxy;

export type PlasmicCalendarTest__VariantMembers = {};
export type PlasmicCalendarTest__VariantsArgs = {};
type VariantPropType = keyof PlasmicCalendarTest__VariantsArgs;
export const PlasmicCalendarTest__VariantProps = new Array<VariantPropType>();

export type PlasmicCalendarTest__ArgsType = {};
type ArgPropType = keyof PlasmicCalendarTest__ArgsType;
export const PlasmicCalendarTest__ArgProps = new Array<ArgPropType>();

export type PlasmicCalendarTest__OverridesType = {
  root?: Flex__<"div">;
  calendar3?: Flex__<typeof Calendar3>;
  sliderCarousel?: Flex__<typeof SliderWrapper>;
};

export interface DefaultCalendarTestProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCalendarTest__RenderFunc(props: {
  variants: PlasmicCalendarTest__VariantsArgs;
  args: PlasmicCalendarTest__ArgsType;
  overrides: PlasmicCalendarTest__OverridesType;
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
        path: "sliderCarousel.currentSlide",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0,

        refName: "sliderCarousel",
        onMutate: generateOnMutateForSpec("currentSlide", SliderWrapper_Helpers)
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
          <Calendar3
            data-plasmic-name={"calendar3"}
            data-plasmic-override={overrides.calendar3}
            className={classNames("__wab_instance", sty.calendar3)}
          />

          {(() => {
            const child$Props = {
              arrows: false,
              autoplay: true,
              autoplaySpeed: 10,
              beforeChange: async (...eventArgs: any) => {
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "currentSlide",
                  ["sliderCarousel", "currentSlide"],
                  SliderWrapper_Helpers
                ).apply(null, eventArgs);
              },
              centerMode: true,
              className: classNames("__wab_instance", sty.sliderCarousel),
              cssEase: "linear",
              initialSlide: generateStateValueProp($state, [
                "sliderCarousel",
                "currentSlide"
              ]),
              ref: ref => {
                $refs["sliderCarousel"] = ref;
              },
              sliderScopeClassName: sty["sliderCarousel__slider"],
              speed: 5000
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "currentSlide",
                  plasmicStateName: "sliderCarousel.currentSlide"
                }
              ],
              [],
              SliderWrapper_Helpers ?? {},
              child$Props
            );

            return (
              <SliderWrapper
                data-plasmic-name={"sliderCarousel"}
                data-plasmic-override={overrides.sliderCarousel}
                {...child$Props}
              >
                <div className={classNames(projectcss.all, sty.freeBox__qCa47)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___46NiV
                    )}
                  >
                    {"Enter some text"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__pAZg)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__w2H3A
                    )}
                  >
                    {"Enter some text"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__gkoDx)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3TyPw
                    )}
                  >
                    {"Enter some text"}
                  </div>
                </div>
              </SliderWrapper>
            );
          })()}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "calendar3", "sliderCarousel"],
  calendar3: ["calendar3"],
  sliderCarousel: ["sliderCarousel"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  calendar3: typeof Calendar3;
  sliderCarousel: typeof SliderWrapper;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCalendarTest__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCalendarTest__VariantsArgs;
    args?: PlasmicCalendarTest__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCalendarTest__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCalendarTest__ArgsType,
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
          internalArgPropNames: PlasmicCalendarTest__ArgProps,
          internalVariantPropNames: PlasmicCalendarTest__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCalendarTest__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCalendarTest";
  } else {
    func.displayName = `PlasmicCalendarTest.${nodeName}`;
  }
  return func;
}

export const PlasmicCalendarTest = Object.assign(
  // Top-level PlasmicCalendarTest renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    calendar3: makeNodeComponent("calendar3"),
    sliderCarousel: makeNodeComponent("sliderCarousel"),

    // Metadata about props expected for PlasmicCalendarTest
    internalVariantProps: PlasmicCalendarTest__VariantProps,
    internalArgProps: PlasmicCalendarTest__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCalendarTest;
/* prettier-ignore-end */
