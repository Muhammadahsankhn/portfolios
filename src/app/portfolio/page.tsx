import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGallery from "./PortfolioGallery";

export const metadata: Metadata = {
  title: "Our Portfolio | DigiCareHouse",
  description: "Explore DigiCareHouse website design projects by category.",
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-page-header">
        <Link href="/" className="portfolio-brand" aria-label="DigiCareHouse home">
          <img src="/assets/images/logo/header-logo.png" alt="DigiCareHouse" />
        </Link>
        <Link href="/#contact" className="portfolio-contact-link">
          Start a Project
        </Link>
      </header>

      <section className="portfolio-hero">
        <p className="portfolio-eyebrow"><span /> Selected work</p>
        <h1>Digital experiences built<br />to make an impact.</h1>
        <p className="portfolio-intro">
          Browse our growing collection of websites across industries, styles, and business goals.
        </p>
      </section>

      <PortfolioGallery />
    </main>
  );
}
