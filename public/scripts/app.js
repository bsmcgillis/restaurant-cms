(function() {

	angular.module('restaurant', ['ngRoute', 'ngMessages', 'ngCookies']);

	angular.module('restaurant').config(function($routeProvider){

		$routeProvider
			.when('/', {
				controller: 'HomeController',
				templateUrl: 'scripts/views/home.html'
			})

	});

}());