// pages/_app.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { AppProps } from 'next/app'; // Import AppProps for typing

const GA_MEASUREMENT_ID = 'G-3N4CYNHCC4'; // Replace with your Google Analytics Measurement ID

function MyApp({ Component, pageProps }: AppProps) {  // Explicitly type Component and pageProps
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {  // Type 'url' as a string
      if (window.gtag) {  // Ensure gtag exists on window object
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
