import { motion, stagger, animate, useAnimate } from "framer-motion";
import { useRef, useEffect } from "react";

const useDiscoverAnimation = (isOpen) =>
{
	const [scope, animate] = useAnimate();
	const OpeningSequence = [
		[scope.current, { y: ["100%", "0%"] }, { duration: .3, ease: "easeInOut" }],
		[".DiscoverContent", { background: ["#fff", "#000"] }, { duration: 0.1, ease: "easeInOut" }],
		[scope.current, { scaleX: [0.001, 1] }, { duration: .4, at: "<", ease: "easeInOut" }],
		[".HeaderImg img", { opacity: [0, 1], y: ["-20%", "0%"] }, { duration: 0.75, delay: stagger(0.2), ease: "easeInOut", at: 0.75 }],
		[".CloseDiscover .line", { scaleX: [0, 1], transformOrigin: "left" }, { duration: 0.3, ease: "easeInOut", delay: -0.75 }],
		[".CloseDiscover .text", { opacity: [0, 1] }, { duration: 0.5, ease: "easeInOut", delay: -0.5 }],
	];

	const ClosingSequence = [
		[".CloseDiscover .text", { opacity: [1, 0] }, { duration: 0.4, ease: "easeInOut" }],
		[".CloseDiscover .line", { scaleX: [1, 0], transformOrigin: "left" }, { duration: 0.3, ease: "easeInOut", at: "<" }],
		[".HeaderImg img", { opacity: [1, 0], y: ["0%", "-20%"] }, { duration: 0.75, delay: stagger(0.2, { from: "last" }), ease: "easeInOut" }],
		[scope.current, { scaleX: [1, 0.001] }, { duration: .4, ease: "easeInOut" }],
		[".DiscoverContent", { background: ["#000", "#fff"] }, { duration: 0.001, ease: "easeInOut" }],
		[scope.current, { y: ["0%", "100%"] }, { duration: .3, at: "<", ease: "easeInOut" }],
	];

	useEffect(() =>
	{
		if (isOpen)
		{
			animate(OpeningSequence);
		}
		else
		{
			animate(ClosingSequence);
		}
	}, [isOpen]);
	return scope;
}

const Discover = (props) =>
{
	// console.log(props.isOpen);
	const scope = useDiscoverAnimation(props.isOpen);
	const closeDiscover = () =>
	{
		props.discoverCallback(false);
	};
	return (
		<div
			ref={scope}
			className="Discover"
			data-state={props.state}>
			<div className="DiscoverContent" ref={props.forwardedRef}>
				<button className="CloseDiscover" onClick={closeDiscover}><span className="line"></span><span className="text">Back</span></button>
				<div className="Inner">
					{props.children}
				</div>
			</div>
		</div>
	);
};
export default Discover;
