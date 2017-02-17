var app = angular.module("myModule",[])
.filter("gender",function(){
	return function (gender){
		switch(gender){
		case 1:
			return "Male";
		case 2:
			return "Female";
		case 3:
			return "Not disclosed";
		}
	}
})
				.controller("myController", function($scope){
	var employees=[
	                  {name: "srujan", gender: "1", salary: 545454},
	                  {name: "john", gender: "1", salary: 546664},
	                  {name: "sara", gender: "2", salary: 745454},
	                  {name: "adam", gender: "1", salary: 845454},
	                  {name: "pam", gender: "2", salary: 645454},
	                  {name: "jack",gender: "3", salary: 445454}];
	
	$scope.employees = employees;
});