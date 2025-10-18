export default function handler(req, res) {
  const { title, message, sender, gif } = req.query;

  const displayTitle = title || "Happy Diwali 🎆";
  const displayMessage = message || "Wishing you a bright and joyous Diwali!";
  const displaySender = sender || "A Friend";
  const displayGif = gif || "https://res.cloudinary.com/your-default-gif.gif";

  const appLink = "https://greet-diwali.vercel.app/";
  const cardLink = `${appLink}?title=${encodeURIComponent(displayTitle)}&message=${encodeURIComponent(displayMessage)}&sender=${encodeURIComponent(displaySender)}&gif=${encodeURIComponent(displayGif)}`;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${displayTitle} from ${displaySender}</title>
    <meta name="description" content="${displayMessage}" />
    <meta property="og:title" content="${displayTitle} from ${displaySender}" />
    <meta property="og:description" content="${displayMessage}" />
    <meta property="og:image" content="${displayGif}" />
    <meta property="og:image:type" content="image/gif" />
    <meta property="og:image:width" content="600" />
    <meta property="og:image:height" content="400" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${cardLink}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${displayTitle} from ${displaySender}" />
    <meta name="twitter:description" content="${displayMessage}" />
    <meta name="twitter:image" content="${displayGif}" />
    
  </head>
  <body style="background:#000;color:#fff;text-align:center;font-family:sans-serif;">
    <h2>Redirecting to your Diwali greeting…</h2>
    <p>If not redirected, <a href="${cardLink}" style="color:#ffcc33;">click here</a>.</p>
  </body>
  </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
