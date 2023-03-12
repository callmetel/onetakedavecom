import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Video = (props) => {
    const [storyMode,setStoryMode] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);
	const videoRef = useRef(null);
	const handlePlayPause = () => {
		if (isPlaying) {
			videoRef.current.pause();
			setIsPlaying(false);
		} else {
			videoRef.current.play();
			setIsPlaying(true);
		}
	};
	const handleTimeUpdate = () => {
		setCurrentTime(videoRef.current.currentTime);
		console.log(currentTime);
        //? Check if page is in "story mode"
        if(document.querySelector(".page").classList.contains("story-mode")) {
            setStoryMode(true);
        }
        else {
            setStoryMode(false);
        }

		//? If on home page reveal quote
		if (props.state === "start") {
			revealQuote();
		}

		//? If page is not in story mode & the video has been playing for more than 1s, activate story mode
		if (
			props.state !== "start" &&
			currentTime > 0.2 &&
			!storyMode &&
            !document.querySelector(".title").classList.contains("hide")
		) {
			hideContent();
            setTimeout(function(){
                document.querySelector(".title").style.opacity = 1;
            },2000);
		}

		//? If the video has been playing for more than 1s, unmute video
		if (props.state !== "start" && currentTime > 0.2) {
			videoRef.current.removeAttribute("muted");
		}

		//? If the video is ending in 1.5s start hiding the title
		if (props.state !== "start" && videoRef.current.duration - currentTime <= 1.5) {
			document.querySelector(".title-block").classList.add("reveal-hide");
		}
	};
	const handleDurationChange = () => {
		setDuration(videoRef.current.duration);
	};
	const handleVolumeChange = (event) => {
		setVolume(event.target.value);
		videoRef.current.volume = event.target.value;
	};
	const handleSeek = (event) => {
		videoRef.current.currentTime = event.target.value;
	};

	//   useEffect(() => {
	//     const interval = setInterval(() => {
	//       setCounter((prevCounter) => prevCounter + 1);
	//     }, 1000);

	//     return () => clearInterval(interval);
	//   }, []);

	const revealQuote = () => {
		document.querySelectorAll(".quote-block").forEach((block) => {
			block.classList.remove("hidden", "reveal-hide");
			block.classList.add("reveal");
		});
	};

	const hideContent = () => {
		console.log("hide content");
        setStoryMode(true);
		document.querySelector(".page").classList.add("story-mode");
		document.querySelector(".title").style.opacity = 0;
        document.querySelector(".title-block").classList.remove("reveal","alt","reveal-hide");
		document.querySelector(
			".video-scene"
		).style.backgroundImage = `url('${props.still}')`;
		document
			.querySelectorAll(".quote-block")
			.forEach((block) => block.classList.remove("reveal"));
	};

	const showContent = () => {
		console.log("show content");
		document.querySelector(".page").classList.remove("story-mode");
        setStoryMode(false);
		document.querySelector(
			".video-scene"
		).style.backgroundImage = `url('${props.endStill}')`;
		revealQuote();
	};

	const myStyle = {
		backgroundImage: `url('${props.still}')`,
	};

	return (
		<motion.div
			className="video-scene"
			style={myStyle}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.5 }}>
			<video
				ref={videoRef}
				data-video={props.state}
				id="SceneVideo"
				src={props.link}
				className={`video video-${props.state}`}
				preload="auto"
				placeholder={props.still}
				playsInline
				onEnded={showContent}
				onTimeUpdate={handleTimeUpdate}
				onLoadedMetadata={handleDurationChange}
				autoPlay={props.state === "start" ? true : true}
				loop={props.state === "start" ? true : false}
				muted={true}
			/>
		</motion.div>
	);
};
export default Video;
