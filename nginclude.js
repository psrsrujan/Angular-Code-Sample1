var app = angular.module("myModule",[]).controller("myController", function($scope){
	var employees=[
	                  {name: "srujan", gender: "male", salary: 545454, city: "London"},
	                  {name: "john", gender: "male", salary: 546664, city: "Boston"},
	                  {name: "sara", gender: "female", salary: 745454, city: "Chicago"},
	                  {name: "adam", gender: "male", salary: 845454, city: "New york"},
	                  {name: "pam", gender: "female", salary: 645454, city: "Los angels"},
	                  {name: "jack",gender: "male", salary: 445454, city: "Denver"}];
	
	$scope.employees = employees;
	//$scope.employeeview = "include.html";
});