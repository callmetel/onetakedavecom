import { useState,useRef } from "react";
import Nav from "../components/Nav";
// import TransitionEffect1 from "../components/TransitionEffect1";
// import TransitionEffect2 from "../components/TransitionEffect2";
// import TransitionEffect3 from "../components/TransitionEffect3";
import SceneTransition from "../components/SceneTransition";
import "../styles/styles.scss";

// function MyApp({ Component, pageProps }) {
//   const [transitionEffect, setTransitionEffect] = useState(1);
//   return (
//     <div className="app-container">
//       <Nav onClick={setTransitionEffect} current={transitionEffect} />
//       {transitionEffect === 1 && (
//         <TransitionEffect1>
//           <Component {...pageProps} />
//         </TransitionEffect1>
//       )}
//       {transitionEffect === 2 && (
//         <TransitionEffect2>
//           <Component {...pageProps} />
//         </TransitionEffect2>
//       )}
//       {transitionEffect === 3 && (
//         <TransitionEffect3>
//           <Component {...pageProps} />
//         </TransitionEffect3>
//       )}
//     </div>
//   );
// }

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
