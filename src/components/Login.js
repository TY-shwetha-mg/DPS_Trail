import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
export default class login extends React.Component {
	
	constructor() {
		super();
		this.state = {
		  email: "",
		  password: ""
		};
	  }
	
	  handleEmailChange = evt => {
		this.setState({ email: evt.target.value });
	  };
	
	  handlePasswordChange = evt => {
		this.setState({ password: evt.target.value });
	  };
	
	  handleSubmit = () => {
		const { email, password } = this.state;
		alert(`Signed up with email: ${email} password: ${password}`);
	  };
	
	  render() {
		const { email, password } = this.state;
		//const isEnabled = email.length > 0 && password.length > 0;
		const isEnabled = email=="admin" && password =="admin";
	
		return (
		  <div className="login_body">
	
			<div className="container login_container" >
	
			   <div>
				<h1 className="login_h1 font-weight-bold ">
				Data Processing  <span> Service</span>
				</h1>
			  </div>
				
				<div className="box login_box ">
					<div className="card-header login_card-header">
						<h3><strong>Login Form</strong></h3>
					</div>
			<form  className="card-body login_card-body" onSubmit={this.handleSubmit}>
			<div className="input-group form-group">
	
	<div className="input-group-prepend">
	  <span className="input-group-text"><i className="fas fa-user"></i></span>
	</div>
	<input type="text" className="form-control login_input"  value={this.state.email}
			  onChange={this.handleEmailChange}  
					placeholder="Name" required/>
			
			</div>
							<div className="input-group form-group">
	
								<div className="input-group-prepend">
									<span className="input-group-text"><i className="fas fa-key"></i></span>
								</div>
								<input type="password" className="form-control login_input" placeholder="password"   
						   value={this.state.password}
						   onChange={this.handlePasswordChange}       placeholder="Password" required/>
			</div>
							
							<div className="form-group text-center">
				<Link to='/dash'> <button disabled={!isEnabled}>Login</button></Link>
							</div>
	
		 
					</form>
	
	</div>
	</div>
	</div>
	
	
	);
	}
	}