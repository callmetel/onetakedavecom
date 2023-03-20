import { motion } from "framer-motion";
import {useEffect} from "react";

const Title = (props) => {
	useEffect(() => {
		if (sessionStorage.getItem("routerPushTriggered") === "true") {
			setTimeout(function() {
				document.querySelector(".title").classList.add("fadeIn");
				document.querySelector(".title-block").classList.add("reveal");
			},2500);
		}
	});
	
return (
	<motion.div
		className="title"
		initial={{ opacity: 0 }}>
		<h2 className="title-block block block-revealer">
			<span className="text block-revealer__content">{props.title}</span>
			<span className="wipe block-revealer__element"></span>
		</h2>
	</motion.div>
);
}
export default Title;
