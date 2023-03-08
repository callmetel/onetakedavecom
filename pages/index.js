import Links from "../components/Links";
import Video from "../components/Video";
import { Quote, QuoteAlt } from "../components/Quote";
import { Button, DiscoverButton } from "../components/Buttons";
import { useRef } from "react";

export default function Home() {
	const ref = useRef();
	const JourneyProps = {
		index: 0,
		state: "start",
		quote: ["ONE WAY", "OR ANOTHER", "WORD TO MOTHA", "WE GON' GET IT"],
		next: "who",
		scenevid: process.env.loopVideoURL + 0 + ".mp4",
		scenestill: process.env.loopStillURL + 6 + ".jpg",
	};

	return (
		<div className="page">
			<main className="main">
				<Video
					link={JourneyProps.scenevid}
					still={JourneyProps.scenestill}
					state={JourneyProps.state}
				/>
				<div className="content">
					<QuoteAlt {...JourneyProps.quote} />
					<Button name="Start" link="/who" onClick={() => ref.current.log()} />
				</div>
			</main>
		</div>
	);
}
