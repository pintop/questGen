import React from 'react';


function Audience(props){
	const purposes = ['RealWorld Problem','For a Public Audience', 'For a School', 'For a Classroom', 'For an Online Audience'];
	let ran = Math.floor(Math.random() * purposes.length);
	let current = props.doRandom ? purposes[ran]: '';

	return(
		<div className="stem audience">
			{current} 
		</div>
	)
}


export default Audience;