import { motion } from "framer-motion";

const Discover = (props) =>
{
	// console.log(props.isOpen);
	return (
		<motion.div layout
			animate={{ scale: props.isOpen ? 1 : 0 }}
			transition={{
				opacity: { ease: "linear" },
				layout: { duration: 0.3 }
			}}
			className="Discover"
			data-state={props.state}>
			<div className="DiscoverContent">Discover Content</div>
			<div className="discover-transition"></div>
		</motion.div>
	);
};
export default Discover;
