const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/auth/google', function(req, res) {
	res.render('logged', {
		login: req.query.login
	});
});


app.listen(3000);

app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});