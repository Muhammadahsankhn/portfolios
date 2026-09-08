"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const categories = [
  "All",
  "Business",
  "Finance",
  "E-commerce",
  "Luxury",
  "Healthcare",
  "Education",
  "Real Estate",
  "Technology",
] as const;

type Category = (typeof categories)[number];

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  href?: string;
  keywords: string[];
};

// Add new portfolio thumbnails here as they are placed in /public/assets/images/working-process.
const projects: Project[] = [
  {
    title: "Intelligent Business Solutions",
    category: "Business",
    image: "/assets/images/working-process/01.jpg",
    href: "/works/intelligent-business-solutions",
    keywords: ["consulting", "corporate", "professional", "blue"],
  },
  {
    title: "Capitalink Advisory",
    category: "Finance",
    image: "/assets/images/working-process/02.jpg",
    keywords: ["capital", "advisory", "investment", "financial"],
  },
  {
    title: "Indiana Menswear",
    category: "E-commerce",
    image: "/assets/images/working-process/03.jpg",
    keywords: ["fashion", "store", "shopping", "menswear"],
  },
  {
    title: "LuxaWatch",
    category: "Luxury",
    image: "/assets/images/working-process/04.jpg",
    keywords: ["watch", "premium", "fashion", "retail"],
  },
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
