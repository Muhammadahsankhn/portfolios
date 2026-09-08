import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligent Business Solutions — Full Website Preview",
  description: "Full-page website design preview for Intelligent Business Solutions.",
};

export default function IntelligentBusinessSolutionsPreview() {
  return (
    <main className="fullpage-project-preview">
      <img
        src="/assets/images/portfolio/01-fullpage.webp"
        alt="Full-page Intelligent Business Solutions website design"
      />
    </main>
  );
}
