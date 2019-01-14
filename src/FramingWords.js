import React, {Component} from 'react';

function FramingWords(props){
	
	const framers = ['How can', 'How do', 'Should', 'Could', 'What'];
	const ran = Math.floor(Math.random() * 5);
	let current = props.doRandom ? framers[ran] : '';
	
	return(
		<div className="stem framing">
			{current}
		</div>
	)
}


export default FramingWords;