import { Link } from "react-router-dom";

import StageSize from '../coponents/StageSize.jsx';

import StageSizeContext, { StageSizeContextProvider } from '../context/StageSizeContext.jsx';

function Settings () {
	document.title = "Settings - Amiistones";
	return (
		<>
			<h1>Stage Settings</h1>
			<nav className="returnButton linkButtons">
				<Link to="/">{'<'}</Link>
			</nav>
			<StageSizeContextProvider>
			<StageSize />
			</StageSizeContextProvider>
		</>
		);
}

export default Settings;
