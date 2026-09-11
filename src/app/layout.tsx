import type { Metadata, Viewport } from "next";
import Script from "next/script";
import FaqAccordion from "./FaqAccordion";
import Web3FormsContact from "./Web3FormsContact";
import InternationalPhoneInput from "./InternationalPhoneInput";
import "intl-tel-input/styles";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DigiCareHouse | Digital Products, Branding & Marketing",
    template: "%s | DigiCareHouse",
  },
  description: "DigiCareHouse creates high-impact websites, mobile applications, software, branding, video, ecommerce, and AI automation solutions.",
  applicationName: "DigiCareHouse",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#005D74",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/fav.png" />
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
      <body className="home-bg main-home onepage overflow-x-visible" suppressHydrationWarning>
        <a className="skip-to-content" href="#site-content">Skip to main content</a>
        <div id="site-content">{children}</div>
        <a
          className="whatsapp-float"
          href="https://wa.me/18483843773"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with DigiCareHouse on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp" aria-hidden="true" />
        </a>
        <FaqAccordion />
        <InternationalPhoneInput />
        <Web3FormsContact />

        {/* jquery js */}
        <Script src="/assets/js/plugins/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/metismenu.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/jqueryui.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/waypoint.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/swiper.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins/scrolltigger.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins/smoothscroll.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/split-text.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vendor/split-type.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/wow.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/text-plugin.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/odometer.js" strategy="lazyOnload" />
        {/* contact form handled by Web3FormsContact component */}
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
