import { motion } from "framer-motion";

const Quote = (props) => (
	<div className="quote">
		{Object.values(props).map((block, index) => (
			<p key={index} className="quote-block block block-revealer hidden">
				<span className="line block-revealer__content">{block}</span>
				<span className="wipe block-revealer__element"></span>
			</p>
		))}
	</div>
);
export default Quote;
