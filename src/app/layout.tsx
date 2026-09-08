import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "DigiCareHouse Agency HTML Template (Next.js)",
  description: "Your Ultimate Solution for Creative Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/fav.svg" />
        {/* swiper css */}
        <link rel="preload" href="/assets/css/plugins/swiper.min.css" as="style" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
        {/* metismenu css */}
        <link rel="preload" href="/assets/css/plugins/metismenu.css" as="style" />
        <link rel="stylesheet" href="/assets/css/plugins/metismenu.css" />
        {/* bootstrap css */}
        <link rel="preload" href="/assets/css/vendor/bootstrap.min.css" as="style" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="preload" href="/assets/css/vendor/animate.css" as="style" />
        <link rel="stylesheet" href="/assets/css/vendor/animate.css" />
        {/* odometer css */}
        <link rel="preload" href="/assets/css/plugins/odometer.css" as="style" />
        <link rel="stylesheet" href="/assets/css/plugins/odometer.css" />
        {/* fontawesome css */}
        <link rel="preload" href="/assets/css/plugins/fontawesome.min.css" as="style" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.min.css" />
        {/* Custom css */}
        <link rel="preload" href="/assets/css/style.css" as="style" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className="home-bg main-home onepage overflow-x-visible">
        {children}

        {/* jquery js */}
        <Script src="/assets/js/plugins/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/metismenu.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/jqueryui.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/waypoint.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/swiper.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/gsap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/scrolltigger.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/smoothscroll.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/split-text.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/split-type.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/wow.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/text-plugin.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/odometer.js" strategy="lazyOnload" />
        {/* contact form js */}
        <Script src="/assets/js/plugins/contact-form.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
