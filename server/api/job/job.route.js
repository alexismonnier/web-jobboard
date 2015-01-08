'use strict';

var express = require('express');

var router = express.Router ();

var jobs = [
	{
		id : '1',
		title : 'Développeur Node.js'
	},	{
		id : '2',
		title : 'Développeur AngularJS'
	},	{
		id : '3',
		title : 'Développeur Java'
	}
];


router.get('/', function (req, res){
	res.json(jobs);
});

router.get('/:jobId', function (req, res){

	var id = req.param('jobId');

	jobs.forEach(function (job){
		if(job.id === id){
			res.json(job);
		}
	});

	res.status(204).end();
});


module.exports = router;