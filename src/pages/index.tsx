import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/website_starter/PlasmicGlobalContextsProvider";
import { PlasmicHomepage } from "../../components/plasmic/website_starter/PlasmicHomepage";
import { useRouter } from "next/router";
import Head from "next/head";

function usePWAStatus() {
  const [pwaStatus, setPwaStatus] = React.useState<'installed' | 'browser'>('browser');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const isStandalone = 
        ('standalone' in window.navigator && window.navigator['standalone']) ||
        window.matchMedia('(display-mode: standalone)').matches;
      
      setPwaStatus(isStandalone ? 'installed' : 'browser');
    }
  }, []);

  return pwaStatus;
}

function Homepage() {
  const router = useRouter();
  const pwaStatus = usePWAStatus();

  return (
    <>
      <Head>
        <title>میان - مدیریت آنلاین اقامتگاه</title>
        <meta name="description" content="مدیریت آنلاین اقامتگاه" />
        <meta name="application-name" content="میان" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="میان" />
        <meta name="theme-color" content="#fcfcfc" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="https://rentamon-library.s3.ir-thr-at1.arvanstorage.ir/icon%2Fmiaan-icon-192.png" />
        <meta property="og:title" content="میان" />
        <meta property="og:description" content="مدیریت آنلاین اقامتگاه" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="میان" />
        <meta property="og:url" content="https://miaan.ir/" />
        <meta property="og:image" content="https://rentamon-library.s3.ir-thr-at1.arvanstorage.ir/icon%2Fmiaan-icon-512.png" />
      </Head>

      <GlobalContextsProvider>
        <PageParamsProvider__
          route={useRouter()?.pathname}
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <PlasmicHomepage />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    </>
  );
}

export default Homepage;
