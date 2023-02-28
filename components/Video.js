// import { motion } from "framer-motion";
import { useState, useRef } from "react";

const Video = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const VideoRef = useRef(null);
    const showContent = () => {
		console.log("show content");
        document.querySelector(".page").classList.remove("story-mode");
	};
    const myStyle = {
         backgroundImage: `url('${props.still}')`,
    }
	return (
		<div className="video-scene" style={myStyle}>
			<video
                ref={VideoRef}
				data-video={props.state}
				id="SceneVideo"
				src={props.link}
				className={`video video-${props.state}`}
				preload="auto"
				placeholder={props.still}
				playsInline
				onEnded={showContent}
                autoPlay={props.state === "start" ? true:true}
                loop={props.state === "start" ? true:false}
			/>
		</div>
	);
};
export default Video;
