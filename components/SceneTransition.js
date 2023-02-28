import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
	fadeIn: {
		y: 0,
		opacity: 0,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
	inactive: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
	fadeOut: {
		opacity: 0,
		y: 0,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */
const SceneTransition = ({ children }) => {
	const { asPath } = useRouter();
	const shouldReduceMotion = useReducedMotion();

	return (
		<div className="scene-transition">
			<AnimatePresence initial={false}>
				<motion.div
					key={asPath}
					variants={variants}
					initial="fadeIn"
					animate={["inactive"]}
					exit={["fadeOut"]}
					onAnimationStart={(definition) => {
						console.log("Started animating", definition);
						if (definition === "fadeOut") {
							document.querySelector(".page").classList.add("story-mode");
						}
					}}
					onAnimationComplete={(definition) => {
						console.log("Completed animating", definition);

						if (definition === "inactive") {
							// document.getElementById("SceneVideo").play();
							console.log(document.getElementById("SceneVideo"));
							document.getElementById("SceneVideo").addEventListener('canplay', (event) => { 
								console.log("can play");
							});
						}
					}}>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default SceneTransition;
