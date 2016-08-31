var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mysql = require('mysql');
var db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'vroomvroom'
});

db.connect(function(err) {
	if (err) {
		console.error('Error: ' + err.stack);
		return;
	}
	console.log('connected as id' + db.threadId)
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));


app.post('/api/users/login', function(req, res) {
	console.log(req.body)
	db.query('SELECT * FROM Users where username=? AND password=?', [req.body.username, req.body.password], function(err, result) {
		if (err) {
			res.send('Failed to get users');
			return;
		}
		res.json(result);
	});
});

app.post('/api/users/signup', function(req, res) {
	var data = req.body;
	var results = [data.username,
	data.password,
	data.fullName,
	data.email,
	data.phoneNumber];

	db.query('INSERT INTO Users (username, password, full_name, email, phone_number) values (?, ?, ?, ?, ?)', results,function(err) {
		if (err) {
			res.send('Failed to create user' + err);
			return;
		}
		res.send('Successfully created user');
	});
});


app.get('/api/advertisments', function(req, res) {
	db.query('SELECT * FROM Advertisments',  function(err, result) {
		if (err) {
			res.send('Failed to get ads');
			return;
		}
		res.json(result);
	});
});

app.post('/api/advertisments', function(req, res) {
	var data = req.body;
	var results = [
		data.title,
		data.description,
		data.model,
		data.engine_size,
		data.color,
		data.price,
		data.year,
		data.mileage,
		data.user_id
	];

	db.query('INSERT INTO Advertisments (title, description, model, engine_size, color, price, year, mileage, user_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', results, function(err, result) {
		if (err) {
			res.send('Failed to create advertisment' + err);
			return;
		}
		res.json(result);
	});
});


app.post('/api/images', function(req, res) {
	var data = req.body;
	var results = [
		data.url,
		data.adv_id
	];

	db.query('INSERT INTO Advertisments (url, advertisment_id) values (?, ?)', results, function(err, result) {
		if (err) {
			res.send('Failed to create Image' + err);
			return;
		}
		res.json(result);
	});
});

app.get('/api/images', function(req, res) {
	db.query('SELECT * FROM Images',  function(err, result) {
		if (err) {
			res.send('Failed to get images');
			return;
		}
		res.json(result);
	});
});

app.listen(3000);