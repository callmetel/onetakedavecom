import { useState,useRef } from "react";
import Nav from "../components/Nav";
import SceneTransition from "../components/SceneTransition";
import "../styles/_app.scss";

function MyApp({ Component, pageProps }) {
  const FullVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const VideoRef = useRef(null);
    const showContent = () => {
		console.log("show content");
	};
	return (
			<video
        ref={VideoRef}
				id="main-video"
				src={`${process.env.sceneVideoURL}otd-site-vid-2-opt.mp4`}
				preload="auto"
				playsInline
				onEnded={showContent}
			/>
	);
};
	return (
		<div className="app-container">
			<SceneTransition>
				<Component {...pageProps} />
			</SceneTransition>
		</div>
	);
}

export default MyApp;
