Black Studios Website Documentation
==================================

1. Replacing Placeholder Media
-----------------------------
- All images and video are referenced via external URLs (e.g., Cloudinary, S3, or demo links).
- To replace an image or video:
  a. Upload your media to a reliable CDN (Cloudinary, S3, etc.).
  b. In index.html, search for the relevant <img> or <video> tag (look for src attributes).
  c. Replace the src URL with your new media link.
- Ensure images are in WebP format (max width 1920px) for best performance.
- Compress videos before uploading for faster load times.

2. Updating Contact Information
------------------------------
- Contact details are in the Contact section of index.html.
- To update phone, email, Instagram, or TikTok:
  a. Search for the relevant text (e.g., '+1 234 567 890', 'info@blackstudios.com').
  b. Replace with your new contact info.
- Update both the visible text and the href (e.g., 'tel:', 'mailto:', or social links).

3. Switching Form Backend (Formspree to Netlify Functions)
----------------------------------------------------------
- By default, the contact form submits to Formspree (see the form action attribute in index.html).
- To use Netlify Functions instead:
  a. Create a Netlify Function (e.g., send-email.js) to handle POST requests and send emails.
  b. Deploy your function to your Netlify site.
  c. Change the form action in index.html to "/.netlify/functions/send-email" (or your function's endpoint).
  d. Ensure CORS and security settings are correct.
- As a fallback, you can use a mailto: link by replacing the form with a mailto anchor.

4. General Notes
----------------
- All styling is via Tailwind CSS CDN. No build step is required.
- All React code is precompiled and included in a <script type="module"> block.
- For Google Analytics, replace 'YOUR-GA-ID' in the <head> with your actual GA tracking ID.
- For deployment, upload index.html to Netlify, Vercel, or your preferred static host.
- The site is fully responsive and accessible.

If you have any questions or need further customization, refer to the comments in index.html or contact your developer. 