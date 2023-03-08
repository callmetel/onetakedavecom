import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import { Button, DiscoverButton } from "../components/Buttons";
import { useRef } from "react";

const Why = () => {
	const ref = useRef();
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
		endstill: process.env.sceneStillURL + 6 + ".jpg",
	};

	return (
		<div className="page">
			<main className="main">
				<Title title={JourneyProps.title} />
				<Video
					link={JourneyProps.scenevid}
					still={JourneyProps.scenestill}
					endStill={JourneyProps.endstill}
					state={JourneyProps.state}
				/>
				<div className="content">
					<Quote {...JourneyProps.quote} />
					<Button name="How" link="/how" onClick={() => ref.current.log()} />
					<DiscoverButton state={JourneyProps.state} />
				</div>
				<Discover state={JourneyProps.state} />
			</main>
		</div>
	);
};

export default Why;
