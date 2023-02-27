import { motion } from "framer-motion";

const Discover = (props) => {
	return (
		<motion.div className="discover" data-state={props.state}>
			<div className="content">Discover Content</div>
			<div className="transition"></div>
		</motion.div>
	);
};
export default Discover;
