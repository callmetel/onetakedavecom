import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import { Button, DiscoverButton } from "../components/Buttons";
import { useRef } from "react";

const Where = () => {
	const ref = useRef();
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
		endstill: process.env.sceneStillURL + 4 + ".jpg",
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
					<Button name="When" link="/when" onClick={() => ref.current.log()} />
					<DiscoverButton state={JourneyProps.state} />
				</div>

				<Discover state={JourneyProps.state} />
			</main>
		</div>
	);
};

export default Where;
