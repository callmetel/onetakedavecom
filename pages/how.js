import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import DiscoverButton from "../components/DiscoverButton";
import { useRouter } from "next/router";

const How = () => {
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
							setTimeout(function(){router.push("/who")}, 600);
						}}>
						<h2>Restart &rarr;</h2>
					</button>
					<DiscoverButton state={JourneyProps.state} />
				</div>

				<Discover state={JourneyProps.state} />
			</main>
		</div>
	);
};

export default How;
