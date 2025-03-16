// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: 4_Sank-PwTYC

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

import NavbarRentamonComponent from "../../NavbarRentamonComponent"; // plasmic-import: gWac1FMbIJat/component
import { Video } from "@plasmicpkgs/plasmic-basic-components";
import RentamonFooter from "../../RentamonFooter"; // plasmic-import: DSdlo5kdtbOe/component

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicDownload.module.css"; // plasmic-import: 4_Sank-PwTYC/css

createPlasmicElementProxy;

export type PlasmicDownload__VariantMembers = {};
export type PlasmicDownload__VariantsArgs = {};
type VariantPropType = keyof PlasmicDownload__VariantsArgs;
export const PlasmicDownload__VariantProps = new Array<VariantPropType>();

export type PlasmicDownload__ArgsType = {};
type ArgPropType = keyof PlasmicDownload__ArgsType;
export const PlasmicDownload__ArgProps = new Array<ArgPropType>();

export type PlasmicDownload__OverridesType = {
  downlaod?: Flex__<"div">;
  navbarRentamonComponent?: Flex__<typeof NavbarRentamonComponent>;
  mainContents?: Flex__<"div">;
  introApp?: Flex__<"div">;
  introCalendar4?: Flex__<"div">;
  introCalendarRight?: Flex__<"div">;
  introCalendarRight2?: Flex__<"div">;
  introCalendarRight3?: Flex__<"div">;
  introCalendarLeft?: Flex__<"div">;
  htmlVideo?: Flex__<typeof Video>;
  link?: Flex__<"div">;
  title?: Flex__<"div">;
  downloadLinks?: Flex__<"div">;
  app1?: Flex__<"div">;
  text?: Flex__<"div">;
  icon?: Flex__<"div">;
  app2?: Flex__<"div">;
  text2?: Flex__<"div">;
  icon2?: Flex__<"div">;
  app4?: Flex__<"div">;
  text4?: Flex__<"div">;
  icon4?: Flex__<"div">;
  app5?: Flex__<"div">;
  text5?: Flex__<"div">;
  icon5?: Flex__<"div">;
  image?: Flex__<"div">;
  introAutoSyncCaption2?: Flex__<"div">;
  introAutoSyncDesc2?: Flex__<"div">;
  introAutoSyncGif2?: Flex__<"div">;
  screenshots?: Flex__<"div">;
  introCalendarRight5?: Flex__<"div">;
  introCalendarRight7?: Flex__<"div">;
  rentamonFooter?: Flex__<typeof RentamonFooter>;
};

