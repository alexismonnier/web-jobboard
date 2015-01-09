
/* @ngInject */
function JobListCtrl($scope, Job) {

    Job.list()
        .success(function(jobs) {
            $scope.jobs = jobs;
        });
}

angular.module('app').controller('JobListCtrl', JobListCtrl);