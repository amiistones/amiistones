import { useLoaderData } from "react-router-dom";

function Game() {
	const amiiboList = useLoaderData();

	return (
		<>
			<h1>Stage</h1>
		</>
		);
}

export default Game;
