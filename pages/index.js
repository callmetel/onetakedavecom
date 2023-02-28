import Links from "../components/Links";
import Video from "../components/Video";
import Quote from "../components/Quote";
import Link from "next/link";

export default function Home() {
	const JourneyProps = {
		index: 0,
		state: "start",
		quote: ["ONE WAY", "OR ANOTHER", "WORD TO MOTHA", "WE GON' GET IT"],
		next: "who",
		scenevid: process.env.loopVideoURL + 0 + ".mp4",
		scenestill: process.env.loopStillURL + 6 + ".jpg",
	};

	return (
		<div className="page story-mode">
			<main className="main">
				<Video
					link={JourneyProps.scenevid}
					still={JourneyProps.scenestill}
					state={JourneyProps.state}
				/>
				<div className="content">
					<Quote {...JourneyProps.quote} />
					<Link href="/who" className="changePage">
						<h2>Who &rarr;</h2>
					</Link>
				</div>
			</main>
		</div>
	);
}
