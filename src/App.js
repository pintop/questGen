import React,{Component} from 'react';
import FramingWords from './FramingWords';
import Who from './Who';
import FormComponent from './FormComponent';
import Challenge from './Challenge';
import Audience from './Audience';

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
		this.setState(prevState =>{
			return{
				doRandom: true,
				role: prevState.role,
				occupation: prevState.occupation,
				town: prevState.town,
				city: prevState.city,
				county: prevState.county,
				thestate: prevState.thestate,
				nation: prevState.nation,
				community: prevState.community,
				organization: prevState.organization,
				product: prevState.product	
			}
		})
	}

	handleChange(event){
		event.preventDefault();
		const {name, value} = event.target;
		this.setState(prevState=>{
			return{
				doRandom: true,
				role: prevState.role,
				occupation: prevState.occupation,
				town: prevState.town,
				city: prevState.city,
				county: prevState.county,
				thestate: prevState.thestate,
				nation: prevState.nation,
				community: prevState.community,
				organization: prevState.organization,
				product: prevState.product,
				[name]: value		
			}
			
			
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
					<div className="stem product">
						{this.state.product}
					</div>
					<Audience 
						doRandom={this.state.doRandom}
					/>
				</section>
			</div>
		)
	}
}


export default App;