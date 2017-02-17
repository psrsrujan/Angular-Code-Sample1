var app = angular.module("myModule",[])
				  .controller("myController", function($scope){
					var country={
							name:"Aeroplane",
							color:"blue",
				            flag:"1.jpg"
					};
					$scope.country = country;
				});