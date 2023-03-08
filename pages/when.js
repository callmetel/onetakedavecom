import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import { Button, DiscoverButton } from "../components/Buttons";
import { useRef } from "react";

const When = () => {
	const ref = useRef();
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
		endstill: process.env.sceneStillURL + 5 + ".jpg",
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
					<Button name="Why" link="/why" onClick={() => ref.current.log()} />
					<DiscoverButton state={JourneyProps.state} />
				</div>

				<Discover state={JourneyProps.state} />
			</main>
		</div>
	);
};

export default When;
