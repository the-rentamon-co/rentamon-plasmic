import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/todo_mvc_app/PlasmicGlobalContextsProvider";
import { PlasmicHomePage } from "../../components/plasmic/liom_hamyar/PlasmicHomePage";
import { useRouter } from "next/router";
import Head from "next/head";

function usePWAStatus() {
  const [pwaStatus, setPwaStatus] = React.useState<'installed' | 'browser'>('browser');

  React.useEffect(() => {
    // بررسی وجود window برای جلوگیری از خطا در سمت سرور
    if (typeof window !== 'undefined') {
      const isStandalone = 
        ('standalone' in window.navigator && window.navigator['standalone']) ||
        window.matchMedia('(display-mode: standalone)').matches;
      
      setPwaStatus(isStandalone ? 'installed' : 'browser');
    }
  }, []);

  return pwaStatus;
}

function HomePage() {
  const router = useRouter();
  const pwaStatus = usePWAStatus();

  return (
    <>
      <Head>
        <title>رنتامون - مدیریت اقامتگاه</title>
        <meta name="description" content="برنامه مدیریت اقامتگاه" />
        <meta name="application-name" content="رنتامون" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="رنتامون" />
        <meta name="theme-color" content="#7444BC" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta property="og:title" content="رنتامون" />
        <meta property="og:description" content="مدیریت اقامتگاه" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://app.rentamon.com/" />
        <meta property="og:image" content="/icons/icon-512x512.png" />
      </Head>

      <GlobalContextsProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicHomePage>
          {/* محتوای slot برای نمایش وضعیت PWA */}
          <div className="pwa-status" style={{ display: 'none' }}>
            {pwaStatus}
          </div>
        </PlasmicHomePage>
      </PageParamsProvider__>
    </GlobalContextsProvider>
    </>
  );
}

export default HomePage;
