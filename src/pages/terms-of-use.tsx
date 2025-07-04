// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/website_starter/PlasmicGlobalContextsProvider";

import { Plasmicقوانینومقرراتاستفادهازرنتامون } from "../../components/plasmic/website_starter/Plasmic\u0642\u0648\u0627\u0646\u06CC\u0646\u0648\u0645\u0642\u0631\u0631\u0627\u062A\u0627\u0633\u062A\u0641\u0627\u062F\u0647\u0627\u0632\u0631\u0646\u062A\u0627\u0645\u0648\u0646";
import { useRouter } from "next/router";

function قوانینومقرراتاستفادهازرنتامون() {
  // Use Plasmicقوانینومقرراتاستفادهازرنتامون to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmicقوانینومقرراتاستفادهازرنتامون are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, Plasmicقوانینومقرراتاستفادهازرنتامون is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).

  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <Plasmicقوانینومقرراتاستفادهازرنتامون />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export default قوانینومقرراتاستفادهازرنتامون;
