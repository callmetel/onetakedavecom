import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import DiscoverButton from "../components/DiscoverButton";
import { useRouter } from "next/router";

const Where = () => {
	const JourneyProps = {
		index: 3,
		state: "where",
		title: "Where is he going?",
		quote: [
			"Flyin' through",
			"these broken",
			"blocks I'm a",
			"master at tetris",
		],
		next: "when",
		loopvid: process.env.loopVideoURL + 3 + ".mp4",
		loopstill: process.env.loopStillURL + 3 + ".jpg",
		scenevid: process.env.sceneVideoURL + 3 + ".mp4",
		scenestill: process.env.sceneStillURL + 3 + ".jpg",
	};

	const router = useRouter();
	return (
		<div className="page">
			<main className="main">
				<Title title={JourneyProps.title} />
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
							setTimeout(function(){router.push("/when")}, 600);
						}}>
						<h2>When &rarr;</h2>
					</button>
					<DiscoverButton state={JourneyProps.state} />
				</div>

				<Discover state={JourneyProps.state} />
			</main>
		</div>
	);
};

export default Where;
