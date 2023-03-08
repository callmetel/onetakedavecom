import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import { Button, DiscoverButton } from "../components/Buttons";
import { useRef } from "react";

const How = () => {
	const ref = useRef();
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
					<Button name="Restart" link="/who" onClick={() => ref.current.log()} />
					<DiscoverButton state={JourneyProps.state} />
				</div>

				<Discover state={JourneyProps.state} />
			</main>
		</div>
	);
};

export default How;
