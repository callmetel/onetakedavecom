import { motion } from "framer-motion";

const Quote = (props) => (
	<motion.div className="quote">
		{Object.values(props).map((block, index) => (
			<p key={index} className="block">
				<span className="line">{block}</span>
				<span className="wipe"></span>
			</p>
		))}
	</motion.div>
);
export default Quote;
