import React from 'react';

class EduInfo extends React.Component{
	render(){
		return(
			<div>
			    <div className="form-group">
			      <label htmlFor="degree">Degree</label>
			      <input type="text" className="form-control" id="degree" placeholder="Drop Down Here"/>
			    </div>

			    <div className="form-group">
			      <label htmlFor="inst">Institute</label>
			      <input type="text" className="form-control" id="institute" placeholder="Institute Name"/>
			    </div>
			    <div className="form-group">
			      <label htmlFor="dateStart">Start Date</label>
			      <input type="date" className="form-control" id="dateEduStart" />
			    </div>
			    <div className="form-group">
			      <label htmlFor="dateFinish">Finish Date</label>
			      <input type="date" className="form-control" id="dateEduFinish"/>
			    </div>
			</div>
		);
	}
}

export default EduInfo;
