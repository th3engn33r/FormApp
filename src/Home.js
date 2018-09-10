import React from 'react';
import Store from './Store';
import { browserHistory } from 'react-router'

class Home extends React.Component {

	constructor(props){
		super(props);
		this.err="";
	}

	onFormSubmit(evt){
		if((evt.target.email.value === Store.getState().email) && (evt.target.pwd.value === Store.getState().pwd) ){
			//if email & passwod are correct
			const nextPage = "p";
			browserHistory.push(nextPage);
			//this.err=" ";
		}else {
			//if they are wrong, create a variable err & value ="..." 
			// create error message here
			this.err= "Please Check Email & Password";
			// I tried 
		}
		
		evt.preventDefault();
	};
	
	render(){
	
		return( 
			<div className="row">
		        <br />
		        <br />
		        <br />
		        <br />
		        <br />
		        <br />
		        <br />
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<fieldset>
						//Want to display error message here
						{this.err}
					  <form onSubmit={this.onFormSubmit}>
					    <div className="form-group">
					      <label>Email</label>
					      <input type="email" className="form-control" id="email" placeholder="Enter email"/>
					    </div>
					    <div className="form-group">
					      <label>Password</label>
					      <input type="password" className="form-control" id="pwd" placeholder="Enter password"/>
					    </div>
					    <div className="checkbox">
					      <label><input type="checkbox"/> Remember me</label>
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

export default Home;