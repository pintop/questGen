import React from 'react';

function Product(props){
	console.log(props.data);
	return(
		<div className="stem product">
			{props.data}
		</div>
	)
}

export default Product;