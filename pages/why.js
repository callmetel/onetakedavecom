import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Link from "next/link";

const Why = () => {
	const JourneyProps = {
		index: 5,
		state: "why",
		title: "Why does he do it?",
		quote: [
			"I feel alive",
			"when i'm rappin'",
			"i feel awake",
			"when i'm learnin'",
		],
		next: "how",
		loopvid: process.env.loopVideoURL + 5 + ".mp4",
		loopstill: process.env.loopStillURL + 5 + ".jpg",
		scenevid: process.env.sceneVideoURL + 5 + ".mp4",
		scenestill: process.env.sceneStillURL + 5 + ".jpg",
	};

	return (
		<div className="page">
			<Title title={JourneyProps.title}/>
			<Video link={JourneyProps.scenevid} still={JourneyProps.scenestill} state={JourneyProps.state} />
			<Quote {...JourneyProps.quote} />
			<Link href="/how">
				<h2>How &rarr;</h2>
			</Link>
		</div>
	);
};

export default Why;
