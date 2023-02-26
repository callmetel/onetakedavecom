import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import DiscoverButton from "../components/DiscoverButton";
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
			<Title title={JourneyProps.title}/>
			<Video link={JourneyProps.scenevid} still={JourneyProps.scenestill} state={JourneyProps.state} />
			<Quote {...JourneyProps.quote} />
			<Link href="/why">
				<h2>Why &rarr;</h2>
			</Link>
			<Discover state={JourneyProps.state} />
			<DiscoverButton state={JourneyProps.state} />
		</div>
	);
};

export default When;
