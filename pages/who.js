import Links from "../components/Links";
import Video from "../components/Video";
import Quote from "../components/Quote";
import Link from "next/link";

const Who = () => {
    const JourneyProps = {
		index: 1,
		state: "who",
		title: "Who is OneTakeDave?",
		quote: ["I want 'em to", "love me", "for scriptures", "I've written"],
		next: "what",
		loopvid: process.env.loopVideoURL + 1 + ".mp4",
		loopstill: process.env.loopStillURL + 1 + ".jpg",
		scenevid: process.env.sceneVideoURL + 1 + ".mp4",
		scenestill: process.env.sceneStillURL + 1 + ".jpg",
	};

	return (
		<div className="page">
			<h1>Who</h1>
            <Video link={JourneyProps.scenevid} still={JourneyProps.scenestill} state={JourneyProps.state} />
            <Quote {...JourneyProps.quote} />
			<Link href="/what">
				<h2>What &rarr;</h2>
			</Link>
		</div>
	);
};

export default Who;
