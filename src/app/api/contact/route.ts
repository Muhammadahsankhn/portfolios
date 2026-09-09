import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function POST(request: Request) {
  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "The contact form is not configured yet." },
      { status: 500 },
    );
  }

  try {
    const formData = await request.formData();
    formData.set("access_key", accessKey);
    formData.set("subject", "New DigiCareHouse Project Inquiry");
    formData.set("from_name", "DigiCareHouse Website");

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
      cache: "no-store",
    });
    const result = (await response.json()) as { success?: boolean; message?: string };

    return NextResponse.json(
      {
        success: response.ok && result.success === true,
        message:
          response.ok && result.success === true
            ? "Thanks! Your message has been sent successfully."
            : result.message || "We could not send your message. Please try again.",
      },
      { status: response.ok && result.success === true ? 200 : response.status || 500 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "We could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
