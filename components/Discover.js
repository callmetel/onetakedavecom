import { motion } from "framer-motion";

const Discover = (props) =>
{
	// console.log(props.isOpen);
	const OpenCloseAnimations = props.isOpen ?
		{
			y: 0,
			scaleX: 1,
			transformOrigin: "top"
		}
		: {
			y: "100%",
			scaleX: 0.001,
			transformOrigin: "top"
		};
	const OpenCloseTransitions = props.isOpen ?
		{
			y: { duration: .3 },
			scaleX: { duration: .4, delay: .4 },
		}
		: props.routeChanged ?
			{
				y: { duration: 0 },
				scaleX: { duration: 0 },
			}
			: {
				y: { duration: .3, delay: .5 },
				scaleX: { duration: .4 },
			};
	return (
		<motion.div layout
			animate={OpenCloseAnimations}
			transition={OpenCloseTransitions}
			className="Discover"
			data-state={props.state}>
			{props.children}
		</motion.div>
	);
};
export default Discover;
