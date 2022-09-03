import React from "react";
import "./skill-row-slide-left.styles.scss";

import { useInView } from "react-intersection-observer";

import contract from "../../../../images/contract.png";

const SkillRowSlideLeft = () => {
	const { ref, inView } = useInView({
		threshold: 0.8,
		triggerOnce: true,
	});

	return (
		<div className="skill-row">
			<img ref={ref} className="skill-img" src={contract} alt="Book" />
			{inView ? (
				<div
					className={`skill-row-text-left ${
						inView ? "animate-skill-row-text-left" : null
					}`}
				>
					<h3>Story Analysis and Communication</h3>
					<p className="skill-description">
						My many years as an actor and writer have taught me how to find
						clear, focused, and engaging ways of communicating ideas, emotions,
						and stories. These skills allow me to understand and integrate the
						needs and desires of clients, collaborators, and co-workers into
						clean and concise code.{" "}
					</p>
				</div>
			) : null}
		</div>
	);
};

export default SkillRowSlideLeft;
