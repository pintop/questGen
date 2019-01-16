import React from 'react';

function Product(props){
	let current = props.data ? (
		<div className="stem product">
			{props.data}
		</div>
		):(
			null
		)

	return(current)
}

export default Product;