import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Link from "next/link";

const What = () => {
	const JourneyProps = {
		index: 2,
		state: "what",
		title: "What is his purpose?",
		quote: ["I quit the", "rat race early", "I aint runnin'", "for fees"],
		next: "where",
		loopvid: process.env.loopVideoURL + 2 + ".mp4",
		loopstill: process.env.loopStillURL + 2 + ".jpg",
		scenevid: process.env.sceneVideoURL + 2 + ".mp4",
		scenestill: process.env.sceneStillURL + 2 + ".jpg",
	};

	return (
		<div className="page">
			<Title title={JourneyProps.title}/>
			<Video link={JourneyProps.scenevid} still={JourneyProps.scenestill} state={JourneyProps.state} />
			<Quote {...JourneyProps.quote} />
			<Link href="/where">
				<h2>Where &rarr;</h2>
			</Link>
		</div>
	);
};

export default What;
