angular.module('yii2guide', ['ionic', 'yii2guide.controllers'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
    .state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})
	.state('app.main', {
		url: '/main/:mainmenu',
		views: {
		  'menuContent': {
			templateUrl: 'templates/main.html',
			controller: 'AppCtrl'
		  }
		}
	})
	.state('app.page', {
		url: '/page/:submenu',
		views: {
		  'menuContent': {
			templateUrl: 'templates/page.html',
			controller: 'PageCtrl'
		  }
		}
	});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/main/introduction');
});
