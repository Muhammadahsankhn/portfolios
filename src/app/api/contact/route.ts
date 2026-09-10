import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, category } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    // Create SMTP transporter for Microsoft 365
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.office365.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // use STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // All recipient emails
    const toEmails = [
      "info@bitaccounting.com",
      "susmani@bitaccounting.com",
      "talha@bitaccounting.com",
      "aman@bitaccounting.com",
      "mhmaskari@bitaccounting.com",
      "ahsankhan@bitaccounting.com",
    ];

    // Build email HTML
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #00e5a0; padding-bottom: 10px;">
          New DigiCareHouse Project Inquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5; width: 140px;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${category ? `<tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Category</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${category}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Message</td>
            <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="color: #888; font-size: 12px; margin-top: 20px;">
          This message was sent from the DigiCareHouse website contact form.
        </p>
      </div>
    `;

    // Send email to all recipients
    await transporter.sendMail({
      from: `"DigiCareHouse Website" <${process.env.SMTP_USER}>`,
      to: toEmails.join(", "),
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Thanks! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("[Contact API] Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "We could not send your message. Please try again later.",
      },
      { status: 500 },
    );
  }
}
