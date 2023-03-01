import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import DiscoverButton from "../components/DiscoverButton";
import { useRouter } from "next/router";

const What = () => {
	const JourneyProps = {
		index: 2,
		state: "what",
		title: "What is his purpose?",
		quote: ["I quit the", "rat race early", "I aint runnin'", "for fees"],
		next: "where",
		loopvid: process.env.loopVideoURL + 2 + ".mp4",
		loopstill: process.env.loopStillURL + 2 + ".jpg",
		scenevid: process.env.sceneVideoURL + 2 + ".mp4",
		scenestill: process.env.sceneStillURL + 2 + ".jpg",
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
							setTimeout(function(){router.push("/where")}, 600);
						}}>
						<h2>Where &rarr;</h2>
					</button>
					<DiscoverButton state={JourneyProps.state} />
				</div>
				<Discover state={JourneyProps.state} />
			</main>
		</div>
	);
};

export default What;
