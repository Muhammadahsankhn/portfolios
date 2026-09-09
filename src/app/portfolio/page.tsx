import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGallery from "./PortfolioGallery";

export const metadata: Metadata = {
  title: "Our Portfolio | DigiCareHouse",
  description: "Explore DigiCareHouse website design projects by category.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_88%_5%,rgba(103,222,194,0.13),transparent_24rem)] bg-[#f7f9f8] px-[5vw] pb-[100px] text-[#07111f] max-[767px]:px-5 max-[767px]:pb-[70px]">
      <header className="mx-auto flex min-h-[92px] max-w-[1440px] items-center justify-between border-b border-[#07111f1f] max-[767px]:min-h-[76px]">
        <Link href="/" aria-label="DigiCareHouse home">
          <img className="block h-[35px] w-auto max-[767px]:h-7" src="/assets/images/logo/header-logo.png" alt="DigiCareHouse" />
        </Link>
        <Link
          href="/#contact"
          className="rounded-[10px] bg-gradient-to-b from-[#087987] to-[#003b4c] px-5 py-3 text-sm font-semibold text-white no-underline transition-transform hover:-translate-y-px hover:text-white max-[767px]:px-3.5 max-[767px]:py-2.5"
        >
          Start a Project
        </Link>
      </header>

      <section className="mx-auto max-w-[1440px] py-[100px] max-[767px]:py-[70px_42px]">
        <p className="mb-[22px] flex items-center gap-[9px] text-[13px] font-bold uppercase tracking-[0.12em] text-[#006c78]">
          <span className="h-[9px] w-[9px] bg-[#006c78]" /> Selected work
        </p>
        <h1 className="m-0 max-w-[980px] text-[clamp(48px,6.2vw,92px)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#07111f] max-[767px]:text-[clamp(42px,13vw,64px)]">
          Digital experiences built<br />to make an impact.
        </h1>
        <p className="mt-8 max-w-[650px] text-lg leading-[1.65] text-[#667085] max-[767px]:mt-6 max-[767px]:text-base">
          Browse our growing collection of websites across industries, styles, and business goals.
        </p>
      </section>

      <PortfolioGallery />
    </main>
  );
}
