import React from 'react';

function Who(props){
	let entity = ['I', 'We'];

	props.data.role ? entity.push(props.data.role) : null;
	props.data.occupation ? entity.push(props.data.occupation) : null;
	props.data.town ? entity.push(props.data.town) : null;
	props.data.city ? entity.push(props.data.city) : null;
	props.data.county ? entity.push(props.data.county) : null;
	props.data.thestate ? entity.push(props.data.thestate) : null;
	props.data.nation ? entity.push(props.data.nation) : null;
	props.data.community ? entity.push(props.data.community) : null;
	props.data.organization ? entity.push(props.data.organization) : null;

	const ran = Math.floor(Math.random() * entity.length);
	let current = props.doRandom ? entity[ran] : '';
	return(
		<div className="stem who">
			{current}
		</div>
	)	
}

export default Who;