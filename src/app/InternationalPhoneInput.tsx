"use client";

import { useEffect } from "react";

type PhoneInputInstance = {
  destroy: () => void;
  getSelectedCountry: () => { dialCode?: string };
};

export default function InternationalPhoneInput() {
  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>("#contact-number");
    if (!input) return;

    let active = true;
    let phoneInput: PhoneInputInstance | undefined;

    const initialize = async () => {
      const { default: intlTelInput } = await import("intl-tel-input");
      if (!active) return;

      phoneInput = intlTelInput(input, {
        initialCountry: "us",
        separateDialCode: true,
        countrySearch: true,
        dropdownParent: document.body,
      }) as PhoneInputInstance;

      const updateCallingCode = () => {
        const dialCode = phoneInput?.getSelectedCountry().dialCode;
        input.dataset.countryCode = dialCode ? `+${dialCode}` : "";
      };

      input.addEventListener("countrychange", updateCallingCode);
      updateCallingCode();

      input.dataset.phoneInputReady = "true";
      input.addEventListener("iti:destroy", () => {
        input.removeEventListener("countrychange", updateCallingCode);
      }, { once: true });
    };

    void initialize();

    return () => {
      active = false;
      input.dispatchEvent(new Event("iti:destroy"));
      phoneInput?.destroy();
    };
  }, []);

  return null;
}
