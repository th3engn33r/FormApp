import React from 'react';
import Store from './Store';
import {browserHistory} from 'react-router';

import EduInfo from './EduInfo';

class EduForm extends React.Component {

	constructor(props){
		super(props);
		this.i = 1;
		this.state = {
			eduInfo  : [<EduInfo key={this.i}/>]
		}
	}

	onFormSubmit(evt){
		console.log(evt.target);
		const info = {
			type : 'ADD',
			data : [[evt.target.degree.value, evt.target.institute.value, evt.target.dateEduStart.value, evt.target.dateEduFinish.value]]
		}
		Store.dispatch(info);
		console.log(Store.getState().data);

		const nextPage = 'ex';
		browserHistory.push(nextPage);
		evt.preventDefault();
	};

	handleAddForm(evt){
		if(this.state.eduInfo.length < 2){
			this.setState(previousState => ({
				eduInfo : [...previousState.eduInfo, <EduInfo />]
			}))
		}
	}

	render(){
		return( 
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<fieldset>
					  <form onSubmit={this.onFormSubmit}>
						<div className="form-group">
						    <h4><center><b>Education</b></center></h4>
						</div>
						{this.state.eduInfo}
					    <center><input type='button' className="btn btn-default" onClick={this.handleAddForm.bind(this)} value=' + ' /></center>
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

export default EduForm;