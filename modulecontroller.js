
var app = angular.module("myModule",[]).controller("myController", function($scope){
	//$scope.firstname="srujan";
	//$scope.lastname="Reddy";
	var employee={
			firstname: "david",
			lastname:"john",
			salary:"10000"
	};
	$scope.employee = employee;
});
