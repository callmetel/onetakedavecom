import Links from "../components/Links";
import Video from "../components/Video";
import Quote from "../components/Quote";
import { useRouter } from "next/router";

export default function Home() {
	const JourneyProps = {
		index: 0,
		state: "start",
		quote: ["ONE WAY", "OR ANOTHER", "WORD TO MOTHA", "WE GON' GET IT"],
		next: "who",
		scenevid: process.env.loopVideoURL + 0 + ".mp4",
		scenestill: process.env.loopStillURL + 6 + ".jpg",
	};

	const router = useRouter();
	return (
		<div className="page">
			<main className="main">
				<Video
					link={JourneyProps.scenevid}
					still={JourneyProps.scenestill}
					state={JourneyProps.state}
				/>
				<div className="content">
					<Quote {...JourneyProps.quote} />
					<button
						className="changePage"
						onClick={() => {
              const quoteBlock = document.querySelectorAll(".quote-block");
							quoteBlock.forEach((block) => block.classList.add("reveal-hiding"));
							setTimeout(function () {router.push("/who")}, 600);
						}}>
						<h2>Who &rarr;</h2>
					</button>
				</div>
			</main>
		</div>
	);
}
