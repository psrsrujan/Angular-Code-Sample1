var app = angular.module("myModule",[]).controller("myController", function($scope){
			var	countries = [
				{
					name: "india",
						cities: [
						         {name: "Hyderabad"},
						         {name: "Chennai"}
						         ]
				},
				{
					name: "USA",
					cities: [
					         {name: "Chicago"},
					         {name: "New york"}
					         ]
				}
				];
					$scope.countries = countries;
					});