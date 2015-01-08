function JobApplyController ($scope, $resource){


	$scope.doApply = function (){

		var bundle = $scope.apply;

		var Apply = $resource('/api/applies/:id');

		$scope.sent = false;

		var apply = new Apply(bundle);
		apply.$save(function (){

			$scope.sent = true;
		});
	}

}

angular.module('app').controller('JobApplyCtrl', JobApplyController);