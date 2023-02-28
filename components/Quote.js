import { motion } from "framer-motion";

const Quote = (props) => {
	const container = {
		hidden: { opacity: 0,x:-30 },
		show: {
			opacity: 1, x:0,
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	return (
		<motion.div
			className="quote"
			variants={container}
			initial="hidden"
			animate="show">
			{Object.values(props).map((block, index) => (
				<p key={index} className="block" variants={item}>
					<span className="line">{block}</span>
					<span className="wipe"></span>
				</p>
			))}
		</motion.div>
	);
};
export default Quote;
