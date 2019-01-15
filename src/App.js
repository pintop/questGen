import React,{Component} from 'react';
import FramingWords from './FramingWords';
import Who from './Who';
import FormComponent from './FormComponent';
import Challenge from './Challenge';

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
				
	      		<FormComponent 
	      			data={this.state}
	      			handleChange={this.handleChange}
	      			handleSubmit={this.handleSubmit}
	      		/>
	      		<section>	
					<FramingWords 
						doRandom={this.state.doRandom}
					/>
					<Who 
						doRandom={this.state.doRandom}
						data={this.state} 
					/>
					<Challenge
						doRandom={this.state.doRandom}
						data={this.state.product} 
					/>
				</section>
			</div>
		)
	}
}


export default App;