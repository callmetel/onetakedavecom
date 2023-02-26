import Links from "../components/Links";
import Video from "../components/Video";
import Quote from "../components/Quote";
import Link from "next/link";

const When = () => {
	const JourneyProps = {
		index: 4,
		state: "when",
		title: "When did it start?",
		quote: [
			"All my life",
			"i had to grind and",
			"i got a lot more",
			"grindin' to go",
		],
		next: "why",
		loopvid: process.env.loopVideoURL + 4 + ".mp4",
		loopstill: process.env.loopStillURL + 4 + ".jpg",
		scenevid: process.env.sceneVideoURL + 4 + ".mp4",
		scenestill: process.env.sceneStillURL + 4 + ".jpg",
	};

	return (
		<div className="page">
			<h1>When</h1>
			<Video link={JourneyProps.scenevid} still={JourneyProps.scenestill} state={JourneyProps.state} />
			<Quote {...JourneyProps.quote} />
			<Link href="/why">
				<h2>Why &rarr;</h2>
			</Link>
		</div>
	);
};

export default When;
