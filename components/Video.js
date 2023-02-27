import { motion } from "framer-motion";
import { useState, useRef } from "react";

const Video = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const VideoRef = useRef(null);
    const showContent = () => {
		console.log("show content");
	};
	return (
		<motion.div className="video-scene">
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
                loop={props.state === "start" ? true:false}
			/>
		</motion.div>
	);
};
export default Video;
