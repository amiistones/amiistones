import { useLoaderData } from "react-router-dom";

import PropTypes from "prop-types";

import Stage from '../coponents/Stage.jsx';

function Game(props) {
	document.title = `Game - Amiistones`;
	
	const amiiboList = useLoaderData();
	const { teamsColors, currentTeams } = props;
	const currentTeamTurnIndex = Math.floor(Math.random() * currentTeams.length);
	const currentTeamTurn = currentTeams[currentTeamTurnIndex];

	return (
		<>
		<div className="scoreDisplay" style={{background: `linear-gradient(125deg, ${teamsColors[currentTeams[0]]} 50%, ${teamsColors[currentTeams[1]]} 50%)`}}>
			<p>11</p>
			<p>03</p>
		</div>
		<h1 className="turnDisplay">Team turn: <span style={{color: teamsColors[currentTeamTurn]}}>
		{currentTeamTurn.charAt(0).toUpperCase() + currentTeamTurn.slice(1)}</span></h1> 
			<Stage
			teamsColors={teamsColors}
			currentTeams={currentTeams}
			currentTeamTurn={currentTeamTurn}/>
		</>
		);
}

Game.propTypes = {
	teamsColors: PropTypes.shape({
		red: PropTypes.string.isRequired,
		blue: PropTypes.string.isRequired,
		green: PropTypes.string,
		yellow: PropTypes.string,
		default: PropTypes.string.isRequired,
	}).isRequired,
	currentTeams: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Game;
