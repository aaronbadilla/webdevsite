import React from "react";
import "./employment-resources.styles.scss";
import SocialLink from "../../../social-links/social-link.component";
import resume from "../../../../images/resume.png";
import linkedin from "../../../../images/linkedin.png";
import twitter from "../../../../images/twitter.png";

import { useInView } from "react-intersection-observer";

const EmploymentResources = () => {
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	return (
		<div
			ref={ref}
			className={`employment-resources ${
				inView ? "animate-employment-resources" : null
			}`}
		>
			<SocialLink
				link="https://drive.google.com/file/d/1Nb02ZZK1bz-b7Sxmf-hXNM1yWCYATj2C/view?usp=sharing"
				image={resume}
				text="Want a more in-depth look at my skills? Check out my resume!"
				name="resume"
			/>
			<SocialLink
				link="https://www.linkedin.com/in/aaron-badilla-76076b144/"
				image={linkedin}
				text="Connect with me on LinkedIn!"
				name="linkedin"
			/>
			<SocialLink
				link="https://twitter.com/aarondbadilla"
				image={twitter}
				text="Follow along with my coding journey on Twitter!"
				name="twitter"
			/>
		</div>
	);
};

export default EmploymentResources;
