import Links from "../components/Links";
import Quote from "../components/Quote";
import Link from "next/link";

export default function Home() {
  const JourneyProps = {
		index: 0,
		state: "start",
		title: "",
		quote: ["ONE WAY", "OR ANOTHER", "WORD TO MOTHA", "WE GON' GET IT"],
		next: "who",
		loopvid: process.env.loopVideoURL + 0 + ".mp4",
		loopstill: process.env.loopStillURL + 0 + ".jpg",
		scenevid: process.env.sceneVideoURL + 0 + ".mp4",
		scenestill: process.env.sceneStillURL + 0 + ".jpg",
	};

	return (
		<div className="page">
			<main className="main">
				<h1>Start</h1>
        <Quote {...JourneyProps.quote} />
				<Link href="/who">
					<h2>Who &rarr;</h2>
				</Link>
			</main>
		</div>
	);
}
