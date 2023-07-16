import { motion } from "framer-motion";
import { useState, useEffect, useRef, useReducer } from "react";

const reducer = (state, action) =>
{
	switch (action.type)
	{
		case 'dimensions': {
			return {
				...state,
				dimensions: {
					width: state.videoElement?.current?.getBoundingClientRect()?.width,
					height: state.videoElement?.current?.getBoundingClientRect()?.height,
				}
			};
		}
		case 'ready': {
			return {
				...state,
				isReady: true
			};
		}
		case 'playing': {
			if (state.isReady)
			{
				return {
					...state,
					isPlaying: true
				};
			}
			return state;
		}
		case 'ended': {
			if (state.videoElement?.current?.currentTime === state.videoElement?.current?.duration)
			{
				return {
					...state,
					isPlaying: false
				};
			}
			return state;
		}
		case 'skip': {
			if (state.videoElement?.current)
			{
				state.videoElement.current.pause();
				state.videoElement.current.currentTime = state.videoElement.current.duration;
			}
			return {
				...state,
				isPlaying: false
			};
		}
		case 'current_time': {
			return {
				...state,
				currentTime: state.videoElement?.current?.currentTime
			};
		}
		case 'duration': {
			return {
				...state,
				duration: state.videoElement?.current?.duration
			};
		}
		case 'muted': {
			return {
				...state,
				isMuted: state.videoElement?.current?.muted
			};
		}
		case 'video': {
			return {
				...state,
				videoElement: React.MutableRefObject
			};
		}
	}
	throw Error('Unknown action: ' + action.type);
}

const getInitialState = (element) => ({
	dimensions: { width: 0, height: 0 },
	isPlaying: false,
	currentTime: 0,
	duration: 0,
	isMuted: false,
	videoElement: element
});

const Video = (props) =>
{
	const placeholderRef = useRef();
	const currBgImg = !props.routeChanged ? props.location.endstill : props.location.still;
	const bgCSS = { backgroundImage: `url('${currBgImg}')`, };
	const videoElement = useRef(null);
	const [state, send] = useReducer(
		reducer,
		getInitialState(videoElement)
	);
	const dimensions = () => state.dimensions;
	const isReady = () => state.isReady;
	const isPlaying = () => state.isPlaying;
	const isSkip = () => state.isSkip;
	const currentTime = () => state.currentTime;
	const duration = () => state.duration;
	const isMuted = () => state.isMuted;

	// if (props.location.state !== "start")
	// console.log(props);

	const handleTimeUpdate = () =>
	{
		send({ type: "current_time" });
		send({ type: "playing" });

		//? If the video is ending in 1.5s start hiding the title
		if (
			(props.location.state !== "start" &&
				(videoElement?.current?.duration - currentTime() <= 1.5) || !isPlaying())
		)
		{
			document.querySelector(".title-block").classList.add("reveal-hide");
		}

		//* Update Time for Parent Component
		props.routeCallback({ "time": currentTime(), "duration": duration(), "video": videoElement?.current });
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
		console.log("show content");
		send({ type: "dimensions" });

		placeholderRef.current.style.width = dimensions().width;
		placeholderRef.current.style.height = dimensions().height;

		document.querySelector(
			".video-placeholder"
		).style.backgroundImage = `url('${props.location.endstill}')`;
		revealQuote();
		setTimeout(function ()
		{
			videoElement.current.style.opacity = 0;
		}, 500);
	};

	const onEndedFn = () =>
	{
		send({ type: "ended" });
		props.page.current.classList.remove("story-mode");
		showContent();
	};

	useEffect(() =>
	{
		//? If on home page or page is refreshed, reveal quote
		if (props.location.state === "start" || !props.routeChanged)
		{
			revealQuote();
		}

		if (videoElement.current)
		{
			send({ type: "dimensions" });
			if (!props.routeChanged && !isNaN(videoElement.current.duration))
			{
				videoElement.current.currentTime = videoElement.current.duration;
			}
		}

		if (
			!props.routeChanged &&
			!isPlaying &&
			props.location.state !== "start"
		)
		{
			const vidDuration = props.routeChanged
				? document.getElementById("SceneVideo").duration
				: videoElement.current.duration;
			showContent();
			setStoryMode(false);
			handleSeek(vidDuration);
		}

		const handleResize = () =>
		{
			if (videoElement.current)
				send({ type: "dimensions" });
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
				ref={videoElement}
				data-video={props.location.state}
				id="SceneVideo"
				src={props.location.vid}
				className={`video video-${props.location.state}`}
				preload="auto"
				placeholder={props.location.still}
				playsInline
				onEnded={onEndedFn}
				onTimeUpdate={handleTimeUpdate}
				onLoadedMetadata={() => send({ type: "duration" })}
				onCanPlay={() => send({ type: "ready" })}
				autoPlay={props.routeChanged ? true : false}
				loop={props.location.state === "start" ? true : false}
				muted={props.location.state === "start" ? true : false}
				style={!props.routeChanged && props.location.state !== "start" ? { "opacity": 0 } : {}}
			/>
			<div
				ref={placeholderRef}
				id="VideoPlaceholder"
				className="video-placeholder"
				style={{ ...bgCSS, width: dimensions().width, height: dimensions().height }}
			/>
		</motion.div>
	);
};
export default Video;
