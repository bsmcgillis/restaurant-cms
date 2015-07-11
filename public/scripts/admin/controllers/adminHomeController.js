(function() {

	var AdminHomeController = function($scope, $location, adminRestaurantFactory){

		if(adminRestaurantFactory.loggedIn()){
			$scope.user = adminRestaurantFactory.loggedIn;
		}
		else{
			$location.path('/admin/login');
		}			

	};

	AdminHomeController.$inject = ['$scope', '$location', 'adminRestaurantFactory'];

	angular.module('restaurant').controller('AdminHomeController', AdminHomeController);		

}());