export interface DefaultDownloadProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDownload__RenderFunc(props: {
  variants: PlasmicDownload__VariantsArgs;
  args: PlasmicDownload__ArgsType;
  overrides: PlasmicDownload__OverridesType;
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicDownload.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicDownload.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicDownload.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"downlaod"}
          data-plasmic-override={overrides.downlaod}
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
            sty.downlaod
          )}
        >
          <NavbarRentamonComponent
            data-plasmic-name={"navbarRentamonComponent"}
            data-plasmic-override={overrides.navbarRentamonComponent}
            className={classNames(
              "__wab_instance",
              sty.navbarRentamonComponent
            )}
          />

          <div
            data-plasmic-name={"mainContents"}
            data-plasmic-override={overrides.mainContents}
            className={classNames(projectcss.all, sty.mainContents)}
          >
            <div
              data-plasmic-name={"introApp"}
              data-plasmic-override={overrides.introApp}
              className={classNames(projectcss.all, sty.introApp)}
            >
              <div
                data-plasmic-name={"introCalendar4"}
                data-plasmic-override={overrides.introCalendar4}
                className={classNames(projectcss.all, sty.introCalendar4)}
              >
                <div
                  data-plasmic-name={"introCalendarRight"}
                  data-plasmic-override={overrides.introCalendarRight}
                  className={classNames(projectcss.all, sty.introCalendarRight)}
                >
                  <div
                    data-plasmic-name={"introCalendarRight2"}
                    data-plasmic-override={overrides.introCalendarRight2}
                    className={classNames(
                      projectcss.all,
                      sty.introCalendarRight2
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___86Oug
                      )}
                    >
                      {
                        "\u062f\u0627\u0646\u0644\u0648\u062f \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0631\u0646\u062a\u0627\u0645\u0648\u0646"
                      }
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"introCalendarRight3"}
                    data-plasmic-override={overrides.introCalendarRight3}
                    className={classNames(
                      projectcss.all,
                      sty.introCalendarRight3
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nIz0M
                      )}
                    >
                      {
                        "\u0628\u0627 \u0631\u0646\u062a\u0627\u0645\u0648\u0646\u060c \u0628\u0647\u200c\u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0648\u0636\u0639\u06cc\u062a \u0648\u06cc\u0644\u0627 \u0648 \u0627\u062c\u0627\u0631\u0647 \u062f\u0627\u062f\u0646\u0634 \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0647\u0627\u06cc\u06cc \u0645\u062b\u0644 \u062c\u0627\u0628\u0627\u0645\u0627\u060c \u062c\u0627\u062c\u06cc\u06af\u0627\u060c \u0634\u0628 \u0627\u062a\u0627\u0642\u06a9 \u0648\u2026 \u062f\u06cc\u06af\u0647 \u06cc\u0647 \u06a9\u0627\u0631 \u0633\u0627\u062f\u0647 \u0648 \u062d\u062a\u06cc \u062c\u0630\u0627\u0628\u0647!\r"
                      }
                    </div>
                  </div>
                </div>
                <div
                  data-plasmic-name={"introCalendarLeft"}
                  data-plasmic-override={overrides.introCalendarLeft}
                  className={classNames(projectcss.all, sty.introCalendarLeft)}
                >
                  <Video
                    data-plasmic-name={"htmlVideo"}
                    data-plasmic-override={overrides.htmlVideo}
                    className={classNames("__wab_instance", sty.htmlVideo)}
                    controls={true}
                    loop={true}
                    src={
                      "https://rentamon-files.storage.iran.liara.space/video/pro.mp4"
                    }
                  />
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(projectcss.all, sty.link)}
            >
              <div
                data-plasmic-name={"title"}
                data-plasmic-override={overrides.title}
                className={classNames(projectcss.all, sty.title)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iRfac
                  )}
                >
                  {
                    "\u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u062f\u0627\u0646\u0644\u0648\u062f"
                  }
                </div>
              </div>
              <div
                data-plasmic-name={"downloadLinks"}
                data-plasmic-override={overrides.downloadLinks}
                className={classNames(projectcss.all, sty.downloadLinks)}
              >
                <div
                  data-plasmic-name={"app1"}
                  data-plasmic-override={overrides.app1}
                  className={classNames(projectcss.all, sty.app1)}
                  onClick={async event => {
                    const $steps = {};

                    $steps[
                      "goToHttpsRentamonFilesStorageIranLiaraSpaceApkRentamon14Apk"
                    ] = true
                      ? (() => {
                          const actionArgs = {
                            destination:
                              "https://rentamon-files.storage.iran.liara.space/APK/rentamon14.apk"
                          };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps[
                        "goToHttpsRentamonFilesStorageIranLiaraSpaceApkRentamon14Apk"
                      ] != null &&
                      typeof $steps[
                        "goToHttpsRentamonFilesStorageIranLiaraSpaceApkRentamon14Apk"
                      ] === "object" &&
                      typeof $steps[
                        "goToHttpsRentamonFilesStorageIranLiaraSpaceApkRentamon14Apk"
                      ].then === "function"
                    ) {
                      $steps[
                        "goToHttpsRentamonFilesStorageIranLiaraSpaceApkRentamon14Apk"
                      ] = await $steps[
                        "goToHttpsRentamonFilesStorageIranLiaraSpaceApkRentamon14Apk"
                      ];
                    }
                  }}
                >
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(projectcss.all, sty.text)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vkyyr
                      )}
                    >
                      {
                        "\u062f\u0627\u0646\u0644\u0648\u062f \u0645\u0633\u062a\u0642\u06cc\u0645"
                      }
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dsPT
                      )}
                    >
                      {
                        "\u0646\u0633\u062e\u0647 \u0627\u0646\u062f\u0631\u0648\u06cc\u062f"
                      }
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"icon"}
                    data-plasmic-override={overrides.icon}
                    className={classNames(projectcss.all, sty.icon)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__gFiVu)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"36px"}
                      displayWidth={
                        hasVariant(globalVariants, "screen", "mobile")
                          ? "36px"
                          : "auto"
                      }
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/website_starter/images/image57.svg",
                        fullWidth: 46,
                        fullHeight: 46,
                        aspectRatio: 1
                      }}
                    />
                  </div>
                </div>
                <Stack__
                  as={"div"}
                  data-plasmic-name={"app2"}
                  data-plasmic-override={overrides.app2}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.app2)}
                  onClick={async event => {
                    const $steps = {};

                    $steps["goToPanelCalendar"] = true
                      ? (() => {
                          const actionArgs = { destination: `/panel` };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToPanelCalendar"] != null &&
                      typeof $steps["goToPanelCalendar"] === "object" &&
                      typeof $steps["goToPanelCalendar"].then === "function"
                    ) {
                      $steps["goToPanelCalendar"] = await $steps[
                        "goToPanelCalendar"
                      ];
                    }
                  }}
                >
                  <div
                    data-plasmic-name={"text2"}
                    data-plasmic-override={overrides.text2}
                    className={classNames(projectcss.all, sty.text2)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___38Wuz
                      )}
                    >
                      {
                        "\u0646\u0633\u062e\u0647 \u0648\u0628\u200c\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"
                      }
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__auZyW
                      )}
                    >
                      {
                        "\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 iOS"
                      }
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"icon2"}
                    data-plasmic-override={overrides.icon2}
                    className={classNames(projectcss.all, sty.icon2)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___6Z2Pp)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={
                        hasVariant(globalVariants, "screen", "mobile")
                          ? "32px"
                          : hasVariant(globalVariants, "screen", "tablet")
                          ? "26px"
                          : "100%"
                      }
                      displayMinHeight={"0"}
                      displayMinWidth={
                        hasVariant(globalVariants, "screen", "tablet")
                          ? "26px"
                          : "30px"
                      }
                      displayWidth={
                        hasVariant(globalVariants, "screen", "mobile")
                          ? "100%"
                          : "auto"
                      }
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/website_starter/images/image58.svg",
                        fullWidth: 15,
                        fullHeight: 15,
                        aspectRatio: 1
                      }}
                    />
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  data-plasmic-name={"app4"}
                  data-plasmic-override={overrides.app4}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.app4)}
                >
                  <div
                    data-plasmic-name={"text4"}
                    data-plasmic-override={overrides.text4}
                    className={classNames(projectcss.all, sty.text4)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___5Br6W
                      )}
                    >
                      {"\u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0632"}
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"icon4"}
                    data-plasmic-override={overrides.icon4}
                    className={classNames(projectcss.all, sty.icon4)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__mj9Il)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={
                        hasVariant(globalVariants, "screen", "mobile")
                          ? "117px"
                          : "auto"
                      }
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/website_starter/images/image59.svg",
                        fullWidth: 117,
                        fullHeight: 52,
                        aspectRatio: 2.25
                      }}
                    />
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  data-plasmic-name={"app5"}
                  data-plasmic-override={overrides.app5}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.app5)}
                >
                  <div
                    data-plasmic-name={"text5"}
                    data-plasmic-override={overrides.text5}
                    className={classNames(projectcss.all, sty.text5)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__r5B
                      )}
                    >
                      {"\u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0632"}
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"icon5"}
                    data-plasmic-override={overrides.icon5}
                    className={classNames(projectcss.all, sty.icon5)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__neNsn)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={
                        hasVariant(globalVariants, "screen", "mobile")
                          ? "107px"
                          : "auto"
                      }
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/website_starter/images/image60.svg",
                        fullWidth: 109,
                        fullHeight: 44,
                        aspectRatio: 2.477273
                      }}
                    />
                  </div>
                </Stack__>
              </div>
            </div>
            <div
              data-plasmic-name={"image"}
              data-plasmic-override={overrides.image}
              className={classNames(projectcss.all, sty.image)}
            >
              <div
                data-plasmic-name={"introAutoSyncCaption2"}
                data-plasmic-override={overrides.introAutoSyncCaption2}
                className={classNames(
                  projectcss.all,
                  sty.introAutoSyncCaption2
                )}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kcmja
                  )}
                >
                  {
                    "\u0628\u0647\u200c\u0631\u0648\u0632 \u0646\u06af\u0647 \u062f\u0627\u0634\u062a\u0646 \u0648\u0636\u0639\u06cc\u062a \u062a\u0642\u0648\u06cc\u0645 \u0648 \u0646\u0631\u062e\u200c\u0647\u0627 \u062a\u0648\u06cc \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0647\u0627\u06cc \u0627\u062c\u0627\u0631\u0647 \u0648\u06cc\u0644\u0627\u060c \u062c\u0631\u06cc\u0645\u0647 \u0634\u062f\u0646 \u0628\u062e\u0627\u0637\u0631 \u06a9\u0646\u0633\u0644\u06cc\u060c \u0648 \u06cc\u0627 \u067e\u0627\u0633\u062e \u0628\u0647 \u062a\u0645\u0627\u0633\u200c\u0647\u0627\u06cc \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0627\u0648\u0646\u200c\u0647\u0627 \u062e\u0648\u062f\u0634 \u06cc\u0647 \u0686\u0627\u0644\u0634 \u0628\u0632\u0631\u06af\u0647 \u0648 \u06af\u0627\u0647\u06cc \u062f\u06cc\u06af\u0647 \u0628\u0647 \u062f\u0631\u062f\u0633\u0631\u0647\u0627\u0634 \u0646\u0645\u06cc\u200c\u0627\u0631\u0632\u0647."
                  }
                </div>
              </div>
              <div
                data-plasmic-name={"introAutoSyncDesc2"}
                data-plasmic-override={overrides.introAutoSyncDesc2}
                className={classNames(projectcss.all, sty.introAutoSyncDesc2)}
              >
                <div
                  data-plasmic-name={"introAutoSyncGif2"}
                  data-plasmic-override={overrides.introAutoSyncGif2}
                  className={classNames(projectcss.all, sty.introAutoSyncGif2)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__iDl9H)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/website_starter/images/image61.png",
                      fullWidth: 826,
                      fullHeight: 551,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
            <Stack__
              as={"div"}
              data-plasmic-name={"screenshots"}
              data-plasmic-override={overrides.screenshots}
              hasGap={true}
              className={classNames(projectcss.all, sty.screenshots)}
            >
              <div
                data-plasmic-name={"introCalendarRight5"}
                data-plasmic-override={overrides.introCalendarRight5}
                className={classNames(projectcss.all, sty.introCalendarRight5)}
              >
                <div
                  data-plasmic-name={"introCalendarRight7"}
                  data-plasmic-override={overrides.introCalendarRight7}
                  className={classNames(
                    projectcss.all,
                    sty.introCalendarRight7
                  )}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yo4O8
                    )}
                  >
                    {
                      "\u0628\u0631\u0646\u0627\u0645\u0647 \u0645\u062f\u06cc\u0631\u06cc\u062a \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647 \u0627\u0642\u0627\u0645\u062a\u06af\u0627\u0647 \u0631\u0646\u062a\u0627\u0645\u0648\u0646 \u0645\u0634\u06a9\u0644 \u0631\u0648 \u062d\u0644 \u0645\u06cc\u200c\u06a9\u0646\u0647:"
                    }
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dfRz1
                    )}
                  >
                    {
                      "\u2705 \u062c\u0644\u0648\u06af\u06cc\u0631\u06cc \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0632 \u0628\u0631\u0648\u0632 \u062e\u0637\u0627\u0647\u0627\u06cc \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0648 \u06a9\u0633\u0631 \u0627\u0645\u062a\u06cc\u0627\u0632\r\n\u2705 \u06cc\u06a9 \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u062c\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0686\u0646\u062f \u0628\u0631\u0646\u0627\u0645\u0647\r\n\u2705 \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647\u200c\u0633\u0627\u0632\u06cc \u062a\u0642\u0648\u06cc\u0645 \u062f\u0631 \u062a\u0645\u0627\u0645 \u0633\u0627\u06cc\u062a\u200c\u0647\u0627\r\n\u2705 \u0645\u0634\u0627\u0647\u062f\u0647 \u0648 \u062a\u063a\u06cc\u06cc\u0631 \u0648\u0636\u0639\u06cc\u062a \u062a\u0642\u0648\u06cc\u0645 \u0647\u0645\u0647\u200c\u06cc \u067e\u0644\u062a\u0641\u0631\u0645\u200c\u0647\u0627 \u0627\u0632 \u06cc\u06a9 \u067e\u0646\u0644\r\n\u2705 \u0628\u0647\u200c\u0631\u0648\u0632 \u06a9\u0631\u062f\u0646 \u0646\u0631\u062e \u06a9\u0631\u0627\u06cc\u0647 \u062a\u0645\u0627\u0645 \u0633\u0627\u06cc\u062a\u200c\u0647\u0627 \u0627\u0632 \u06cc\u06a9 \u067e\u0646\u0644"
                    }
                  </div>
                </div>
              </div>
            </Stack__>
          </div>
          <RentamonFooter
            data-plasmic-name={"rentamonFooter"}
            data-plasmic-override={overrides.rentamonFooter}
            className={classNames("__wab_instance", sty.rentamonFooter)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  downlaod: [
    "downlaod",
    "navbarRentamonComponent",
    "mainContents",
    "introApp",
    "introCalendar4",
    "introCalendarRight",
    "introCalendarRight2",
    "introCalendarRight3",
    "introCalendarLeft",
    "htmlVideo",
    "link",
    "title",
    "downloadLinks",
    "app1",
    "text",
    "icon",
    "app2",
    "text2",
    "icon2",
    "app4",
    "text4",
    "icon4",
    "app5",
    "text5",
    "icon5",
    "image",
    "introAutoSyncCaption2",
    "introAutoSyncDesc2",
    "introAutoSyncGif2",
    "screenshots",
    "introCalendarRight5",
    "introCalendarRight7",
    "rentamonFooter"
  ],
  navbarRentamonComponent: ["navbarRentamonComponent"],
  mainContents: [
    "mainContents",
    "introApp",
    "introCalendar4",
    "introCalendarRight",
    "introCalendarRight2",
    "introCalendarRight3",
    "introCalendarLeft",
    "htmlVideo",
    "link",
    "title",
    "downloadLinks",
    "app1",
    "text",
    "icon",
    "app2",
    "text2",
    "icon2",
    "app4",
    "text4",
    "icon4",
    "app5",
    "text5",
    "icon5",
    "image",
    "introAutoSyncCaption2",
    "introAutoSyncDesc2",
    "introAutoSyncGif2",
    "screenshots",
    "introCalendarRight5",
    "introCalendarRight7"
  ],
  introApp: [
    "introApp",
    "introCalendar4",
    "introCalendarRight",
    "introCalendarRight2",
    "introCalendarRight3",
    "introCalendarLeft",
    "htmlVideo"
  ],
  introCalendar4: [
    "introCalendar4",
    "introCalendarRight",
    "introCalendarRight2",
    "introCalendarRight3",
    "introCalendarLeft",
    "htmlVideo"
  ],
  introCalendarRight: [
    "introCalendarRight",
    "introCalendarRight2",
    "introCalendarRight3"
  ],
  introCalendarRight2: ["introCalendarRight2"],
  introCalendarRight3: ["introCalendarRight3"],
  introCalendarLeft: ["introCalendarLeft", "htmlVideo"],
  htmlVideo: ["htmlVideo"],
  link: [
    "link",
    "title",
    "downloadLinks",
    "app1",
    "text",
    "icon",
    "app2",
    "text2",
    "icon2",
    "app4",
    "text4",
    "icon4",
    "app5",
    "text5",
    "icon5"
  ],
  title: ["title"],
  downloadLinks: [
    "downloadLinks",
    "app1",
    "text",
    "icon",
    "app2",
    "text2",
    "icon2",
    "app4",
    "text4",
    "icon4",
    "app5",
    "text5",
    "icon5"
  ],
  app1: ["app1", "text", "icon"],
  text: ["text"],
  icon: ["icon"],
  app2: ["app2", "text2", "icon2"],
  text2: ["text2"],
  icon2: ["icon2"],
  app4: ["app4", "text4", "icon4"],
  text4: ["text4"],
  icon4: ["icon4"],
  app5: ["app5", "text5", "icon5"],
  text5: ["text5"],
  icon5: ["icon5"],
  image: [
    "image",
    "introAutoSyncCaption2",
    "introAutoSyncDesc2",
    "introAutoSyncGif2"
  ],
  introAutoSyncCaption2: ["introAutoSyncCaption2"],
  introAutoSyncDesc2: ["introAutoSyncDesc2", "introAutoSyncGif2"],
  introAutoSyncGif2: ["introAutoSyncGif2"],
  screenshots: ["screenshots", "introCalendarRight5", "introCalendarRight7"],
  introCalendarRight5: ["introCalendarRight5", "introCalendarRight7"],
  introCalendarRight7: ["introCalendarRight7"],
  rentamonFooter: ["rentamonFooter"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  downlaod: "div";
  navbarRentamonComponent: typeof NavbarRentamonComponent;
  mainContents: "div";
  introApp: "div";
  introCalendar4: "div";
  introCalendarRight: "div";
  introCalendarRight2: "div";
  introCalendarRight3: "div";
  introCalendarLeft: "div";
  htmlVideo: typeof Video;
  link: "div";
  title: "div";
  downloadLinks: "div";
  app1: "div";
  text: "div";
  icon: "div";
  app2: "div";
  text2: "div";
  icon2: "div";
  app4: "div";
  text4: "div";
  icon4: "div";
  app5: "div";
  text5: "div";
  icon5: "div";
  image: "div";
  introAutoSyncCaption2: "div";
  introAutoSyncDesc2: "div";
  introAutoSyncGif2: "div";
  screenshots: "div";
  introCalendarRight5: "div";
  introCalendarRight7: "div";
  rentamonFooter: typeof RentamonFooter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDownload__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDownload__VariantsArgs;
    args?: PlasmicDownload__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDownload__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDownload__ArgsType,
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
          internalArgPropNames: PlasmicDownload__ArgProps,
          internalVariantPropNames: PlasmicDownload__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDownload__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "downlaod") {
    func.displayName = "PlasmicDownload";
  } else {
    func.displayName = `PlasmicDownload.${nodeName}`;
  }
  return func;
}

