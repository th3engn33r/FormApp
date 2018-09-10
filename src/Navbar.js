import React from 'react';

class Navbar extends React.Component {
	render(){
		return(
			<div>
		      <div className="navbar navbar-inverse">
		        <div className="container-fluid">
		          <div className="navbar-header">
		            <a className="navbar-brand" href="/">CV MAKER
		            </a>
		          </div>
		          <div className="collapse navbar-collapse navbar-right">
		            <ul className="nav navbar-nav">
		              <li><a href="/">Login</a></li>
		              <li><a href="/">SignUp</a></li>
		            </ul>
		          </div>
		        </div>
		      </div>
	          <div>{this.props.children}</div>
			</div>
		);
	}	
}

export default Navbar;