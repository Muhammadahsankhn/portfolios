import { NextResponse } from "next/server";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/info@bitaccounting.com";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    formData.set("_subject", "New DigiCareHouse Project Inquiry");
    formData.set("_template", "table");
    formData.set("_captcha", "false");
    formData.set(
      "_cc",
      "susmani@bitaccounting.com,talha@bitaccounting.com,aman@bitaccounting.com,mhmaskari@bitaccounting.com",
    );

    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    const result = (await response.json()) as { success?: boolean | string; message?: string };
    const succeeded = response.ok && result.success !== false;

    return NextResponse.json(
      {
        success: succeeded,
        message:
          succeeded
            ? "Thanks! Your message has been sent successfully."
            : result.message || "We could not send your message. Please try again.",
      },
      { status: succeeded ? 200 : response.status || 500 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "We could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
