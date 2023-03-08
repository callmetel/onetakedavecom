import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import { Button, DiscoverButton } from "../components/Buttons";
import { useRef } from "react";

const Who = () => {
    const ref = useRef();
	const JourneyProps = {
		index: 1,
		state: "who",
		title: "Who is OneTakeDave?",
		quote: ["I want 'em to", "love me", "for scriptures", "I've written"],
		next: "what",
		scenevid: process.env.sceneVideoURL + 1 + ".mp4",
		scenestill: process.env.sceneStillURL + 1 + ".jpg",
		endstill: process.env.sceneStillURL + 2 + ".jpg",
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
                    <Button name="What" link="/what" onClick={() => ref.current.log()} />
					<DiscoverButton />
				</div>

				<Discover state={JourneyProps.state} />
			</main>
		</div>
	);
};

export default Who;
