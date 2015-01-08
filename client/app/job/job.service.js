function JobFactory ($resource){
	return $resource('/api/jobs/:id');
}

angular.module('app').factory('Job', JobFactory);