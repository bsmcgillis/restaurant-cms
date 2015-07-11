(function() {

	var AdminLogoutController = function($location, adminRestaurantFactory){

		adminRestaurantFactory.getLogout()
			.success(function(){				
				adminRestaurantFactory.clearLoginInfo();
				$location.path('/');
			})
			.error(function(data, status, headers, config){

			})

	};

	AdminLogoutController.$inject = ['$location', 'adminRestaurantFactory'];

	angular.module('restaurant').controller('AdminLogoutController', AdminLogoutController);

}());