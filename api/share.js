export default function handler(req, res) {
  const { title, message, sender, gif } = req.query;

  const displayTitle = title || "Happy Diwali 🎆";
  const displayMessage = message || "Wishing you a bright and joyous Diwali!";
  const displaySender = sender || "A Friend";
  const displayGif = gif || "https://res.cloudinary.com/your-default-gif.gif";

  const encodedParams = `title=${encodeURIComponent(displayTitle)}&message=${encodeURIComponent(displayMessage)}&sender=${encodeURIComponent(displaySender)}&gif=${encodeURIComponent(displayGif)}`;
  const shareHtmlUrl = `https://greet-diwali.vercel.app/share.html?${encodedParams}`;

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
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${displayTitle} from ${displaySender}" />
    <meta name="twitter:description" content="${displayMessage}" />
    <meta name="twitter:image" content="${displayGif}" />
    <meta http-equiv="refresh" content="1; url=${shareHtmlUrl}">
    <style>
      body { background:#0b1020; color:#fff; font-family:sans-serif; text-align:center; padding:2vw; }
      .card { max-width:550px; margin:auto; background:rgba(255,255,255,0.04); border-radius:18px; padding:40px 20px; }
      .card img { max-width:97%; border-radius:14px; margin-bottom:28px; box-shadow:0 14px 60px #ffcc3322; }
      .card-title { font-size:2.2rem; color:#ffcc33; font-weight:800; margin-bottom:10px; }
      .card-message { font-size:1.2rem; margin-bottom:18px; line-height:1.6; }
      .card-sender { font-size:1rem; color:#ffcc33; opacity:0.8; margin-bottom:20px; }
      .cta { margin-top:40px; }
      .cta-btn { display:inline-block; margin-top:10px; padding:13px 33px; background:#ffcc33; color:#181818; font-size:1.2rem; border-radius:10px; text-decoration:none; font-weight:700; }
    </style>
    <script>
      setTimeout(function(){
        window.location.replace("${shareHtmlUrl}");
      }, 1400);
    </script>
  </head>
  <body>
    <div class="card">
      <img src="${displayGif}" alt="Diwali Greeting Animation" />
      <div class="card-title">${displayTitle}</div>
      <div class="card-message">${displayMessage}</div>
      <div class="card-sender">— ${displaySender}</div>
    </div>
    <div class="cta">
      <hr>
      <p>You are being redirected...</p>
      <a href="${shareHtmlUrl}" class="cta-btn">✨ View Interactive Card</a>
    </div>
  </body>
  </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
