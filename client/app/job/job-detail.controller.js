function JobDetailController ($scope, job){
	$scope.job = job;
}

angular.module('app').controller('JobDetailCtrl', JobDetailController);