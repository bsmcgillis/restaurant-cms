(function(){

	var adminRestaurantFactory = function($http, $cookies){

		var factory = {};

		/*** Logging Section ***/


		/* Logging Functions */
		factory.postLogin = function(user){
			return $http.post('/auth/login', user);
		};

		factory.getLogout = function(){
			user = {};
			user._token = $cookies.csrf;
			return $http.get('/auth/logout', user);
		};

		/* Logging Helper Functions */
		factory.setupUser = function(user){
			$cookies.user = {};
			$cookies.loggedIn = true;
			$cookies.user.name = user.name;
			$cookies.user.email = user.email;
			$cookies.user._token = $cookies.csrf;
		};

		factory.loggedIn = function(){
			if($cookies.loggedIn){				
				return $cookies.user;
			}
			else {
				return false;
			}			
		};

		factory.clearLoginInfo = function(){
			delete $cookies.user;
			delete $cookies.loggedIn;
		};

		factory.getCSRF = function(){		
			return $http.get('/auth/csrf');			
		};

		factory.setupCSRF = function(csrfToken){
			$cookies.csrf = csrfToken;
		}

		return factory;

	}

	adminRestaurantFactory.$inject = ['$http', '$cookies'];

	angular.module('restaurant').factory('adminRestaurantFactory', adminRestaurantFactory);	

}());