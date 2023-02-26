import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Link from "next/link";

const Who = () => {
    const JourneyProps = {
		index: 1,
		state: "who",
		title: "Who is OneTakeDave?",
		quote: ["I want 'em to", "love me", "for scriptures", "I've written"],
		next: "what",
		scenevid: process.env.sceneVideoURL + 1 + ".mp4",
		scenestill: process.env.sceneStillURL + 1 + ".jpg",
	};

	return (
		<div className="page">
            <Title title={JourneyProps.title}/>
            <Video link={JourneyProps.scenevid} still={JourneyProps.scenestill} state={JourneyProps.state} />
            <Quote {...JourneyProps.quote} />
			<Link href="/what">
				<h2>What &rarr;</h2>
			</Link>
		</div>
	);
};

export default Who;
