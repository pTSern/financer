import telegram from "../router/telegram";

export default async function(request: Request, env: Env) {
	try {
    	const _url = new URL(request.url);
		const _json = await request.json() as any;
		const _path = _url.pathname;
		console.log("[POSTER] Log: \npathname: ", _path);

		switch(_path) {
			case "/telegram": {
				return telegram(_json, env);
			}
		}

		return new Response("OK", { status: 200 });
	} catch (err) {
		return new Response(`Error: ${err}`, { status: 500 });
	}


}
