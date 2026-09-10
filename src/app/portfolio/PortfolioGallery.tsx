"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const categories = [
  "All",
  "AI & Business Automation",
  "Healthcare",
  "Real Estate",
  "Financial Services",
  "Cybersecurity",
  "E-commerce",
  "Education & E-Learning",
  "SaaS and Software",
] as const;

type Category = (typeof categories)[number];
type Layout = "grid" | "compact" | "list";

type Project = {
  number: number;
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  keywords: string[];
};

const categorySearchTerms: Record<Exclude<Category, "All">, string[]> = {
  "AI & Business Automation": ["artificial intelligence", "machine learning", "workflow", "business automation"],
  Healthcare: ["health", "medical", "clinic", "doctor", "wellness"],
  "Real Estate": ["property", "properties", "realty", "homes", "realtor"],
  "Financial Services": ["finance", "financial", "fintech", "banking", "accounting", "investment"],
  Cybersecurity: ["cyber", "security", "data protection", "network"],
  "E-commerce": ["ecommerce", "online store", "shopping", "retail", "products"],
  "Education & E-Learning": ["education", "elearning", "online learning", "school", "academy", "courses"],
  "SaaS and Software": ["saas", "software", "platform", "application", "app"],
};

const thumbnail = (number: number) =>
  `/assets/images/working-process/${String(number).padStart(2, "0")}.jpg`;

const galleryLayoutClasses: Record<Layout, string> = {
  grid: "grid-cols-1 gap-[38px] min-[768px]:grid-cols-2 min-[768px]:gap-x-7 min-[768px]:gap-y-12",
  compact: "grid-cols-2 gap-x-3.5 gap-y-7 min-[768px]:grid-cols-3 min-[768px]:gap-x-5 min-[768px]:gap-y-[34px]",
  list: "grid-cols-1 gap-5",
};

