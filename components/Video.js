// import { motion } from "framer-motion";
// import { useState, useRef } from "react";

const Video = (props) => {
	const showContent = () => {
		console.log("show content");
        // if(props.state === "start") {
        //     document.getElementById("SceneVideo").setAttribute("loop",true);
        //     document.getElementById("SceneVideo").play();
        // }
		document.querySelector(".page").classList.remove("story-mode");
		document.querySelectorAll(".quote-block").forEach((block) => {
			block.classList.remove("hidden","reveal-hide");
			block.classList.add("reveal");
		});
	};
	const myStyle = {
		backgroundImage: `url('${props.still}')`,
	};
	return (
		<div className="video-scene" style={myStyle}>
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
		</div>
	);
};
export default Video;
