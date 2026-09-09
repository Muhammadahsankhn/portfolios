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
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
          throw new Error("The contact form is not configured yet.");
        }
        
        const formData = new FormData(form);
        formData.append("access_key", accessKey);
        formData.append("subject", "New DigiCareHouse Project Inquiry");
        formData.append("from_name", "DigiCareHouse Website");
        
        // Add CC emails to receive copies of the form submission
        formData.append("cc", "info@bitaccounting.com,susmani@bitaccounting.com,talha@bitaccounting.com,aman@bitaccounting.com,mhmaskari@bitaccounting.com");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const result = (await response.json()) as SubmissionResult;

        if (!response.ok || !result.success) {
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
