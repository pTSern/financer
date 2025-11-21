import financer from "./financer";
import Interfaces from "./interfaces";

export default function(_action: string, _json: Interfaces.IUpdate, env: Env) {
	switch(_action) {
		case 'financer': {
			return financer(_json, env);
		}
		default: {
			return new Response(`No Action Found ${_action}`, { status: 404 });
		}
	}
}
