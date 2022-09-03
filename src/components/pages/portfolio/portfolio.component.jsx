import React from "react";
import "./portfolio.styles.scss";

import ProjectCard from "../../ProjectCard/ProjectCard";
import { Grid } from "@material-ui/core";

import diceegame from "../../../images/diceegame.png";
import drumkit from "../../../images/drumkit.png";
import blogwebsite from "../../../images/blogwebsite.png";
import memoryapp from "../../../images/memoryapp.png";
import teladog from "../../../images/teladog.png";
import secretsapp from "../../../images/secretsapp.png";

import crwnclothing from "../../../images/crwnclothing.png";
import flamingocoin from "../../../assets/flamingo-coin-screenshot.png";
import vceh from "../../../assets/vceh.png";

import { useInView } from "react-intersection-observer";

const Portfolio = () => {
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<div className="portfolio-container" id="projects">
			<div className="custom-shape-divider-top-1642097958">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						class="shape-fill"
					></path>
				</svg>
			</div>
			<div
				ref={ref}
				className={`portfolio ${inView ? "animate-portfolio" : null}`}
			>
				<h2 className="portfolio-header">My Projects</h2>
				<h3>Check out some of my completed projects!</h3>

				<Grid
					container="container"
					direction="row"
					justify="center"
					alignItems="center"
					spacing={2}
				>
					<ProjectCard
						title="Flamingo Coin Website"
						webLink="https://flamingocoin.org/"
						image={flamingocoin}
						blurb="Cryptocurrency Website"
						writtenWith="Tools: HTML, Javascript, React, Sass"
						githubLink="https://github.com/aaronbadilla/flamingo-coin"
					/>
					<ProjectCard
						title="NFT Artist Gallery"
						webLink="https://numinousrealities.com"
						image="https://storage.googleapis.com/numinous-realities/Numinous%20Realities%20-%20Title%20Page.jpg"
						blurb="NFT Gallery"
						writtenWith="Tools: React, Sass, Google Cloud Platform"
						githubLink="https://github.com/aaronbadilla/numinous-realities"
					/>
					<ProjectCard
						title="VCEH"
						webLink="https://helpingtohousevt.org/"
						image={vceh}
						blurb="Vermont Nonprofit Organization"
						writtenWith="Work: design tweaks, Wordpress maintenance, and plugin updates"
						noCode
					/>
					<ProjectCard
						title="E-Commerce Demo Site"
						webLink="https://crwn-live-aaronbadilla.herokuapp.com/"
						image={crwnclothing}
						blurb="ZTM React course master project"
						writtenWith="Tools: React, Firebase and Redux"
						githubLink="https://github.com/aaronbadilla/webdevsite"
					/>
					<ProjectCard
						title="Secrets App"
						webLink="https://aaron-secrets-app.herokuapp.com/"
						image={secretsapp}
						blurb="Share and read secrets!"
						writtenWith="Tools: Javascript, Node.Js, EJS"
						githubLink="https://github.com/aaronbadilla/secrets-app"
					/>
					<ProjectCard
						title="Teladog Website Mockup"
						webLink="https://aaronbadilla.github.io/teladog/"
						image={teladog}
						blurb='A mockup website for "Teladog"'
						writtenWith="Tools: CSS, Bootstrap."
						githubLink="https://github.com/aaronbadilla/teladog"
					/>
					<ProjectCard
						title="Memory Game Web App"
						webLink="https://aaronbadilla.github.io/memoryapp/"
						image={memoryapp}
						blurb="A zen memory game"
						writtenWith="Tools: Javascript, jQuery."
						githubLink="https://github.com/aaronbadilla/memoryapp"
					/>
					<ProjectCard
						title="Demo Blog Website"
						webLink="https://hidden-brushlands-47558.herokuapp.com/"
						image={blogwebsite}
						blurb="A website to blog about anything!"
						writtenWith="Tools: Node.js, Express, EJS"
						githubLink="https://github.com/aaronbadilla/blogwebsite"
					/>
					<ProjectCard
						title="Dice Game Web App"
						webLink="https://aaronbadilla.github.io/dicegame/"
						image={diceegame}
						blurb="A simple dice rolling game."
						writtenWith="Tools: VanillaJS."
						githubLink="https://github.com/aaronbadilla/dicegame"
					/>
					<ProjectCard
						title="Drum Kit Web App"
						webLink="https://aaronbadilla.github.io/drumkit/"
						image={drumkit}
						blurb="A keyboard controlled drum kit!"
						writtenWith="Tools: VanillaJS."
						githubLink="https://github.com/aaronbadilla/drumkit"
					/>
				</Grid>
			</div>
			<div className="custom-shape-divider-bottom-1642098124">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
						class="shape-fill"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default Portfolio;
