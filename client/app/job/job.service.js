

/* @ngInject */
function JobService($http) {

    var baseUrl = '/api/jobs/';

    return {
        list: listFn,
        get: getFn
    };

    ////////

    function listFn() {
        return $http.get(baseUrl);
    }

    function getFn(id) {
        return $http.get(baseUrl + id);
    }
}

angular.module('app').factory('Job', JobService);