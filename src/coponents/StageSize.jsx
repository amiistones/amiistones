import React, { useContext } from "react";

import StageSizeContext from '../context/StageSizeContext.jsx';

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


function StageSize () {
	
	const {minValue, maxValue, maxGap,
		x, y, updateSizeX, updateSizeY} = useContext(StageSizeContext);

	const updateValue = (action) => {

		if (action.value !== undefined && action.type !== undefined) {
		    
			switch (action.value) {
				case 'x':
					switch (action.type) {
						case INCREMENT:
							if (x < maxValue) {
								updateSizeX(x + 1);
								if ((x - y) >= maxGap) {
									updateValue({value: 'y', type: INCREMENT});
								}
							}
							break;
						case DECREMENT:
							if (x > minValue) {
								updateSizeX(x - 1);
								if ((y - x) >= maxGap) {
									updateValue({value: 'y', type: DECREMENT})
								}
							}
							break;
						default:
							console.log('ERROR: Unknown type of action on updateValue')
							break;
					}
					break;

				case 'y':
					switch (action.type) {
						case INCREMENT:
							if (y < maxValue) {
								updateSizeY(y + 1);
								if ((y - x) >= maxGap) {
									updateValue({value: 'x', type: INCREMENT});
								}
							}
							break;
						case DECREMENT:
							if (y > minValue) {
								updateSizeY(y - 1);
								if ((x - y) >= maxGap) {
									updateValue({value: 'x', type: DECREMENT})
								}
							}
							break;
						default:
							console.log('ERROR: Unknown type of action on updateValue')
							break;
					}
					break;

				default:
					console.log('ERROR: Unknown value on updateValue');
					break;
			}
		}
	}

	return (
		<>
			<div className="sizeSelector">
				<p>Number of turns: {x * y}</p>
				<div>
					{x === minValue ?
					<button disabled>{'<'}</button>
					:
					<button onClick={() => updateValue({value: 'x', type: DECREMENT})}>{'<'}</button>
					}

					<p>X (Width): {x}</p>

					{x === maxValue ?
					<button disabled>{'>'}</button>
					:
					<button onClick={() => updateValue({value: 'x', type: INCREMENT})}>{'>'}</button>
					}
				</div>
				<div>
					{y === minValue ?
					<button disabled>{'<'}</button>
					:
					<button onClick={() => updateValue({value: 'y', type: DECREMENT})}>{'<'}</button>
					}

					<p>Y (Height): {y}</p>
					
					{y === maxValue ?
					<button disabled>{'>'}</button>
					:
					<button onClick={() => updateValue({value: 'y', type: INCREMENT})}>{'>'}</button>
					}
				</div>
			</div>
		</>
		);
}

export default StageSize;
