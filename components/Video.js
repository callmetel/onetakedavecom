import { motion } from "framer-motion";
// import { useState, useRef } from "react";

const Video = (props) => {
	if (typeof window != "undefined") {
		const vid = document.getElementById("SceneVideo");
		vid.addEventListener("play", function () {
			console.log("playing");
			if (props.state === "start") {
				revealQuote();
			}
		});
	}
	const revealQuote = () => {
		document.querySelectorAll(".quote-block").forEach((block) => {
			block.classList.remove("hidden", "reveal-hide");
			block.classList.add("reveal");
		});
	};

	const showContent = () => {
		console.log("show content");
		document.querySelector(".page").classList.remove("story-mode");
		document.querySelector(".video-scene").style.backgroundImage=`url('${props.endStill}')`;
		revealQuote();
	};

	const myStyle = {
		backgroundImage: `url('${props.still}')`,
	};

	return (
		<motion.div className="video-scene" style={myStyle} initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: .5 }}>
			<video
				data-video={props.state}
				id="SceneVideo"
				src={props.link}
				className={`video video-${props.state}`}
				preload="auto"
				placeholder={props.still}
				playsInline
				onEnded={showContent}
				autoPlay={props.state === "start" ? true : true}
				loop={props.state === "start" ? true : false}
				muted={true}
			/>
		</motion.div>
	);
};
export default Video;
