import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
const SceneTransition = ({ children }) =>
{
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
					onAnimationStart={(definition) =>
					{
						if (definition === "inactive" && children.props.popstate)
						{
							document
								.querySelectorAll(".page")
								.forEach((page) => page.classList.add("story-mode"));
						}
					}}
					onAnimationComplete={(definition) =>
					{
						console.log("Completed animating", definition);
						if (definition === "fadeOut")
						{
							// document.querySelectorAll(".page").forEach((page) => page.classList.add("story-mode"));
						}

						if (definition === "inactive")
						{
							console.log("inactive");
							// document.querySelector(".page").classList.add("story-mode");
						}
					}}>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default SceneTransition;
