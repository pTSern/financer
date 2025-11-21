import send from "../../../manager/send";
import NSTelegram from "../interfaces";

const _: NSTelegram.TCmdHandler = async (_token, _update, _env) => {
	const _now = Date.now();
	console.log("[Ping] Log: Client Date >> ", _update.message.date);
	return send(_token, _update.message.chat.id, `Pong ${_now - _update.message.date * 1000} ms`);
}

export default _;

