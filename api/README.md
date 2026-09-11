# DigiCareHouse contact API

Use this folder as the cPanel **Application Root** for a Node.js application.

1. Select Node.js 18 or newer and set `app.js` as the startup file.
2. Run `npm install` from cPanel.
3. Add the variables from `.env.example` in cPanel's environment-variable UI.
4. Set the Application URL so the endpoint is available at `/api/contact`, or use a separate API subdomain.
5. Restart the Node.js application.

If the API uses a separate domain, set `NEXT_PUBLIC_CONTACT_API_URL` to its full endpoint URL before building the website, for example:

```text
NEXT_PUBLIC_CONTACT_API_URL=https://api.example.com/api/contact
```

Then run `npm run build` in the main project and upload the generated `out` folder to the website document root.
