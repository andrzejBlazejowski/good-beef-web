"use client";

import Script from "next/script";
import { useState } from "react";

const LANDING_JS = [
  "/landing/assets/js/jquery.js",
  "/landing/assets/js/aos.js",
  "/landing/assets/js/appear.js",
  "/landing/assets/js/bootstrap.bundle.min.js",
  "/landing/assets/js/bootstrap-select.min.js",
  "/landing/assets/js/isotope.js",
  "/landing/assets/js/jquery.bxslider.min.js",
  "/landing/assets/js/jquery.countdown.min.js",
  "/landing/assets/js/jquery.countTo.js",
  "/landing/assets/js/jquery.easing.min.js",
  "/landing/assets/js/jquery.enllax.min.js",
  "/landing/assets/js/jquery.fancybox.js",
  "/landing/assets/js/jquery.magnific-popup.min.js",
  "/landing/assets/js/jquery.paroller.min.js",
  "/landing/assets/js/jquery.polyglot.language.switcher.js",
  "/landing/assets/js/jQuery.style.switcher.min.js",
  "/landing/assets/js/jquery-ui.js",
  "/landing/assets/js/knob.js",
  "/landing/assets/js/map-script.js",
  "/landing/assets/js/owl.js",
  "/landing/assets/js/pagenav.js",
  "/landing/assets/js/parallax.min.js",
  "/landing/assets/js/scrollbar.js",
  "/landing/assets/js/slick.js",
  "/landing/assets/js/timePicker.js",
  "/landing/assets/js/validation.js",
  "/landing/assets/js/wow.js",
  "/landing/assets/js/TweenMax.min.js",
  "/landing/assets/js/custom.js",
] as const;

type Props = {
  googleAnalyticsId?: string | null;
};

export function LandingScripts({ googleAnalyticsId }: Props) {
  const [scriptIndex, setScriptIndex] = useState(0);

  return (
    <>
      {googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `}
          </Script>
        </>
      )}
      {scriptIndex < LANDING_JS.length && (
        <Script
          key={LANDING_JS[scriptIndex]}
          src={LANDING_JS[scriptIndex]}
          strategy="afterInteractive"
          onLoad={() => setScriptIndex((i) => i + 1)}
        />
      )}
    </>
  );
}
