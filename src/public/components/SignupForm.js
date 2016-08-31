import React from 'react';

export default class LoginForm extends React.Component {
	render() {
		return (
      <div className="modal fade modal-ext" id="modal-register" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h3><i className="fa fa-user"></i> Register</h3>
            </div>
            <div className="modal-body">
              <div className="md-form">
                <i className="fa fa-user prefix"></i>
                <input type="text" id="username" className="form-control" ref={(input) => this.username = input} />
                <label for="username">Username</label>
              </div>
              <div className="md-form">
                <i className="fa fa-lock prefix"></i>
                <input type="password" id="password" className="form-control" ref={(input) => this.password = input} />
                <label for="password">Password</label>
              </div>
              <div className="md-form">
                <i className="fa fa-user prefix"></i>
                <input type="text" id="name" className="form-control" ref={(input) => this.fullName = input} />
                <label for="name">Full Name</label>
              </div>
              <div className="md-form">
                <i className="fa fa-envelope prefix"></i>
                <input type="email" id="email" className="form-control" ref={(input) => this.email = input} />
                <label for="email">Email</label>
              </div>
              <div className="md-form">
                <i className="fa fa-phone prefix"></i>
                <input type="text" id="phone" className="form-control" ref={(input) => this.phoneNumber = input} />
                <label for="phone">Phone Number</label>
              </div>
              <div className="text-xs-center">
                <button className="btn btn-primary btn-lg" onClick={function() {this.props.handler(this.username.value, this.password.value, this.fullName.value, this.email.value, this.phoneNumber.value)}.bind(this)} >Sign up</button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
		)
	}
}