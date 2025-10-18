export default function handler(req, res) {
  const { title, message, sender, gif } = req.query;

  const displayTitle = title || "Shubh Deepavali";
  const displaySender = sender || "A Friend";
  const displayGif =
    gif ||
    "https://res.cloudinary.com/your-default.gif";

  const siteUrl = "https://greet-diwali.vercel.app";
  const shareUrl = `${siteUrl}/?title=${encodeURIComponent(displayTitle)}&message=${encodeURIComponent(
    message || ""
  )}&sender=${encodeURIComponent(displaySender)}&gif=${encodeURIComponent(displayGif)}`;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta property="og:title" content="${displayTitle} from ${displaySender}!" />
    <meta property="og:description" content="✨ Create your own personalized Diwali card!" />
    <meta property="og:image" content="${displayGif}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${shareUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${displayTitle} from ${displaySender}!" />
    <meta name="twitter:description" content="✨ Create your own personalized Diwali card!" />
    <meta name="twitter:image" content="${displayGif}" />
    <meta http-equiv="refresh" content="2;url=${shareUrl}" />
    <title>${displayTitle} from ${displaySender}</title>
  </head>
  <body style="text-align:center;font-family:sans-serif;padding:40px;">
    <h2>Redirecting to your Diwali greeting...</h2>
    <p>If not redirected, <a href="${shareUrl}">click here</a>.</p>
  </body>
  </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
