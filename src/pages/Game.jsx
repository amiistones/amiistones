import { useLoaderData } from "react-router-dom";

import { StageContextProvider } from '../context/StageContext'
import { ModifiedStageProvider} from '../context/CardChange'

import Stage from '../coponents/Stage.jsx'; 

function Game() {
	const amiiboList = useLoaderData();

	return (
		<>
			<h1>Stage</h1>
			<StageContextProvider>
			<ModifiedStageProvider>
			<Stage />
			</ModifiedStageProvider>
			</StageContextProvider>
		</>
		);
}

export default Game;
