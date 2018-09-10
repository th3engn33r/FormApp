import React from 'react';
import {browserHistory} from 'react-router';

class SkillForm extends React.Component{

	onFormSubmit(evt){
		const nextPage = 't';
		browserHistory.push(nextPage);
		evt.preventDefault();
	};

	render(){
		return(
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<fieldset>
						<form onSubmit={this.onFormSubmit}>
					    	<div className="form-group">
					    		<h4><center><b>Skills</b></center></h4>
					    	</div>
				    		<div className="form-group">
				    			<label className="sr-only" htmlFor="skills">Skills</label>
				    			<textarea rows="3" name="skills" placeholder="Please enter your skils seperated by ; " className="form-control"/>
				    		</div>
					    	<button className="btn btn-default" type='submit'>Submit</button>
						</form>
					</fieldset>
				</div>
				<div className="col-md-4"></div>
			</div>
		);
	}
}

export default SkillForm;