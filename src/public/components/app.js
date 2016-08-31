import React from 'react';
import AdList from './AdList';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import ProductDetails from './ProductDetails';
import CreatePost from './CreatePost';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: {},
			currentAds: []
		}
	}

	render() {
		let buttons;
    if (this.state.currentUser.id) {
      buttons = (
      	<ul className="nav navbar-nav pull-right">
	        <li className="nav-item">
	        	<button className="btn-flat waves-effect waves-light" data-toggle="modal" data-target="#modal-createPost">Create Advertisment</button>
	        </li>
      	</ul>
      )
    } else {
      buttons = (
      <ul className="nav navbar-nav pull-right">
	      <li className="nav-item">
					<button className="btn-flat waves-effect waves-light" data-toggle="modal" data-target="#modal-login">Sign In</button>
				</li>
				<li className="nav-item">
					<button className="btn-flat waves-effect waves-light" data-toggle="modal" data-target="#modal-register">Sign Up</button>
				</li>
	    </ul>
      )
    }

		return (
			<div>
	      <nav className="navbar navbar-fixed-top scrolling-navbar navbar-dark bg-danger">
	        <a className="navbar-brand waves-effect waves-light" href="#" style={{marginTop:"3px"}}><img src="img/logo.png" /></a>
	        <ul className="nav navbar-nav pull-right">
	        	{ buttons }
	        </ul>
	      </nav>

		    <div className="main">
		      <div className="view hm-black-light">
		        <img src="img/home-banner.jpg" className="img-fluid" alt="" />
		        <div className="mask flex-center">
		          <h1 className="white-text">VroomVroom</h1>
		        </div>
		      </div>

		      <hr style={{marginLeft: "20px", marginRight: "20px"}} />
		      <AdList ads={this.state.currentAds} />
	      </div>

		    <SignupForm handler={this.signup.bind(this)} />
		    <SigninForm handler={this.login.bind(this)} />
		    <CreatePost handler={this.createPost.bind(this)} />
	    </div>
		)
	}

	login(username, password) {
		$.ajax({
			url: '/api/users/login',
			type: 'POST',
			data: JSON.stringify({username: username, password: password}),
			contentType: 'application/json',
			success: function(result) {
				if (result.length) {
					this.setState({
						currentUser: result[0]
					});
					console.log(this.state.currentUser);
				}
			}.bind(this),
			error: function(err) {
				console.log('Error getting results ' + err);
			}
		})
	}

	signup(username, password, fullName, email, phoneNumber) {
		$.ajax({
			url: '/api/users/signup',
			type: 'POST',
			data: JSON.stringify({username: username, password: password, fullName: fullName, email: email, phoneNumber: phoneNumber}),
			contentType: 'application/json',
			success: function(result) {
				console.log(result);
			},
			error: function(err) {
				console.log('Error getting results ' + err);
			}
		})
	}

	createPost(title, description, price, model, engineSize, color, year, mileage) {
		$.ajax({
			url: '/api/advertisments',
			type: 'POST',
			data: JSON.stringify({title: title, description: description, model: model, engine_size:engineSize, color:color, price: price, year: year, mileage: mileage, user_id: this.state.currentUser.id}),
			contentType: 'application/json',
			success: function(result) {
				console.log(result);
			},
			error: function(err) {
				console.log('Error: ' + err);
			}
		})
	}

	updateAdvertisments() {
		$.ajax({
			url: '/api/advertisments',
			type: 'GET',
			success: function(results) {
				this.setState({
					currentAds: results
				})
			}.bind(this),
			error: function(err) {
				console.log('Error: ' + err);
			}
		})
	}

	componentWillMount() {
		this.updateAdvertisments();
	}

	componentDidMount() {
		setInterval(this.updateAdvertisments.bind(this), 1000);
	}
}