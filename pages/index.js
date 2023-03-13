import Links from "../components/Links";
import Video from "../components/Video";
import { Quote, QuoteAlt } from "../components/Quote";
import { Button, DiscoverButton } from "../components/Buttons";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Home() {
	// const [location, setLocation] = useState("");
	// const updateVideoData = (location) => {
	// 	let videoData = {};
	// 	switch (location) {
	// 		case "who":
	// 			videoData = {
	// 				vid: process.env.videoURL + 1 + ".mp4",
	// 				still: process.env.sceneStillURL + 1 + ".jpg",
	// 			};
	// 			break;

	// 		case "what":
	// 			videoData = {
	// 				vid: process.env.sceneVideoURL + 2 + ".mp4",
	// 				still: process.env.sceneStillURL + 2 + ".jpg",
	// 			};
	// 			break;

	// 		case "where":
	// 			videoData = {
	// 				vid: process.env.sceneVideoURL + 3 + ".mp4",
	// 				still: process.env.sceneStillURL + 3 + ".jpg",
	// 			};
	// 			break;

	// 		case "when":
	// 			videoData = {
	// 				vid: process.env.sceneVideoURL + 4 + ".mp4",
	// 				still: process.env.sceneStillURL + 4 + ".jpg",
	// 			};
	// 			break;

	// 		case "why":
	// 			videoData = {
	// 				vid: process.env.sceneVideoURL + 5 + ".mp4",
	// 				still: process.env.sceneStillURL + 5 + ".jpg",
	// 			};
	// 			break;

	// 		case "how":
	// 			videoData = {
	// 				vid: process.env.sceneVideoURL + 6 + ".mp4",
	// 				still: process.env.sceneStillURL + 6 + ".jpg",
	// 			};
	// 			break;

	// 		default:
	// 			videoData = {
	// 				vid: process.env.loopVideoURL + 0 + ".mp4",
	// 				still: process.env.loopStillURL + 6 + ".jpg",
	// 			};
	// 			break;
	// 	}
	// 	console.log(videoData);
	// };
	// const updateLocationData = (location) => {
	// 	let locationData = {};
	// 	switch (location) {
	// 		case "who":
	// 			locationData = {
	// 				title: "Who is OneTakeDave?",
	// 				quote: ["I want 'em to", "love me", "for scriptures", "I've written"],
	// 				next: "what",
	// 				endstill: process.env.sceneStillURL + 2 + ".jpg",
	// 			};
	// 			break;

	// 		case "what":
	// 			locationData = {
	// 				title: "What is his purpose?",
	// 				quote: ["I quit the", "rat race early", "I aint runnin'", "for fees"],
	// 				next: "where",
	// 				endstill: process.env.sceneStillURL + 3 + ".jpg",
	// 			};
	// 			break;

	// 		case "where":
	// 			locationData = {
	// 				title: "Where is he going?",
	// 				quote: [
	// 					"Flyin' through",
	// 					"these broken",
	// 					"blocks I'm a",
	// 					"master at tetris",
	// 				],
	// 				next: "when",
	// 				endstill: process.env.sceneStillURL + 4 + ".jpg",
	// 			};
	// 			break;

	// 		case "when":
	// 			locationData = {
	// 				title: "When did it start?",
	// 				quote: [
	// 					"All my life",
	// 					"i had to grind and",
	// 					"i got a lot more",
	// 					"grindin' to go",
	// 				],
	// 				next: "why",
	// 				endstill: process.env.sceneStillURL + 5 + ".jpg",
	// 			};
	// 			break;

	// 		case "why":
	// 			locationData = {
	// 				title: "Why does he do it?",
	// 				quote: [
	// 					"I feel alive",
	// 					"when i'm rappin'",
	// 					"i feel awake",
	// 					"when i'm learnin'",
	// 				],
	// 				next: "how",
	// 				endstill: process.env.sceneStillURL + 6 + ".jpg",
	// 			};
	// 			break;

	// 		case "how":
	// 			locationData = {
	// 				title: "How will he make it?",
	// 				quote: ["You either", "seekin' pleasure", "or it's profit"],
	// 				next: "start",
	// 				endstill: process.env.sceneStillURL + 6 + ".jpg",
	// 			};
	// 			break;

	// 		default:
	// 			locationData = {
	// 				quote: ["ONE WAY", "OR ANOTHER", "WORD TO MOTHA", "WE GON' GET IT"],
	// 				next: "who",
	// 			};
	// 			break;
	// 	}
	// 	console.log(locationData);
	// };
	const ref = useRef();
	const JourneyProps = {
		index: 0,
		state: "start",
		quote: ["ONE WAY", "OR ANOTHER", "WORD TO MOTHA", "WE GON' GET IT"],
		next: "who",
		scenevid: process.env.loopVideoURL + 0 + ".mp4",
		scenestill: process.env.loopStillURL + 6 + ".jpg",
	};
	// const router = useRouter();
	// const changeLocation = (location) => {
	// 	setLocation(location);
	// 	updateVideoData(location);
	// };
	// useEffect(() => {
	// 	// Always do navigations after the first render
	// 	router.push("/" + location, undefined, { shallow: true });
	// }, [location]);

	return (
		<div className="page">
			<main className="main">
				<Video
					link={JourneyProps.scenevid}
					still={JourneyProps.scenestill}
					state={JourneyProps.state}
				/>
				<div className="content">
					<QuoteAlt {...JourneyProps.quote} />
					{/* <button
						onClick={() => {
							let nextLocation;
							switch (router.pathname.substring(1)) {
								case "who":
									nextLocation = "what";
									break;

								case "what":
									nextLocation = "where";
									break;

								case "where":
									nextLocation = "when";
									break;

								case "when":
									nextLocation = "why";
									break;

								case "why":
									nextLocation = "how";
									break;

								case "how":
									nextLocation = "who";
									break;

								default:
									nextLocation = "who";
									break;
							}
							changeLocation(nextLocation);
						}}>
						Test
					</button> */}
					<Button name="Start" link="/who" onClick={() => ref.current.log()} />
				</div>
			</main>
		</div>
	);
}
