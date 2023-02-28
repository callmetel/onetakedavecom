import { motion } from "framer-motion";

const Discover = (props) => {
	return (
		<motion.div className="discover" data-state={props.state}>
			<div className="discover-content">Discover Content</div>
			<div className="discover-transition"></div>
		</motion.div>
	);
};
export default Discover;
