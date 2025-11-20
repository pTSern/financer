import hello from "./hello";
import Interfaces from "./interfaces";

export default function(_json: Interfaces.IUpdate, env: Env) {
	if(_json.message && _json.message.text) {
		const _text = _json.message.text;

		switch(_text) {
			case "/hello": {
				return hello(env.PTS_FINANCER_BOT_TOKEN, _json.message.chat.id, env.PTS_FINANCER_BOT_KV);
			}
		}
	}
}
