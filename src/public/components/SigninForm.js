import React from 'react';

export default class SignupFrom extends React.Component {
	render() {
		return (
      <div className="modal fade modal-ext" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h3>Login</h3>
            </div>
            <div className="modal-body">
              <div className="md-form">
                <i className="fa fa-user prefix"></i>
                <input type="text" className="form-control" ref={(input) => this.username = input} />
                <label for="form2">Username</label>
              </div>
              <div className="md-form">
                <i className="fa fa-lock prefix"></i>
                <input type="password" className="form-control" ref={(input) => this.password = input} />
                <label for="form3">Password</label>
              </div>
              <div className="text-xs-center">
                <button className="btn btn-primary btn-lg" onClick={function() {this.props.handler(this.username.value, this.password.value)}.bind(this)}>Login</button>
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


/*this.props.handler(document.getElementById('form1'), document.getElementById('form2'), document.getElementById('form3'))*/