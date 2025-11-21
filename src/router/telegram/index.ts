import send from "../../manager/send";
import financer from "./financer";
import NSTelegram from "./interfaces";

const actions = [ 'financer' ] as const;
type _TAction = typeof actions[number];
const acttor: Record<_TAction, NSTelegram.TActionHandler> = {
    financer
}

export default function(_action: string, _json: NSTelegram.IUpdate, env: Env) {
	const _acttor = acttor[_action as _TAction];
	console.log(`[Telegram] Log: \n\t Receive Action: ${_action}, \n\t Text: ${_json.message.text}`);
	return _acttor ? _acttor(_json, env) : send(env.PTS_FINANCER_BOT_TOKEN, _json.message.chat.id, `[TELEGRAM] Error >> Unknown action: ${_action}`);
}
