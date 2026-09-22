export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>The Chop On It Radio Network</title><style>body{background:#111;color:#fff;font-family:sans-serif;text-align:center;padding-top:50px;}audio{margin-top:20px;width:300px;}</style></head><body><h1>CHOP ON IT RADIO NETWORK LIVE</h1><p>Decentralized Edge Broadcast Node Matrix</p><audio controls autoplay src="https://azuracast.com"></audio></body></html>`;
    return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });
  }
};
