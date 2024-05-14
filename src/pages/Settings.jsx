import { Link } from "react-router-dom";

import StageSize from '../coponents/StageSize.jsx';

import StageSizeContext, { StageSizeContextProvider } from '../context/StageSizeContext.jsx';

function Settings () {
	return (
		<>
			<Link to="/">{'< Return Home'}</Link>
			<h1>Stage Settings</h1>
			<StageSizeContextProvider>
			<StageSize />
			</StageSizeContextProvider>
		</>
		);
}

export default Settings;
