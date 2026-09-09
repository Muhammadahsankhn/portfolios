"use client";

import { useEffect } from "react";

export default function FaqAccordion() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      let target = event.target as Node | null;
      if (target?.nodeType === 3) {
        target = target.parentNode;
      }
      const element = target as Element | null;
      
      if (!element || typeof element.closest !== 'function') return;

      const button = element.closest<HTMLButtonElement>(
        ".wpr-faq-area .accordion-button[data-bs-target]"
      );

      if (!button) return;

      const selector = button.getAttribute("data-bs-target");
      if (!selector) return;

      // Handle both ID and class selectors
      let panel: HTMLElement | null = null;
      try {
        panel = document.querySelector<HTMLElement>(selector);
      } catch (e) {
        console.error("Invalid selector", selector);
      }
      
      const accordion = button.closest<HTMLElement>(".accordion-one") || button.closest<HTMLElement>(".accordion");

      if (!panel || !accordion) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      const shouldOpen = !panel.classList.contains("show");

      accordion.querySelectorAll<HTMLElement>(".accordion-collapse.show").forEach((openPanel) => {
        if (openPanel === panel) return;

        openPanel.classList.remove("show");
        const openButton = accordion.querySelector<HTMLButtonElement>(
          `[data-bs-target="#${openPanel.id}"]`
        );
        if (openButton) {
          openButton.classList.add("collapsed");
          openButton.setAttribute("aria-expanded", "false");
        }
      });

      if (shouldOpen) {
        panel.classList.add("show");
        button.classList.remove("collapsed");
        button.setAttribute("aria-expanded", "true");
      } else {
        panel.classList.remove("show");
        button.classList.add("collapsed");
        button.setAttribute("aria-expanded", "false");
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
