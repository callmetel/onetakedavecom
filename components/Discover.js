import { motion } from "framer-motion";

const Discover = (props) =>
{
	// console.log(props.isOpen);
	const OpenCloseAnimations = props.isOpen ?
		{
			x: 0,
			scaleY: 1,
		}
		: {
			x: "-100%",
			scaleY: 0.01,
		};
	const OpenCloseTransitions = props.isOpen ?
		{
			x: { duration: .3 },
			scaleY: { duration: .4, delay: .4 },
		}
		: {
			x: { duration: .3, delay: .5 },
			scaleY: { duration: .4 },
		};
	const closeDiscover = () =>
	{
		props.discoverCallback(false);
	};
	return (
		<motion.div layout
			animate={OpenCloseAnimations}
			transition={OpenCloseTransitions}
			className="Discover"
			data-state={props.state}>
			<div className="DiscoverContent">Discover Content</div>
			<div className="discover-transition"></div>
			<button className="CloseDiscover" onClick={closeDiscover}>Close</button>
		</motion.div>
	);
};
export default Discover;
