import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { forwardRef, useImperativeHandle } from "react";

export const Button = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		log() {
			console.log(ref);
		},
	}));
	const router = useRouter();
	const onClick = (e) => {
		const quoteBlock = document.querySelectorAll(".quote-block");
		quoteBlock.forEach((block) => block.classList.add("reveal-hiding"));
		const button = e.target.classList.contains("text") ? e.target.closest("button"):e.target;
		button.classList.add("no-delay","hide");
		setTimeout(function () {
			router.push(props.link);
		}, 600);
	};

	return (
		<motion.button
			className="changePage redwipe"
			onClick={onClick}
			title={props.name}>
			<span className="text">
				{props.name === "Restart"
					? "Ride Again"
					: props.name === "Start"
					? "Start Riding"
					: "Keep Riding"}
			</span>
			<span className="block"></span>
		</motion.button>
	);
});

export const DiscoverButton = (props) => (
	<motion.button
		className="discoverBtn"
		onClick={() => console.log("discover button clicked")}>
		<span className="text">Discover</span>
		<span className="block"></span>
	</motion.button>
);
