import { Link } from "react-router-dom";

function Guide() {
	document.title = "Guide - Amiistones";
	return (
		<>
			<h1>Game rules</h1>
			<nav className="returnButton linkButtons">
				<Link to="/">{'<'}</Link>
			</nav>
		</>
		);
}

export default Guide;
