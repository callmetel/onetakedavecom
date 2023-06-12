import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { BikeRoute } from "/components/BikeRoute";

const Video = (props) =>
{
	const videoRef = useRef(null);
	const placeholderRef = useRef();
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const currBgImg = !props.popstate ? props.location.endstill : props.location.still;
	const bgCSS = { backgroundImage: `url('${currBgImg}')`, };
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [storyMode, setStoryMode] = useState(false);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);

	if (props.location.state !== "start")
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
		if (props.page.current.classList.contains("story-mode"))
		{
			setStoryMode(true);
			setIsPlaying(true);
		} else
		{
			setStoryMode(false);
			setIsPlaying(false);
		}

		//? If the video is ending in 1.5s start hiding the title
		if (
			props.location.state !== "start" &&
			videoRef.current.duration - currentTime <= 1.5
		)
		{
			document.querySelector(".title-block").classList.add("reveal-hide");
		}
		props.routeCallback({ "time": currentTime, "duration": duration });
	};
	const handleDurationChange = () =>
	{
		setDuration(videoRef.current.duration);
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
		//? If on home page or page is refreshed, reveal quote
		if (props.location.state === "start" || !props.popstate)
		{
			revealQuote();
			console.log("yup");
		}

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
			style={bgCSS}
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
				style={!props.popstate && props.location.state !== "start" ? { "opacity": 0 } : {}}
			/>
			<div
				ref={placeholderRef}
				id="VideoPlaceholder"
				className="video-placeholder"
				style={{ ...bgCSS, width: dimensions.width, height: dimensions.height }}
			/>
		</motion.div>
	);
};
export default Video;
