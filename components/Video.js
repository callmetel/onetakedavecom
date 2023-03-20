import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Video = (props) => {
	const [storyMode, setStoryMode] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);
	const videoRef = useRef(null);
	const myStyle = {
		backgroundImage: `url('${props.location.still}')`,
	};
	const handlePlayPause = () => {
		if (isPlaying) {
			videoRef.current.pause();
			setIsPlaying(false);
		} else {
			videoRef.current.play();
			setIsPlaying(true);
		}
	};
	// console.log(videoRef.current);
	const handleTimeUpdate = () => {
		setCurrentTime(videoRef.current.currentTime);
		// console.log(currentTime);
		//? Check if page is in "story mode"
		if (document.querySelector(".page").classList.contains("story-mode")) {
			setStoryMode(true);
			setIsPlaying(true);
		} else {
			setStoryMode(false);
			setIsPlaying(false);
		}

		//? If the video is ending in 1.5s start hiding the title
		if (
			props.location.state !== "start" &&
			videoRef.current.duration - currentTime <= 1.5
		) {
			document.querySelector(".title-block").classList.add("reveal-hide");
		}
	};
	const handleDurationChange = () => {
		setDuration(videoRef.current.duration);
		//? If on home page reveal quote
		if (props.location.state === "start") {
			revealQuote();
		}
	};
	const handleVolumeChange = (event) => {
		setVolume(event.target.value);
		videoRef.current.volume = event.target.value;
	};
	const handleSeek = (value) => {
		videoRef.current.currentTime = value;
	};

	const revealQuote = () => {
		document.querySelectorAll(".quote-block").forEach((block) => {
			block.classList.remove("hidden", "reveal-hide");
			block.classList.add("reveal");
		});
	};

	const showContent = () => {
		console.log("show content");
		document.querySelector(
			".video-scene"
		).style.backgroundImage = `url('${props.location.endstill}')`;
		revealQuote();
	};

	const onEndedFn = () => {
		sessionStorage.setItem("routerPushTriggered", "false");
		setIsPlaying(false);
		document.querySelector(".page").classList.remove("story-mode");
		setStoryMode(false);
		showContent();
	};

	useEffect(() => {
		if (
			sessionStorage.getItem("routerPushTriggered") === "false" &&
			!isPlaying &&
			props.location.state !== "start"
		) {
			const vidDuration = props.popstate
				? document.getElementById("SceneVideo").duration
				: videoRef.current.duration;
			showContent();
			setStoryMode(false);
			handleSeek(vidDuration);
		}
	});

	return (
		<motion.div
			className="video-scene"
			style={myStyle}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.5 }}>
			<video
				ref={videoRef}
				data-video={props.location.state}
				id="SceneVideo"
				src={props.location.vid}
				className={`video video-${props.location.state}`}
				preload="auto"
				placeholder={props.location.still}
				playsInline
				onEnded={onEndedFn}
				onTimeUpdate={handleTimeUpdate}
				onLoadedMetadata={handleDurationChange}
				autoPlay={true}
				loop={props.location.state === "start" ? true : false}
				muted={props.location.state === "start" ? true : false}
			/>
		</motion.div>
	);
};
export default Video;