const projects: Project[] = [
  {
    number: 1,
    title: "Intelligent Business Solutions",
    category: "Financial Services",
    image: thumbnail(1),
    keywords: ["consulting", "corporate", "automation", "business"],
  },
  {
    number: 2,
    title: "Capitalink Advisory",
    category: "Financial Services",
    image: thumbnail(2),
    keywords: ["capital", "advisory", "investment", "financial"],
  },
  {
    number: 3,
    title: "Indiana Menswear",
    category: "E-commerce",
    image: thumbnail(3),
    keywords: ["fashion", "store", "shopping", "menswear"],
  },
  {
    number: 4,
    title: "LuxaWatch",
    category: "E-commerce",
    image: thumbnail(4),
    keywords: ["watch", "premium", "fashion", "retail"],
  },
  { number: 6, title: "Lawfir Financial Law", category: "Financial Services", image: thumbnail(6), keywords: ["legal", "tax", "finance", "law"] },
  { number: 7, title: "Havenly Properties", category: "Real Estate", image: thumbnail(7), keywords: ["property", "homes", "realtor"] },
  { number: 8, title: "Keyville Real Estate", category: "Real Estate", image: thumbnail(8), keywords: ["property", "rentals", "sales", "investment"] },
  { number: 10, title: "Novaridge Realty", category: "Real Estate", image: thumbnail(10), keywords: ["property", "realtor", "commercial"] },
  { number: 11, title: "Finance & Accounting Partner", category: "Financial Services", image: thumbnail(11), keywords: ["accounting", "finance", "business"] },
  { number: 12, title: "Workflow Automation Platform", category: "SaaS and Software", image: thumbnail(12), keywords: ["workflow", "automation", "teams", "ai", "saas", "software"] },
  { number: 13, title: "Housen Realty", category: "Real Estate", image: thumbnail(13), keywords: ["property", "homes", "realtor"] },
  { number: 14, title: "Zenvault Financial", category: "SaaS and Software", image: thumbnail(14), keywords: ["fintech", "banking", "wealth", "ai", "saas", "software"] },
  { number: 15, title: "Aivora AI Platform", category: "SaaS and Software", image: thumbnail(15), keywords: ["ai", "automation", "no code", "insights", "saas", "software"] },
  { number: 16, title: "Estara Properties", category: "Real Estate", image: thumbnail(16), keywords: ["property", "homes", "luxury", "realtor"] },
  { number: 17, title: "Softluxe Business Software", category: "SaaS and Software", image: thumbnail(17), keywords: ["software", "crm", "business", "saas"] },
  { number: 18, title: "Nekku Sneakers", category: "E-commerce", image: thumbnail(18), keywords: ["shoes", "fashion", "store", "shopping"] },
  { number: 19, title: "Vestara Fashion", category: "E-commerce", image: thumbnail(19), keywords: ["fashion", "clothing", "store", "shopping"] },
  { number: 20, title: "Aurele Jewelry", category: "E-commerce", image: thumbnail(20), keywords: ["jewelry", "luxury", "rings", "store"] },
  { number: 21, title: "Synaptic AI Systems", category: "AI & Business Automation", image: thumbnail(21), keywords: ["ai", "workflow", "automation", "agents"] },
  { number: 22, title: "Classmont Academy", category: "Education & E-Learning", image: thumbnail(22), keywords: ["academy", "courses", "students", "learning"] },
  { number: 24, title: "Clandestine Healthcare", category: "Healthcare", image: thumbnail(24), keywords: ["hospital", "doctor", "patient", "medical"] },
  { number: 25, title: "Horizon High School", category: "Education & E-Learning", image: thumbnail(25), keywords: ["school", "students", "academy", "education"] },
  { number: 26, title: "Flowbase Project Management", category: "SaaS and Software", image: thumbnail(26), keywords: ["saas", "software", "projects", "teams"] },
  { number: 27, title: "Dime Medical Care", category: "Healthcare", image: thumbnail(27), keywords: ["hospital", "cardiology", "medical", "family"] },
  { number: 28, title: "DoctorPro", category: "Healthcare", image: thumbnail(28), keywords: ["doctor", "appointment", "family medicine"] },
  { number: 29, title: "Edulift Learning", category: "Education & E-Learning", image: thumbnail(29), keywords: ["education", "library", "online study"] },
  { number: 30, title: "Fabels Financial Advisory", category: "Financial Services", image: thumbnail(30), keywords: ["finance", "wealth", "advisor", "investment"] },
  { number: 31, title: "Care Telemedicine", category: "Healthcare", image: thumbnail(31), keywords: ["telemedicine", "medical", "doctors", "care"] },
  { number: 32, title: "Health & Fitness Coaching", category: "Healthcare", image: thumbnail(32), keywords: ["fitness", "coaching", "wellness", "training"] },
  { number: 33, title: "Learnly AI Education", category: "Education & E-Learning", image: thumbnail(33), keywords: ["ai", "learning", "study", "education"] },
  { number: 34, title: "Learnova E-Courses", category: "Education & E-Learning", image: thumbnail(34), keywords: ["courses", "online", "learning", "students"] },
  { number: 35, title: "Cybrexis Security", category: "Cybersecurity", image: thumbnail(35), keywords: ["security", "threat detection", "enterprise", "ai"] },
  { number: 36, title: "Defeny Cybersecurity", category: "Cybersecurity", image: thumbnail(36), keywords: ["security", "protection", "cloud", "network"] },
  { number: 37, title: "Securo Enterprise Security", category: "Cybersecurity", image: thumbnail(37), keywords: ["cyber protection", "security", "encryption"] },
  { number: 38, title: "Cryptara Security", category: "Cybersecurity", image: thumbnail(38), keywords: ["security", "digital", "data", "cyberattacks"] },
  { number: 39, title: "Cybersecurity Defense", category: "Cybersecurity", image: thumbnail(39), keywords: ["managed security", "defense", "threat", "cyber"] },
  { number: 40, title: "AI Task Automation", category: "AI & Business Automation", image: thumbnail(40), keywords: ["ai", "tasks", "workflow", "automation"] },
  { number: 41, title: "Nexora AI Tools", category: "AI & Business Automation", image: thumbnail(41), keywords: ["ai", "tools", "teams", "analytics"] },
  { number: 42, title: "Neuralia AI Support", category: "AI & Business Automation", image: thumbnail(42), keywords: ["ai", "chatbot", "customer support", "automation"] },
  { number: 43, title: "Arcane AI Platform", category: "AI & Business Automation", image: thumbnail(43), keywords: ["ai", "platform", "automation", "technology"] },
];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");
  const [layout, setLayout] = useState<Layout>("compact");

  const layoutButtonClass = (buttonLayout: Layout) =>
    `grid h-[34px] w-[38px] cursor-pointer place-items-center rounded-[7px] border-0 p-2 transition-colors ${
      layout === buttonLayout
        ? "bg-[#07111f] text-white"
        : "bg-transparent text-[#667085] hover:bg-[#07111f] hover:text-white"
    }`;

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const projectId = String(project.number).padStart(2, "0");
      const searchableText = [
        project.title,
        project.category,
        ...project.keywords,
        ...categorySearchTerms[project.category],
        projectId,
        `project ${project.number}`,
        `portfolio ${project.number}`,
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch = searchTerms.length === 0 || searchTerms.every((term) => searchableText.includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  return (
    <section className="mx-auto max-w-[1440px]" aria-label="Project gallery">
      <div className="sticky top-0 z-10 -mx-[18px] border-b border-[#07111f14] bg-[#f7f9f8f0] p-[18px] shadow-[0_12px_24px_rgba(7,17,31,0.04)] backdrop-blur-[14px] max-[767px]:-mx-2.5 max-[767px]:p-2.5">
        <div className="relative mb-[18px] max-[767px]:mb-2.5">
          <svg className="absolute left-5 top-1/2 -translate-y-1/2 fill-none stroke-[#52606d] stroke-[1.8]" aria-hidden="true" viewBox="0 0 24 24" width="21" height="21">
            <circle cx="11" cy="11" r="7" />
            <path d="m16.2 16.2 4.3 4.3" />
          </svg>
          <label className="sr-only" htmlFor="portfolio-search">Search projects</label>
          <input
            className="portfolio-search-input h-[60px] w-full max-w-none rounded-[14px] border border-[#07111f24] bg-white py-0 pl-14 pr-5 text-[#07111f] shadow-[0_10px_35px_rgba(7,17,31,0.04)] outline-none focus:border-[#006c78] focus:shadow-[0_0_0_4px_rgba(0,108,120,0.1)] max-[767px]:h-[54px]"
            id="portfolio-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by project, industry, or style..."
          />
        </div>

        <div className="hidden flex-wrap justify-center gap-[9px] min-[768px]:flex" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`portfolio-category-button w-auto max-w-none flex-none cursor-pointer rounded-full border px-5 py-3 text-base font-bold transition-colors ${
                activeCategory === category
                  ? "is-active"
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="min-[768px]:hidden">
          <label className="mb-1.5 block text-xs font-bold text-[#667085]" htmlFor="portfolio-category">Project category</label>
          <select
            className="portfolio-category-select h-12 w-full max-w-none rounded-xl border border-[#07111f24] bg-white py-0 pl-[15px] pr-[42px] text-[#07111f]"
            id="portfolio-category"
            value={activeCategory}
            onChange={(event) => setActiveCategory(event.target.value as Category)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="my-[34px] mb-5 flex items-center justify-between max-[767px]:items-end" aria-live="polite">
        <p className="m-0 text-sm font-bold text-[#07111f]">{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}</p>
        <div className="flex items-center gap-[18px] max-[767px]:flex-col max-[767px]:items-end max-[767px]:gap-2">
          <span className="portfolio-current-category m-0 text-[#667085]">{activeCategory === "All" ? "All categories" : activeCategory}</span>
          <div className="flex gap-[3px] rounded-[10px] border border-[#07111f1f] bg-white p-1" role="group" aria-label="Choose portfolio layout">
            <button
              type="button"
              className={layoutButtonClass("compact")}
              onClick={() => setLayout("compact")}
              aria-label="Compact grid"
              aria-pressed={layout === "compact"}
              title="Compact grid"
            >
              <svg className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.5]" aria-hidden="true" viewBox="0 0 20 20"><rect x="1.5" y="2" width="4" height="6" rx=".7" /><rect x="8" y="2" width="4" height="6" rx=".7" /><rect x="14.5" y="2" width="4" height="6" rx=".7" /><rect x="1.5" y="12" width="4" height="6" rx=".7" /><rect x="8" y="12" width="4" height="6" rx=".7" /><rect x="14.5" y="12" width="4" height="6" rx=".7" /></svg>
            </button>
            <button
              type="button"
              className={layoutButtonClass("grid")}
              onClick={() => setLayout("grid")}
              aria-label="Comfortable grid"
              aria-pressed={layout === "grid"}
              title="Comfortable grid"
            >
              <svg className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.5]" aria-hidden="true" viewBox="0 0 20 20"><rect x="2" y="2" width="6" height="6" rx="1" /><rect x="12" y="2" width="6" height="6" rx="1" /><rect x="2" y="12" width="6" height="6" rx="1" /><rect x="12" y="12" width="6" height="6" rx="1" /></svg>
            </button>
            <button
              type="button"
              className={layoutButtonClass("list")}
              onClick={() => setLayout("list")}
              aria-label="List view"
              aria-pressed={layout === "list"}
              title="List view"
            >
              <svg className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.5]" aria-hidden="true" viewBox="0 0 20 20"><rect x="2" y="3" width="5" height="5" rx="1" /><path d="M10 5.5h8M10 14.5h8" /><rect x="2" y="12" width="5" height="5" rx="1" /></svg>
            </button>
          </div>
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className={`grid ${galleryLayoutClasses[layout]}`}>
          {filteredProjects.map((project, index) => {
            const isList = layout === "list";
            const card = (
              <>
                <div className={`relative aspect-square w-full overflow-hidden bg-[#eef1f0] ${isList ? "rounded-none" : "rounded-[18px] max-[767px]:rounded-[13px]"}`}>
                  <Image
                    className="portfolio-thumbnail object-contain"
                    src={project.image}
                    alt={`${project.title} website mockup`}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  <span className="absolute right-[18px] top-[18px] grid h-12 w-12 place-items-center rounded-full bg-[#07111fd1] text-[22px] leading-none text-white backdrop-blur-[10px]" aria-hidden="true">↗</span>
                </div>
                <div className={isList ? "p-[28px_36px] max-[767px]:p-[18px]" : "p-[20px_3px_0]"}>
                  <p className="portfolio-project-category mb-[7px] font-bold uppercase tracking-[0.1em] text-[#006c78]">{project.category}</p>
                  <h2 className={`m-0 font-semibold tracking-[-0.035em] text-[#07111f] ${
                    layout === "compact"
                      ? "text-[clamp(19px,1.7vw,26px)]"
                      : isList
                        ? "text-[clamp(23px,2.2vw,34px)] max-[767px]:text-[clamp(18px,5vw,24px)]"
                        : "text-[clamp(23px,2.2vw,34px)]"
                  }`}>{project.title}</h2>
                </div>
              </>
            );

            return (
              <Link
                key={project.number}
                href={`/portfolio/${String(project.number).padStart(2, "0")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`portfolio-project-card group min-w-0 text-[#07111f] no-underline ${
                  isList
                    ? "grid grid-cols-[42%_1fr] items-center overflow-hidden rounded-[13px] border border-[#07111f1a] bg-white min-[768px]:grid-cols-[minmax(220px,32%)_1fr] min-[768px]:rounded-[18px]"
                    : "block"
                }`}
                aria-label={`Open the full-page preview for ${project.title}`}
              >
                {card}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-[20px] border border-dashed border-[#07111f2e] bg-white/60 px-5 py-[90px] text-center">
          <span className="text-[52px] text-[#667085]" aria-hidden="true">⌕</span>
          <h2 className="mb-1.5 mt-3 text-[#07111f]">No matching projects</h2>
          <p className="mb-[22px] text-[#667085]">Try another search term or choose a different category.</p>
          <button className="cursor-pointer rounded-[9px] border-0 bg-[#07111f] px-[18px] py-2.5 text-white" type="button" onClick={() => { setQuery(""); setActiveCategory("All"); }}>
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
