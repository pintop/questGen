import React from 'react';



function FormComponent(props){
	return(
		<form>
			<fieldset className="entity">
				<legend>Complete if applies to person or entity</legend>
				<div><label>Role</label>
    			<input type="text" name="role" value={props.data.role} onChange={props.handleChange} /></div>
    			<div><label>Occupation</label>
    			<input type="text" name="occupation" value={props.data.occupation} onChange={props.handleChange} /></div>
    			<div><label>Town</label>
    			<input type="text" name="town" value={props.data.town} onChange={props.handleChange} /></div>
    			<div><label>City</label>
    			<input type="text" name="city" value={props.data.city} onChange={props.handleChange} /></div>
    			<div><label>County</label>
    			<input type="text" name="county" value={props.data.county} onChange={props.handleChange} /></div>
    			<div><label>State</label>
    			<input type="text" name="thestate" value={props.data.thestate} onChange={props.handleChange} /></div>
    			<div><label>Nation</label>
    			<input type="text" name="nation" value={props.data.nation} onChange={props.handleChange} /></div>
    			<div><label>Community</label>
    			<input type="text" name="community" value={props.data.community} onChange={props.handleChange} /></div>
    			<div><label>Organization</label>
    			<input type="text" name="organization" value={props.data.organization} onChange={props.handleChange} /></div>
			</fieldset>	
			<fieldset>
				<legend>Product for challenge:</legend>
				<div><label>Product</label>
    			<input type="text" name="product" value={props.data.product} onChange={props.handleChange} /></div>
    		</fieldset>
    		<button className="primary" onClick={props.handleSubmit}>Generate</button>
	    </form>
	)
}

export default FormComponent

