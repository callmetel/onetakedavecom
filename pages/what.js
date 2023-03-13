import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import { Button, DiscoverButton } from "../components/Buttons";
import { useRef } from "react";

const What = () => {
	const ref = useRef();
	const JourneyProps = {
		index: 2,
		state: "what",
		title: "What is his purpose?",
		quote: ["I quit the", "rat race early", "I aint runnin'", "for fees"],
		next: "where",
		scenevid: process.env.videoURL + 2 + ".mp4",
		scenestill: process.env.sceneStillURL + 2 + ".jpg",
		endstill: process.env.sceneStillURL + 3 + ".jpg",
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
					<Button name="Where" link="/where" onClick={() => ref.current.log()} />
					<DiscoverButton state={JourneyProps.state} />
				</div>
				<Discover state={JourneyProps.state} />
			</main>
		</div>
	);
};

export default What;
