var app = angular.module("myModule",[]).controller("myController", function($scope){
	var employees=[
	                  {name: "srujan", dateOfBirth: new Date("November 15, 1988"), gender: "male", salary: 545454.000},
	                  {name: "john", dateOfBirth: new Date("December 21, 1978"), gender: "male", salary: 546664},
	                  {name: "henry", dateOfBirth: new Date("March 18, 1985"), gender: "male", salary: 745454},
	                  {name: "adam", dateOfBirth: new Date("August 24, 1986"), gender: "male", salary: 845454},
	                  {name: "chris", dateOfBirth: new Date("May 09, 1991"), gender: "male", salary: 645454},
	                  {name: "jack", dateOfBirth: new Date("July 02, 1990"), gender: "male", salary: 445454.087}];
	
	$scope.employees = employees;
	$scope.sortColumn = "name";
	$scope.reverseSort = "false";
	
	$scope.sortData = function (column){
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
	}
	$scope.getSortClass = function (column){
		if($scope.sortColumn == column){
			return $scope.reverseSort ? 'arrow-down' : 'arrow-up' 
		}
		
		return '';
	}
});