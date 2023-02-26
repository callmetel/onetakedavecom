import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import DiscoverButton from "../components/DiscoverButton";
import Link from "next/link";

const How = () => {
	const JourneyProps = {
		index: 6,
		state: "how",
		title: "How will he make it?",
		quote: ["You either", "seekin' pleasure", "or it's profit"],
		next: "start",
		loopvid: process.env.loopVideoURL + 6 + ".mp4",
		loopstill: process.env.loopStillURL + 6 + ".jpg",
		scenevid: process.env.sceneVideoURL + 6 + ".mp4",
		scenestill: process.env.sceneStillURL + 6 + ".jpg",
	};

	return (
		<div className="page">
			<Title title={JourneyProps.title}/>
			<Video link={JourneyProps.scenevid} still={JourneyProps.scenestill} state={JourneyProps.state} />
			<Quote {...JourneyProps.quote} />
			<Link href="/">
				<h2>Restart &rarr;</h2>
			</Link>
			<Discover state={JourneyProps.state} />
			<DiscoverButton state={JourneyProps.state} />
		</div>
	);
};

export default How;
