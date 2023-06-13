import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Nav from "../components/Nav";
import SceneTransition from "../components/SceneTransition";
import "../styles/_app.scss";

function Page({ Component, pageProps })
{
	const router = useRouter();
	const [popstatePressed, setPopstatePressed] = useState(false);
	const [routeChanged, setRouteChanged] = useState(false);
	useEffect(() =>
	{
		router.beforePopState(({ url, as, options }) =>
		{
			setPopstatePressed(true);
		});
		router.events.on("routeChangeStart", (url, { shallow }) =>
		{
			// setPopstatePressed(false);
			console.log(`routing to ${url}`, `is shallow routing: ${shallow}`);
			setPopstatePressed(true);
			setRouteChanged(true);
		});
		router.events.on("routeChangeComplete", (url, { shallow }) =>
		{
			// setPopstatePressed(false);
			console.log(`routed to ${url}`, `is shallow routing: ${shallow}`);
			setRouteChanged(false);
		});
	}, [router]);
	pageProps.popstate = popstatePressed;
	pageProps.routeChanged = routeChanged;
	let locationData = {};
	switch (router.pathname.substring(1))
	{
		case "who":
			locationData = {
				state: "who",
				title: "Who is OneTakeDave?",
				quote: ["I want 'em to", "love me", "for scriptures", "I've written"],
				next: "what",
				endstill: process.env.sceneStillURL + 2 + ".jpg",
				vid: process.env.videoURL + 1 + ".mp4",
				still: process.env.sceneStillURL + 1 + ".jpg",
			};
			break;

		case "what":
			locationData = {
				state: "what",
				title: "What is his purpose?",
				quote: ["I quit the", "rat race early", "I aint runnin'", "for fees"],
				next: "where",
				endstill: process.env.sceneStillURL + 3 + ".jpg",
				vid: process.env.videoURL + 2 + ".mp4",
				still: process.env.sceneStillURL + 2 + ".jpg",
			};
			break;

		case "where":
			locationData = {
				state: "where",
				title: "Where is he going?",
				quote: [
					"Flyin' through",
					"these broken",
					"blocks I'm a",
					"master at tetris",
				],
				next: "when",
				endstill: process.env.sceneStillURL + 4 + ".jpg",
				vid: process.env.videoURL + 3 + ".mp4",
				still: process.env.sceneStillURL + 3 + ".jpg",
			};
			break;

		case "when":
			locationData = {
				state: "when",
				title: "When did it start?",
				quote: [
					"All my life",
					"i had to grind and",
					"i got a lot more",
					"grindin' to go",
				],
				next: "why",
				endstill: process.env.sceneStillURL + 5 + ".jpg",
				vid: process.env.videoURL + 4 + ".mp4",
				still: process.env.sceneStillURL + 4 + ".jpg",
			};
			break;

		case "why":
			locationData = {
				state: "why",
				title: "Why does he do it?",
				quote: [
					"I feel alive",
					"when i'm rappin'",
					"i feel awake",
					"when i'm learnin'",
				],
				next: "how",
				endstill: process.env.sceneStillURL + 6 + ".jpg",
				vid: process.env.videoURL + 5 + ".mp4",
				still: process.env.sceneStillURL + 5 + ".jpg",
			};
			break;

		case "how":
			locationData = {
				state: "how",
				title: "How will he make it?",
				quote: ["You either", "seekin' pleasure", "or it's profit"],
				next: "who",
				vid: process.env.videoURL + 6 + ".mp4",
				still: process.env.sceneStillURL + 6 + ".jpg",
				endstill: process.env.sceneStillURL + 7 + ".jpg",
			};
			break;

		default:
			locationData = {
				state: "start",
				quote: ["ONE WAY", "OR ANOTHER", "WORD TO MOTHA", "WE GON' GET IT"],
				next: "who",
				vid: process.env.loopVideoURL + 0 + ".mp4",
				still: process.env.loopStillURL + 6 + ".jpg",
			};
			break;
	}
	pageProps.location = locationData;

	return (
		<div className="app-container">
			<SceneTransition {...pageProps}>
				<Component {...pageProps} />
			</SceneTransition>
		</div>
	);
}

export default Page;
