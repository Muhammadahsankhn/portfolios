"use client";

import { useEffect } from "react";

type SubmissionResult = {
  success?: boolean;
  message?: string;
};

export default function Web3FormsContact() {
  useEffect(() => {
    const handleSubmit = async (event: SubmitEvent) => {
      const form = event.target;

      if (!(form instanceof HTMLFormElement) || form.id !== "contact-form") return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const message = form.querySelector<HTMLElement>("#form-messages");
      const originalButtonText = button?.textContent || "Submit Message";

      if (button) {
        button.disabled = true;
        button.textContent = "Sending...";
      }
      if (message) {
        message.className = "contact-form-message";
        message.textContent = "";
      }

      try {
        const formData = new FormData(form);
        formData.append("_subject", "New DigiCareHouse Project Inquiry");
        formData.append("_template", "table");
        formData.append("_captcha", "false");
        formData.append(
          "_cc",
          "susmani@bitaccounting.com,talha@bitaccounting.com,aman@bitaccounting.com,mhmaskari@bitaccounting.com",
        );

        const response = await fetch("https://formsubmit.co/ajax/info@bitaccounting.com", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        const result = (await response.json()) as SubmissionResult;

        if (!response.ok || result.success === false) {
          throw new Error(result.message || "We could not send your message. Please try again.");
        }

        form.reset();
        if (message) {
          message.classList.add("is-success");
          message.textContent = result.message || "Thanks! Your message has been sent successfully.";
        }
      } catch (error) {
        if (message) {
          message.classList.add("is-error");
          message.textContent =
            error instanceof Error ? error.message : "We could not send your message. Please try again.";
        }
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = originalButtonText;
        }
      }
    };

    document.addEventListener("submit", handleSubmit, true);
    return () => document.removeEventListener("submit", handleSubmit, true);
  }, []);

  return null;
}
