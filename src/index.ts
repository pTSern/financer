export default {
	async fetch(request, env): Promise<Response> {
    	const _url = new URL(request.url);
    	if (_url.pathname !== "/telegram") {
    		return new Response("OK", { status: 200 });
    	}

		if(request.method !== "POST") return new Response('Method not allowed', { status: 200 })

		const _update = await request.json() as any;
		console.log('Received update:', _update);

		if(_update.message && _update.message.text) {
			const _chat_id = _update.message.chat.id;
			const _text = _update.message.text;

			if(_text === '/hello') {
				const _current = new Date().toISOString();
				const _last = await env.PTS_FINANCER_BOT_KV.get<string>('last_hello');
				await env.PTS_FINANCER_BOT_KV.put('last_hello', _current);
				await _send(env.PTS_FINANCER_BOT_TOKEN, _chat_id, `OK SIR \nLast: ${_last}\nCurrent: ${_current}`);
			}
		}

		return new Response('OK', { status: 200 })
	},
} satisfies ExportedHandler<Env>;

async function _send(token: string, chat_id: string, text: string) {
	const _url = `https://api.telegram.org/bot${token}/sendMessage`;

	await fetch(_url, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ chat_id, text })
	});
}
