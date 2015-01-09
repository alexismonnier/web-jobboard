angular.module('app', ['ngRoute']);


function RouteConfig ($routeProvider){

	$routeProvider.when('/jobs', {
		templateUrl : 'app/job/job-list.html',
		controller : 'JobListCtrl'
	});

}

angular.module('app').config(RouteConfig);


