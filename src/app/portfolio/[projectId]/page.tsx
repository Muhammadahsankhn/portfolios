import type { Metadata } from "next";
import { notFound } from "next/navigation";

const projectNumbers = Array.from({ length: 43 }, (_, index) => index + 1)
  .filter((number) => ![5, 9, 23].includes(number));

export function generateStaticParams() {
  return projectNumbers.map((number) => ({
    projectId: String(number).padStart(2, "0"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  const { projectId } = await params;

  return {
    title: `Project ${projectId} — Full Website Preview`,
    description: `Full-page website design preview for portfolio project ${projectId}.`,
  };
}

export default async function PortfolioProjectPreview({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const number = Number(projectId);

  if (!/^\d{2}$/.test(projectId) || !projectNumbers.includes(number)) {
    notFound();
  }

  return (
    <main className="m-0 min-h-screen w-full bg-[#f7f7f7] p-0">
      <img
        className="m-0 block h-auto w-full"
        src={`/assets/images/portfolio/${projectId}-fullpage.webp`}
        alt={`Full-page website design for portfolio project ${projectId}`}
      />
    </main>
  );
}
