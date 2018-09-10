import React from 'react';
import Store from './Store';
import {browserHistory} from 'react-router';
import ExpInfo from './ExpInfo';

class ExpForm extends React.Component {
	constructor(props){
		super(props);
		this.i = 1;
		this.state = {
			field : {
				expInfo : [<ExpInfo key={this.i} />],
			},
			expData : [],
			att : false
		}
	}

	onFormSubmit(evt){
		const info = {
			type : 'ADD',
			data : [evt.target.company.value, evt.target.position.value, evt.target.description.value, evt.target.dateExpStart.value, evt.target.dateExpFinish.value]
		}
		Store.dispatch(info);
		console.log(Store.getState().data);
		const nextPage = 's';
		browserHistory.push(nextPage);
		evt.preventDefault();
	};

	// const createElement(Component, props){
	// 	return <Component att{...this.state.att} />
	// }

	handleAddExp(evt){
		if(evt.target.name === 'form'){
			if(this.state.field.expInfo.length < 2){		
				this.setState(previousState => ({
					field : { expInfo : [...previousState.field.expInfo, <ExpInfo key={this.i+1} />] }
				}))
			}
		}
		if(evt.target.name==='optradio'){
			this.setState({
				field : { expInfo : [<ExpInfo key={this.i} />]},
				att: true
			});
		}
	}

	// onFormSubmit(evt){
	// 	const data = [...this.state.expData];
	// 	const errors = this.validate(data);
	// 	this.setState({ errors });
	// 	evt.preventDefault();
	// 	// I was working here. Trying to setup form validation. 
	// 	// the main task is to set up validate function which would check whether insputs are empty or not
	// }

	// validate(data){
	// 	console.log(data);
	// }

	render(){
		return( 
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<fieldset>
					  <form onSubmit={this.onFormSubmit}>
					    <h4><center><b>Experience</b></center></h4>
					    <div className="form-group">
					    	<div className="form-group">
					    		<label className="radio-inline" htmlFor="optradio">
					    		<input type="radio" name="optradio" onClick={this.handleAddExp.bind(this)}/>I m new to workforce</label>
					    	</div>
					    </div>
					    {this.state.field.expInfo }
					    <center><input name='form' type='button' className="btn btn-default" onClick={this.handleAddExp.bind(this)} value=' + ' /></center>
					    <br />
					    <button className="btn btn-default" type='submit'>Next</button>
					  </form>
					</fieldset>
				</div>
				<div className="col-md-4"></div>
			</div>
		);
	}
}

export default ExpForm;