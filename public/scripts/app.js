(function() {

	angular.module('restaurant', ['ngRoute', 'ngMessages', 'ngCookies']);

	angular.module('restaurant').config(function($routeProvider){

		$routeProvider
			.when('/', {
				controller: 'HomeController',
				templateUrl: 'scripts/views/home.html'
			})

			.when('/admin/', {
				controller: 'AdminHomeController',
				templateUrl: 'scripts/admin/views/home.html'
			})

			.when('/admin/login', {
				controller: 'AdminLoginController',
				templateUrl: 'scripts/admin/views/login_form.html'
			})

			.when('/admin/logout', {
				controller: 'AdminLogoutController',
				template: ''
			})

			.otherwise({ redirectTo: '/' });

	});

}());