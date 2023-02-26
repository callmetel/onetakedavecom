import Links from "../components/Links";
import Video from "../components/Video";
import Quote from "../components/Quote";
import Link from "next/link";

const Where = () => {
	const JourneyProps = {
		index: 3,
		state: "where",
		title: "Where is he going?",
		quote: [
			"Flyin' through",
			"these broken",
			"blocks I'm a",
			"master at tetris",
		],
		next: "when",
		loopvid: process.env.loopVideoURL + 3 + ".mp4",
		loopstill: process.env.loopStillURL + 3 + ".jpg",
		scenevid: process.env.sceneVideoURL + 3 + ".mp4",
		scenestill: process.env.sceneStillURL + 3 + ".jpg",
	};

	return (
		<div className="page">
			<h1>Where</h1>
			<Video link={JourneyProps.scenevid} still={JourneyProps.scenestill} state={JourneyProps.state} />
			<Quote {...JourneyProps.quote} />
			<Link href="/when">
				<h2>When &rarr;</h2>
			</Link>
		</div>
	);
};

export default Where;
