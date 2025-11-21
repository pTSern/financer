import send from "../../../manager/send";
import NSTelegram from "../interfaces";

const _: NSTelegram.TCmdHandler = async (token, update, env) => {
	update;

	const _current = new Date().toISOString();
	const _last = await env.get('last_hello');
	await env.put('last_hello', _current);
	return send(token, update.message.chat.id, `OK SIR \nLast: ${_last}\nCurrent: ${_current}`);
}

export default _;
