import { motion } from "framer-motion";

const Title = (props) => (
	<motion.div className="title">
		<h2 className="title-block">
			<span className="text">{props.title}</span>
			<span className="wipe"></span>
		</h2>
	</motion.div>
);
export default Title;
