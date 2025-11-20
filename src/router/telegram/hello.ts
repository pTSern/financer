import send from "../../manager/send";

export default async function(token: string, chat_id: number, env: KVNamespace<string>) {
	const _current = new Date().toISOString();
	const _last = await env.get('last_hello');
	await env.put('last_hello', _current);
	return send(token, chat_id, `OK SIR \nLast: ${_last}\nCurrent: ${_current}`);
}
