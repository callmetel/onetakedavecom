import Links from "../components/Links";
import Video from "../components/Video";
import { Quote, QuoteAlt } from "../components/Quote";
import { Button, DiscoverButton } from "../components/Buttons";
import { useRef, useState, useEffect } from "react";

export default function Home(props) {
	const ref = useRef();
	useEffect(() => {
		const revealQuote = () => {
			document.querySelectorAll(".quote-block").forEach((block) => {
				block.classList.remove("hidden", "reveal-hide");
				block.classList.add("reveal");
			});
		};
		revealQuote();
	});
	return (
		<div className="page">
			<main className="main">
				<Video {...props} />
				<div className="content">
					<QuoteAlt {...props.location.quote} />
					<Button classes="start fadeInLeft" name="Start" link={"/" + props.location.next} onClick={() => ref.current.log()} />
				</div>
			</main>
		</div>
	);
}
