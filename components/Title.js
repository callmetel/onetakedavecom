import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Title = (props) =>
{
	const titleRef = useRef(null);
	const titleBlockRef = useRef(null);
	useEffect(() =>
	{
		if (props.routeChanged)
		{
			setTimeout(() =>
			{
				if (titleRef.current)
					titleRef.current.classList.add("fadeIn");
				if (titleBlockRef.current)
					titleBlockRef.current.classList.add("reveal");
			}, 2500);
		}
	});

	return (
		<motion.div
			className="title"
			ref={titleRef}
			initial={{ opacity: 0 }}>
			<h2 ref={titleBlockRef} className="title-block block block-revealer">
				<span className="text block-revealer__content">{props.title}</span>
				<span className="wipe block-revealer__element"></span>
			</h2>
		</motion.div>
	);
}
export default Title;
