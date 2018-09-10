import React from 'react';

class ExpInfo extends React.Component{
	render(){
		return(
			<div>
				<div className="form-group">
			      <label htmlFor="company">Company</label>
			      <input type="text" className="form-control" id="company" placeholder="Company" disabled={this.props.att}/>
			    </div>

			    <div className="form-group">
			      <label htmlFor="position">Position</label>
			      <input type="text" className="form-control" id="position" placeholder="Position"/>
			    </div>
			    <div className="form-group">
			    	<label htmlFor="description">Job Description</label>
			    	<textarea className="form-control" id='description' placeholder="Brief description of your role" rows="5"/>
			    </div>
			    <div className="form-group">
			      <label htmlFor="dateStart">Start Date</label>
			      <input type="date" className="form-control" id="dateExpStart" />
			    </div>
			    <div className="form-group">
			      <label htmlFor="dateFinish">Finish Date</label>
			      <input type="date" className="form-control" id="dateExpFinish"/>
			    </div>
			</div>
		);
	}
}

export default ExpInfo;