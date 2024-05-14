import { Link } from "react-router-dom";

function About() {
	document.title = "Guide - Amiistones";
	return (
		<>
			<h1>About</h1>
			<nav className="linkButtons">
				<a href="https://github.com/amiistones/amiistones/" target="_blank">GitHub</a>
			</nav>
		</>
		);
}

export default About;
