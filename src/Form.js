import React from 'react';
import Store from './Store';
import {browserHistory} from 'react-router';

class PersonalForm extends React.Component {

	handleAddForm(evt){
		//evt.target.email.className="form-control form-control-danger";
	}

	onFormSubmit(evt){
		const info = {
			type : 'ADD',
			data : [evt.target.fname.value,evt.target.lname.value,evt.target.phone.value,evt.target.email.value,evt.target.summary.value]
		}
		Store.dispatch(info);
		const nextPage = 'e';
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
					    <h4><center><b>Personal Information</b></center></h4>
					    <div className="form-group">
					      <label >First Name</label>
					      <input type="text" className="form-control" id="fname" placeholder="First Name"/>
					    </div>
					    <div className="form-group">
					      <label >Last Name</label>
					      <input type="text" className="form-control" id="lname" placeholder="Last Name"/>
					    </div>
					    <div className="form-group">
					      <label >Contact</label>
					      <input type="text" className="form-control" id="phone" placeholder="0412-123-123"/>
					    </div>
					    <div className="form-group">
					      <label >Email</label>
					      <input type="email" className="form-control" id="email" placeholder="Enter email"/>
					    </div>
					    <div className="form-group">
					      <label >Summary</label>
					      <textarea rows="4" className="form-control" id="summary" placeholder="Please tell something about yourself"></textarea>
					    </div>
					    <input type='button' className="btn btn-default" onClick={this.handleAddForm.bind(this)} value=' + ' />
					    <button className="btn btn-default" type='submit'>Next</button>
					  </form>
					</fieldset>
				</div>
				<div className="col-md-4"></div>
			</div>
		);
	}
}

export default PersonalForm;