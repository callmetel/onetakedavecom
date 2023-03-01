import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import DiscoverButton from "../components/DiscoverButton";
import { useRouter } from "next/router";

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
							setTimeout(function(){router.push("/what")}, 600);
						}}>
						<h2>What &rarr;</h2>
					</button>
					<DiscoverButton state={JourneyProps.state} />
				</div>

				<Discover state={JourneyProps.state} />
			</main>
		</div>
	);
};

export default Who;
