import send from "./send";

export default async function(request: Request, env: Env) {
    const _url = new URL(request.url);
    if (_url.pathname !== "/telegram") {
    	return new Response("OK", { status: 200 });
    }

	if(request.method !== "POST") return new Response('Method not allowed', { status: 200 })

	const _update = await request.json() as any;
	if(_update.message && _update.message.text) {
		const _chat_id = _update.message.chat.id;
		const _text = _update.message.text;

		if(_text === '/hello') {
			const _current = new Date().toISOString();
			const _last = await env.PTS_FINANCER_BOT_KV.get<string>('last_hello');
			await env.PTS_FINANCER_BOT_KV.put('last_hello', _current);
			await send(env.PTS_FINANCER_BOT_TOKEN, _chat_id, `OK SIR \nLast: ${_last}\nCurrent: ${_current}`);
		}
	}
}
