import React, {Component} from 'react';

function FramingWords(props){
	
	const framers = ['How can', 'How do', 'Should', 'Could', 'What'];
	const ran = Math.floor(Math.random() * 5);
	let current = framers[ran];
	return(
		<section>
			<p>Framing Words</p>
			<div>{current}</div>
		</section>
	)
}


export default FramingWords;