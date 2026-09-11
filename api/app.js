"use strict";

const http = require("node:http");
const nodemailer = require("nodemailer");

const port = Number(process.env.PORT) || 3001;
const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  });
  response.end(JSON.stringify(payload));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) request.destroy();
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

const server = http.createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.method !== "POST" || !["/api/contact", "/contact"].includes(request.url)) {
    sendJson(response, 404, { success: false, message: "Not found." });
    return;
  }

  try {
    const body = await readJson(request);
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const contactNumber = String(body.contactNumber || "").trim();
    const category = String(body.category || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !contactNumber || !category || !message) {
      sendJson(response, 400, { success: false, message: "Please fill in all required fields." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      sendJson(response, 400, { success: false, message: "Please enter a valid email address." });
      return;
    }

    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const recipients = (process.env.CONTACT_RECIPIENTS || "info@digicarehouse.com")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"DigiCareHouse Website" <${process.env.SMTP_USER}>`,
      to: recipients,
      replyTo: email,
      subject: "Marketing website Inquiry Form",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto">
          <h2 style="color:#005d74">Marketing website Inquiry Form</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><th style="padding:10px;border:1px solid #ddd;text-align:left">Name</th><td style="padding:10px;border:1px solid #ddd">${escapeHtml(name)}</td></tr>
            <tr><th style="padding:10px;border:1px solid #ddd;text-align:left">Email</th><td style="padding:10px;border:1px solid #ddd">${escapeHtml(email)}</td></tr>
            <tr><th style="padding:10px;border:1px solid #ddd;text-align:left">Contact Number</th><td style="padding:10px;border:1px solid #ddd">${escapeHtml(contactNumber)}</td></tr>
            <tr><th style="padding:10px;border:1px solid #ddd;text-align:left">Category</th><td style="padding:10px;border:1px solid #ddd">${escapeHtml(category)}</td></tr>
            <tr><th style="padding:10px;border:1px solid #ddd;text-align:left">Message</th><td style="padding:10px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(message)}</td></tr>
          </table>
        </div>`,
    });

    sendJson(response, 200, { success: true, message: "Thanks! Your message has been sent successfully." });
  } catch (error) {
    console.error("[contact-api]", error);
    sendJson(response, 500, { success: false, message: "We could not send your message. Please try again later." });
  }
});

server.listen(port, () => {
  console.log(`Contact API listening on port ${port}`);
});
