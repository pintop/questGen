import React,{Component} from 'react';
import FramingWords from './FramingWords';
import Who from './Who';

class App extends Component{
	constructor(){
		super();
		this.state={
			doRandom: false,
			role:'',
			occupation: '',
			town:'',
			city:'',
			county: '',
			thestate: '',
			nation: '',
			community: '',
			organization: '',
			product: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		this.setState({doRandom:true})
	}

	handleChange(event){
		event.preventDefault();
		const {name, value} = event.target;
		this.setState({
			doRandom: false,
			[name]: value
		})
	}

	render(){


		return(
			<div>
				<fieldset>
    				<legend>Complete if applies to person or entity</legend>
    				<label>Role</label>
        			<input type="text" name="role" value={this.state.role} onChange={this.handleChange} /><br />
        			<label>Occupation</label>
        			<input type="text" name="occupation" value={this.state.occupation} onChange={this.handleChange} /><br />
        			<label>Town</label>
        			<input type="text" name="town" value={this.state.town} onChange={this.handleChange} /><br />
        			<label>City</label>
        			<input type="text" name="city" value={this.state.city} onChange={this.handleChange} /><br />
        			<label>County</label>
        			<input type="text" name="county" value={this.state.county} onChange={this.handleChange} /><br />
        			<label>State</label>
        			<input type="text" name="thestate" value={this.state.thestate} onChange={this.handleChange} /><br />
        			<label>Nation</label>
        			<input type="text" name="nation" value={this.state.nation} onChange={this.handleChange} /><br />
        			<label>Community</label>
        			<input type="text" name="community" value={this.state.community} onChange={this.handleChange} /><br />
        			<label>Organization</label>
        			<input type="text" name="organization" value={this.state.organization} onChange={this.handleChange} /><br />
    			</fieldset>	
    			<fieldset>
    				<legend>Product for challenge:</legend>
    				<label>Product</label>
        			<input type="text" name="product" value={this.state.product} onChange={this.handleChange} /><br />
        		</fieldset>
        		<section>	
					<FramingWords 
						doRandom={this.state.doRandom}
					/>
					<Who 
						doRandom={this.state.doRandom}
						data={this.state} 
					/>
				</section>
				<form>
					<button className="primary" onClick={this.handleSubmit}>Generate</button>
	      		</form>
			</div>
		)
	}
}


export default App;