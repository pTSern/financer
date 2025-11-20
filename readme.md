# Setup State

+ Install Wrangler:
```bash
npm install -g wrangler
```
+ Login to Cloudflare:
```bash
wrangler login
```
+ Deploy worker:
```bash
npm run deploy
```
+ Set webhook to your telegram bot to your deployed worker url:
```bash
curl "https://api.telegram.org/bot<YOUR_TOKEN>/setWebhook \ -d "url=<YOUR_URL>/telegram"
```

# Setup Env
+ Set bot token:
```bash
wrangler secret put PTS_FINANCER_BOT_TOKEN
```
> Paste bot token and press enter
+ Set kv
```bash
wrangler kv namespace create PTS_FINANCER_BOT_KV
```
> Replace the `id` in wrangler.toml to the created namespace id
