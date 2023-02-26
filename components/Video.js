import { motion } from "framer-motion";

const Video = (props) => {
    const showContent = () => {
        console.log("show content");
    }

    return(
	<motion.div className="video-scene">
		<video
				data-video={props.state}
				id={`${props.state}-scene`}
				src={props.link}
				className={`video video-${props.state}`}
				preload="auto"
				placeholder={props.still}
				playsInline
				onEnded={showContent}
			/>
	</motion.div>);
};
export default Video;