export const PlasmicDownload = Object.assign(
  // Top-level PlasmicDownload renders the root element
  makeNodeComponent("downlaod"),
  {
    // Helper components rendering sub-elements
    navbarRentamonComponent: makeNodeComponent("navbarRentamonComponent"),
    mainContents: makeNodeComponent("mainContents"),
    introApp: makeNodeComponent("introApp"),
    introCalendar4: makeNodeComponent("introCalendar4"),
    introCalendarRight: makeNodeComponent("introCalendarRight"),
    introCalendarRight2: makeNodeComponent("introCalendarRight2"),
    introCalendarRight3: makeNodeComponent("introCalendarRight3"),
    introCalendarLeft: makeNodeComponent("introCalendarLeft"),
    htmlVideo: makeNodeComponent("htmlVideo"),
    link: makeNodeComponent("link"),
    title: makeNodeComponent("title"),
    downloadLinks: makeNodeComponent("downloadLinks"),
    app1: makeNodeComponent("app1"),
    text: makeNodeComponent("text"),
    icon: makeNodeComponent("icon"),
    app2: makeNodeComponent("app2"),
    text2: makeNodeComponent("text2"),
    icon2: makeNodeComponent("icon2"),
    app4: makeNodeComponent("app4"),
    text4: makeNodeComponent("text4"),
    icon4: makeNodeComponent("icon4"),
    app5: makeNodeComponent("app5"),
    text5: makeNodeComponent("text5"),
    icon5: makeNodeComponent("icon5"),
    image: makeNodeComponent("image"),
    introAutoSyncCaption2: makeNodeComponent("introAutoSyncCaption2"),
    introAutoSyncDesc2: makeNodeComponent("introAutoSyncDesc2"),
    introAutoSyncGif2: makeNodeComponent("introAutoSyncGif2"),
    screenshots: makeNodeComponent("screenshots"),
    introCalendarRight5: makeNodeComponent("introCalendarRight5"),
    introCalendarRight7: makeNodeComponent("introCalendarRight7"),
    rentamonFooter: makeNodeComponent("rentamonFooter"),

    // Metadata about props expected for PlasmicDownload
    internalVariantProps: PlasmicDownload__VariantProps,
    internalArgProps: PlasmicDownload__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "دانلود اپلیکیشن موبایل رنتامون",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDownload;
/* prettier-ignore-end */
