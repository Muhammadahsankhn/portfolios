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

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  href?: string;
  keywords: string[];
};

const thumbnail = (number: number) =>
  `/assets/images/working-process/${String(number).padStart(2, "0")}.jpg`;

const projects: Project[] = [
  {
    title: "Intelligent Business Solutions",
    category: "AI & Business Automation",
    image: thumbnail(1),
    href: "/works/intelligent-business-solutions",
    keywords: ["consulting", "corporate", "automation", "business"],
  },
  {
    title: "Capitalink Advisory",
    category: "Financial Services",
    image: thumbnail(2),
    keywords: ["capital", "advisory", "investment", "financial"],
  },
  {
    title: "Indiana Menswear",
    category: "E-commerce",
    image: thumbnail(3),
    keywords: ["fashion", "store", "shopping", "menswear"],
  },
  {
    title: "LuxaWatch",
    category: "E-commerce",
    image: thumbnail(4),
    keywords: ["watch", "premium", "fashion", "retail"],
  },
  { title: "Havenly Real Estate", category: "Real Estate", image: thumbnail(5), keywords: ["property", "homes", "luxury", "realtor"] },
  { title: "Lawfir Financial Law", category: "Financial Services", image: thumbnail(6), keywords: ["legal", "tax", "finance", "law"] },
  { title: "Havenly Properties", category: "Real Estate", image: thumbnail(7), keywords: ["property", "homes", "realtor"] },
  { title: "Keyville Real Estate", category: "Real Estate", image: thumbnail(8), keywords: ["property", "rentals", "sales", "investment"] },
  { title: "Synaptic AI Automation", category: "AI & Business Automation", image: thumbnail(9), keywords: ["ai", "workflow", "automation", "agents"] },
  { title: "Novaridge Realty", category: "Real Estate", image: thumbnail(10), keywords: ["property", "realtor", "commercial"] },
  { title: "Finance & Accounting Partner", category: "Financial Services", image: thumbnail(11), keywords: ["accounting", "finance", "business"] },
  { title: "Workflow Automation Platform", category: "AI & Business Automation", image: thumbnail(12), keywords: ["workflow", "automation", "teams", "ai"] },
  { title: "Housen Realty", category: "Real Estate", image: thumbnail(13), keywords: ["property", "homes", "realtor"] },
  { title: "Zenvault Financial", category: "Financial Services", image: thumbnail(14), keywords: ["fintech", "banking", "wealth", "ai"] },
  { title: "Aivora AI Platform", category: "AI & Business Automation", image: thumbnail(15), keywords: ["ai", "automation", "no code", "insights"] },
  { title: "Estara Properties", category: "Real Estate", image: thumbnail(16), keywords: ["property", "homes", "luxury", "realtor"] },
  { title: "Softluxe Business Software", category: "SaaS and Software", image: thumbnail(17), keywords: ["software", "crm", "business", "saas"] },
  { title: "Nekku Sneakers", category: "E-commerce", image: thumbnail(18), keywords: ["shoes", "fashion", "store", "shopping"] },
  { title: "Vestara Fashion", category: "E-commerce", image: thumbnail(19), keywords: ["fashion", "clothing", "store", "shopping"] },
  { title: "Aurele Jewelry", category: "E-commerce", image: thumbnail(20), keywords: ["jewelry", "luxury", "rings", "store"] },
  { title: "Synaptic AI Systems", category: "AI & Business Automation", image: thumbnail(21), keywords: ["ai", "workflow", "automation", "agents"] },
  { title: "Classmont Academy", category: "Education & E-Learning", image: thumbnail(22), keywords: ["academy", "courses", "students", "learning"] },
  { title: "Giant Accounting", category: "Financial Services", image: thumbnail(23), keywords: ["accounting", "bookkeeping", "small business"] },
  { title: "Clandestine Healthcare", category: "Healthcare", image: thumbnail(24), keywords: ["hospital", "doctor", "patient", "medical"] },
  { title: "Horizon High School", category: "Education & E-Learning", image: thumbnail(25), keywords: ["school", "students", "academy", "education"] },
  { title: "Flowbase Project Management", category: "SaaS and Software", image: thumbnail(26), keywords: ["saas", "software", "projects", "teams"] },
  { title: "Dime Medical Care", category: "Healthcare", image: thumbnail(27), keywords: ["hospital", "cardiology", "medical", "family"] },
  { title: "DoctorPro", category: "Healthcare", image: thumbnail(28), keywords: ["doctor", "appointment", "family medicine"] },
  { title: "Edulift Learning", category: "Education & E-Learning", image: thumbnail(29), keywords: ["education", "library", "online study"] },
  { title: "Fabels Financial Advisory", category: "Financial Services", image: thumbnail(30), keywords: ["finance", "wealth", "advisor", "investment"] },
  { title: "Care Telemedicine", category: "Healthcare", image: thumbnail(31), keywords: ["telemedicine", "medical", "doctors", "care"] },
  { title: "Health & Fitness Coaching", category: "Healthcare", image: thumbnail(32), keywords: ["fitness", "coaching", "wellness", "training"] },
  { title: "Learnly AI Education", category: "Education & E-Learning", image: thumbnail(33), keywords: ["ai", "learning", "study", "education"] },
  { title: "Learnova E-Courses", category: "Education & E-Learning", image: thumbnail(34), keywords: ["courses", "online", "learning", "students"] },
  { title: "Cybrexis Security", category: "Cybersecurity", image: thumbnail(35), keywords: ["security", "threat detection", "enterprise", "ai"] },
  { title: "Defeny Cybersecurity", category: "Cybersecurity", image: thumbnail(36), keywords: ["security", "protection", "cloud", "network"] },
  { title: "Securo Enterprise Security", category: "Cybersecurity", image: thumbnail(37), keywords: ["cyber protection", "security", "encryption"] },
  { title: "Cryptara Security", category: "Cybersecurity", image: thumbnail(38), keywords: ["security", "digital", "data", "cyberattacks"] },
  { title: "Cybersecurity Defense", category: "Cybersecurity", image: thumbnail(39), keywords: ["managed security", "defense", "threat", "cyber"] },
];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const searchableText = [project.title, project.category, ...project.keywords]
        .join(" ")
        .toLowerCase();
      const matchesSearch = !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  return (
    <section className="portfolio-browser" aria-label="Project gallery">
      <div className="portfolio-tools">
        <div className="portfolio-search">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="21" height="21">
            <circle cx="11" cy="11" r="7" />
            <path d="m16.2 16.2 4.3 4.3" />
          </svg>
          <label className="sr-only" htmlFor="portfolio-search">Search projects</label>
          <input
            id="portfolio-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by project, industry, or style..."
          />
        </div>

        <div className="portfolio-categories" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-results-heading" aria-live="polite">
        <p>{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}</p>
        <span>{activeCategory === "All" ? "All categories" : activeCategory}</span>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => {
            const card = (
              <>
                <div className="portfolio-card-image">
                  <Image
                    src={project.image}
                    alt={`${project.title} website mockup`}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  <span className="portfolio-card-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="portfolio-card-content">
                  <p>{project.category}</p>
                  <h2>{project.title}</h2>
                </div>
              </>
            );

            return project.href ? (
              <Link key={project.title} href={project.href} target="_blank" className="portfolio-card">
                {card}
              </Link>
            ) : (
              <article key={project.title} className="portfolio-card portfolio-card-static">
                {card}
              </article>
            );
          })}
        </div>
      ) : (
        <div className="portfolio-empty">
          <span aria-hidden="true">⌕</span>
          <h2>No matching projects</h2>
          <p>Try another search term or choose a different category.</p>
          <button type="button" onClick={() => { setQuery(""); setActiveCategory("All"); }}>
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
