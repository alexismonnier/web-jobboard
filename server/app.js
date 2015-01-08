'use strict';

var express = require('express');

var jobRoute = require('./api/job/job.route');

var app = express();

app.use ('/api/jobs', jobRoute);

app.get('/sample', function (req, res){
	res.send('Hello world');
});

app.get('/:name', function (req, res){

	res.send('Hello '+req.param('name'));
});



app.listen(process.env.PORT || 9000);

console.log('server is running');

module.exports = app;