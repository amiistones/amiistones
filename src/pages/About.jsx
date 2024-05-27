import { Link } from "react-router-dom";

function About() {
	document.title = "Guide - Amiistones";
	return (
		<>
			<h1>About</h1>
			<nav className="returnButton linkButtons">
				<Link to="/">{'<'}</Link>
			</nav>
			<div className="linkButtons">
				<a href="https://github.com/amiistones/amiistones/" target="_blank">GitHub</a>
			</div>
		</>
		);
}

export default About;
