<!DOCTYPE html>
<html data-ng-app="restaurant">
	<head>
		<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/restaurant.css" type="text/css">
		<title>Restaurant CMS</title>
	</head>
	<body>
		<div ng-view class="container" />
	</body>

	<!-- Application Dependencies -->
	<script type="text/javascript" src="bower_components/angular/angular.js"></script>
	<script type="text/javascript" src="bower_components/angular-cookies/angular-cookies.min.js"></script>
	<script type="text/javascript" src="bower_components/angular-messages/angular-messages.min.js"></script>
	<script type="text/javascript" src="bower_components/angular-route/angular-route.min.js"></script>
	<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>

	<!-- Application Scripts -->
	<script type="text/javascript" src="scripts/app.js"></script>
	<script type="text/javascript" src="scripts/admin/factories/adminRestaurantFactory.js"></script>
	<script type="text/javascript" src="scripts/admin/controllers/adminHomeController.js"></script>
	<script type="text/javascript" src="scripts/admin/controllers/adminLoginController.js"></script>
	<script type="text/javascript" src="scripts/admin/controllers/adminLogoutController.js"></script>
	<script type="text/javascript" src="scripts/controllers/homeController.js"></script>
</html>