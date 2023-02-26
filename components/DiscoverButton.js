import { motion } from "framer-motion";

const DiscoverButton = (props) => (
	<motion.button
		className="discover-btn"
		onClick={() => console.log("discover button clicked")}>
		<span>Discover</span>
	</motion.button>
);
export default DiscoverButton;
