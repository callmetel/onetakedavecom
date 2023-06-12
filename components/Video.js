import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { BikeRoute } from "/components/BikeRoute";

const Video = (props) =>
{
	const videoRef = useRef(null);
	const placeholderRef = useRef();
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const playingBg = { backgroundImage: `url('${props.location.still}')`, };
	const endedBg = { backgroundImage: `url('${props.location.still}')`, };
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [storyMode, setStoryMode] = useState(false);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);
	let currBg = storyMode ? playingBg : endedBg;

	console.log(props);

	const handlePlayPause = () =>
	{
		if (isPlaying)
		{
			videoRef.current.pause();
			setIsPlaying(false);
		} else
		{
			videoRef.current.play();
			setIsPlaying(true);
		}
	};

	const handleTimeUpdate = () =>
	{
		setCurrentTime(videoRef.current.currentTime);

		//? Check if page is in "story mode"
		// console.log(props.page.current);
		if (props.page.current.classList.contains("story-mode"))
		{
			setStoryMode(true);
			setIsPlaying(true);
		} else
		{
			setStoryMode(false);
			setIsPlaying(false);
			currBg = endedBg;
		}

		//? If the video is ending in 1.5s start hiding the title
		if (
			props.location.state !== "start" &&
			videoRef.current.duration - currentTime <= 1.5
		)
		{
			document.querySelector(".title-block").classList.add("reveal-hide");
		}
	};
	const handleDurationChange = () =>
	{
		setDuration(videoRef.current.duration);
		//? If on home page reveal quote
		if (props.location.state === "start")
		{
			revealQuote();
		}
	};
	const handleVolumeChange = (event) =>
	{
		setVolume(event.target.value);
		videoRef.current.volume = event.target.value;
	};
	const handleSeek = (value) =>
	{
		videoRef.current.currentTime = value;
	};

	const revealQuote = () =>
	{
		document.querySelectorAll(".quote-block").forEach((block) =>
		{
			block.classList.remove("hidden", "reveal-hide");
			block.classList.add("reveal");
		});
	};

	const showContent = () =>
	{
		setDimensions({
			width: videoRef.current.getBoundingClientRect().width,
			height: videoRef.current.getBoundingClientRect().height,
		});
		if (placeholderRef)
		{
			placeholderRef.current.style.width = dimensions.width;
			placeholderRef.current.style.height = dimensions.height;
		}
		console.log("show content");
		document.querySelector(
			".video-placeholder"
		).style.backgroundImage = `url('${props.location.endstill}')`;
		revealQuote();
		setTimeout(function ()
		{
			videoRef.current.style.opacity = 0;
		}, 500);
	};

	const onEndedFn = () =>
	{
		sessionStorage.setItem("routerPushTriggered", "false");
		setIsPlaying(false);
		props.page.current.classList.remove("story-mode");
		setStoryMode(false);
		showContent();
	};

	useEffect(() =>
	{
		if (videoRef.current)
		{
			setDimensions({
				width: videoRef.current.getBoundingClientRect().width,
				height: videoRef.current.getBoundingClientRect().height,
			});
		}

		if (
			sessionStorage.getItem("routerPushTriggered") === "false" &&
			!isPlaying &&
			props.location.state !== "start"
		)
		{
			const vidDuration = props.popstate
				? document.getElementById("SceneVideo").duration
				: videoRef.current.duration;
			showContent();
			setStoryMode(false);
			handleSeek(vidDuration);
		}

		const handleResize = () =>
		{
			if (videoRef.current)
			{
				setDimensions({
					width: videoRef.current.getBoundingClientRect().width,
					height: videoRef.current.getBoundingClientRect().height,
				});
			}
		}

		window.addEventListener('resize', handleResize);
		return () =>
		{
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<motion.div
			className="video-scene"
			style={currBg}
			initial={{ opacity: 0 }
			}
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
			<div
				ref={placeholderRef}
				id="VideoPlaceholder"
				className="video-placeholder"
				style={{ ...currBg, width: dimensions.width, height: dimensions.height }}
			/>
		</motion.div>
	);
};
export default Video;
