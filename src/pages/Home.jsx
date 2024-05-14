import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<h1>Amiistones</h1>
			
			<div>
				<Link to="/game">Play</Link>
				<Link to="/settings">Settings</Link>
			</div>

			<div>
				<Link to="/guide">How to play ?</Link>
				<Link to="/about">About</Link>
			</div>
		</>
		);
}

export default Home;
