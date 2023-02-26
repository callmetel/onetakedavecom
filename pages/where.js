import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import DiscoverButton from "../components/DiscoverButton";
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
			<Title title={JourneyProps.title}/>
			<Video link={JourneyProps.scenevid} still={JourneyProps.scenestill} state={JourneyProps.state} />
			<Quote {...JourneyProps.quote} />
			<Link href="/when">
				<h2>When &rarr;</h2>
			</Link>
			<Discover state={JourneyProps.state} />
			<DiscoverButton state={JourneyProps.state} />
		</div>
	);
};

export default Where;
