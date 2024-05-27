import { Link } from "react-router-dom";

function Home() {
	document.title = "Home - Amiistones";
	return (
		<>
			<h1>Amiistones</h1>
			
			<nav className="homeButtons linkButtons">
				<div className="gameButtons">
					<Link to="/game">Play</Link>
					<Link to="/settings">Settings</Link>
				</div>

				<div className="miscButtons">
					<Link to="/guide">Rules</Link>
					<Link to="/about">About</Link>
				</div>
			</nav>
		</>
		);
}

export default Home;
