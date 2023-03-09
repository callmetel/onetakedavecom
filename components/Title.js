import { motion } from "framer-motion";

const Title = (props) => {
	setTimeout(function(){
		if (typeof window != "undefined") {
			document.querySelector(".title-block").classList.add("reveal","alt");
		}	
	},2500);
	
return (
	<motion.div
		className="title"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.45, delay: 2.5 }}>
		<h2 className="title-block block block-revealer">
			<span className="text block-revealer__content">{props.title}</span>
			<span className="wipe block-revealer__element"></span>
		</h2>
	</motion.div>
);
}
export default Title;
