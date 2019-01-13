import React,{Component} from 'react';
import FramingWords from './FramingWords';


class App extends Component{
	constructor(){
		super();
		this.state={
			doRandom: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		event.preventDefault();
		this.setState({doRandom:true})
	}
	render(){


		return(
			<div>
				<fieldset>
    				<legend>Complete if applies to person or entity:</legend>
    				<label>Role</label>
        			<input type="text" name="Role" value={props.data.Role} /><br />
        			<label>Occupation</label>
        			<input type="text" name="Occupation" value={props.data.Occupation} /><br />
        			<label>Town</label>
        			<input type="text" name="Town" value={props.data.Town} /><br />
        			<label>City</label>
        			<input type="text" name="City" value={props.data.City} /><br />
        			<label>County</label>
        			<input type="text" name="County" value={props.data.County} /><br />
        			<label>State</label>
        			<input type="text" name="State" value={props.data.State} /><br />
        			<label>Nation</label>
        			<input type="text" name="Nation" value={props.data.Nation} /><br />
        			<label>Community</label>
        			<input type="text" name="Community" value={props.data.Community} /><br />
        			<label>Organization</label>
        			<input type="text" name="Organization" value={props.data.Organization} /><br />
    			</fieldset>	
    			<fieldset>
    				<legend>Product for challenge:</legend>
    				<label>Product</label>
        			<input type="text" name="Product" value={props.data.Product} /><br />
        		</fieldset>	
				<FramingWords doRandom={this.state.doRandom}/>
				<form>
					<button className="primary" onClick={this.handleClick}>Generate</button>
	      		</form>
			</div>
		)
	}
}


export default App;