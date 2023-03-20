import { motion } from "framer-motion";
import { useEffect } from "react";

export function QuoteAlt(props) {
	return (
		<div className="quote alt">
			{Object.values(props).map((block, index) => (
				<p key={index} className="quote-block block block-revealer hidden alt">
					<span className="line block-revealer__content">{block}</span>
					<span className="wipe block-revealer__element"></span>
				</p>
			))}
		</div>
	);
}

export default function Quote(props) {
	// useEffect(() => {
	// 	if (sessionStorage.getItem("routerPushTriggered") === "false") {
	// 		document.querySelectorAll(".quote-block").forEach((block) => {
	// 			block.classList.remove("hidden", "reveal-hide");
	// 			block.classList.add("reveal");
	// 		});
	// 	}
	// });
	return (
		<div className="quote">
			{Object.values(props).map((block, index) => (
				<p key={index} className="quote-block block block-revealer hidden">
					<span className="line block-revealer__content">{block}</span>
					<span className="wipe block-revealer__element"></span>
				</p>
			))}
		</div>
	);
}
