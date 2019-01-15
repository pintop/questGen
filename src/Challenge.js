import React from 'react';


function Challenge(props){
	const actions = ['Build','Create', 'Make', 'Design', 'Plan', 'Solve', 'Write', 'Propose', 'Decide'];
	let ran = Math.floor(Math.random() * actions.length);
	let current = props.doRandom ? actions[ran]: '';

	return(
		<div className="stem action">
			{current} 
		</div>
	)
}


export default Challenge;