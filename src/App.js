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
        			<input type="text" name="Role" value="" /><br />
        			<label>Occupation</label>
        			<input type="text" name="Occupation" value="" /><br />
        			<label>Town</label>
        			<input type="text" name="Town" value="" /><br />
        			<label>City</label>
        			<input type="text" name="City" value="" /><br />
        			<label>County</label>
        			<input type="text" name="County" value="" /><br />
        			<label>State</label>
        			<input type="text" name="State" value="" /><br />
        			<label>Nation</label>
        			<input type="text" name="Nation" value="" /><br />
        			<label>Community</label>
        			<input type="text" name="Community" value="" /><br />
        			<label>Organization</label>
        			<input type="text" name="Organization" value="" /><br />
    			</fieldset>	
    			<fieldset>
    				<legend>Product for challenge:</legend>
    				<label>Product</label>
        			<input type="text" name="Product" value="" /><br />
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