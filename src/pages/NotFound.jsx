import { Link } from "react-router-dom";

function NotFound() {
	return (
		<>
			<h1>Error: 404</h1>
			<h2>Not Found</h2>
			<p>Return to the <Link to="/">Home page</Link></p>
		</>
		);
}

export default NotFound;
