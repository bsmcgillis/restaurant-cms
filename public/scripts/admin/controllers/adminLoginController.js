(function(){

	var AdminLoginController = function($scope, $location, adminRestaurantFactory){

		$scope.submitLogin = function(){
			if($scope.login_form.$valid){
				adminRestaurantFactory.getCSRF()
					.success(function(response){						
						$scope.user._token = response.csrfToken;
						adminRestaurantFactory.setupCSRF($scope.user._token);
						adminRestaurantFactory.postLogin($scope.user)
							.success(function(response){								
								if(response.loggedIn){
									adminRestaurantFactory.setupUser($scope.user);
									$location.path('/admin/');
								}
								else{
									$scope.loginError = response.error;
								}
							})
							.error(function(data, status, headers, config){
								console.log(data);								
							})
					})
					.error(function(data, status, headers, config){
						console.log(data);
					})
			}
		};
		
	};

	AdminLoginController.$inject = ['$scope', '$location', 'adminRestaurantFactory'];

	angular.module('restaurant').controller('AdminLoginController', AdminLoginController);

}());