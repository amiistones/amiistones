import { useLoaderData } from "react-router-dom";

import Stage from '../coponents/Stage.jsx'; 

function Game() {
	const amiiboList = useLoaderData();

	return (
		<>
			<h1>Stage</h1>
			<Stage />
		</>
		);
}

export default Game;
