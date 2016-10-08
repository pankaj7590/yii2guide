angular.module('yii2guide.controllers', [])
.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout, $stateParams) {
	
	$rootScope.mainMenus = {
		'Introduction' : 'introduction',
		'Getting Started' : 'getting-started',
		'Application Structure' : 'application-structure',
		'Handling Requests' : 'handling-requests',
		'Key Concepts' : 'key-concepts',
		'Working with Databases' : 'working-with-databases',
		'Getting Data from Users' : 'getting-data-from-users',
		'Displaying Data' : 'displaying-data',
		'Security' : 'security',
		'Caching' : 'caching',
		'RESTful Web Services' : 'restful-web-services',
		'Development Tools' : 'development-tools',
		'Testing' : 'testing',
		'Special Topics' : 'special-topics',
		'Widgets' : 'widgets',
		'Helpers' : 'helpers'
	};
	$rootScope.subMenus = {
		'introduction' : {
			'About Yii' : 'guide-intro-yii',
			'Upgrading from Version 1.1' : 'guide-intro-upgrade-from-v1',
		},
		'getting-started' : {
			'Installing Yii' : 'guide-start-installation',
			'Running Applications' : 'guide-start-workflow',
			'Saying Hello' : 'guide-start-hello',
			'Working with Forms' : 'guide-start-forms',
			'Working with Databases' : 'guide-start-databases',
			'Generating Code with Gii' : 'guide-start-gii',
			'Looking Ahead' : 'guide-start-looking-ahead'
		},
		'application-structure' : {
			'Overview' : 'guide-structure-overview',
			'Entry Scripts' : 'guide-structure-entry-scripts',
			'Applications' : 'guide-structure-applications',
			'Application Components' : 'guide-structure-application-components',
			'Controllers' : 'guide-structure-controllers',
			'Models' : 'guide-structure-models',
			'Views' : 'guide-structure-views',
			'Modules' : 'guide-structure-modules',
			'Filters' : 'guide-structure-filters',
			'Widgets' : 'guide-structure-widgets',
			'Assets' : 'guide-structure-assets',
			'Extensions' : 'guide-structure-extensions',
		},
		'handling-requests' : {
			'Overview' : 'guide-runtime-overview',
			'Bootstrapping' : 'guide-runtime-bootstrapping',
			'Routing and URL Creation' : 'guide-runtime-routing',
			'Requests' : 'guide-runtime-requests',
			'Responses' : 'guide-runtime-responses',
			'Sessions and Cookies' : 'guide-runtime-sessions-cookies',
			'Handling Errors' : 'guide-runtime-handling-errors',
			'Logging' : 'guide-runtime-logging'
		},
		'key-concepts' : {
			'Components' : 'guide-concept-components',
			'Properties' : 'guide-concept-properties',
			'Events' : 'guide-concept-events',
			'Behaviors' : 'guide-concept-behaviors',
			'Configurations' : 'guide-concept-configurations',
			'Aliases' : 'guide-concept-aliases',
			'Class Autoloading' : 'guide-concept-autoloading',
			'Service Locator' : 'guide-concept-service-locator',
			'Dependency Injection Container' : 'guide-concept-di-container'
		},
		'working-with-databases' : {
			'Data Access Objects' : 'guide-db-dao',
			'Query Builder' : 'guide-db-query-builder',
			'Active Record' : 'guide-db-active-record',
			'Migrations' : 'guide-db-migrations',
			'Sphinx' : 'guide-db-sphinx',
			'Redis' : 'guide-db-redis',
			'MongoDB' : 'guide-db-mongodb',
			'ElasticSearch' : 'guide-db-elasticsearch'
		},
		'getting-data-from-users' : {
			'Creating Forms' : 'guide-input-forms',
			'Validating Input' : 'guide-input-validation',
			'Uploading Files' : 'guide-input-file-upload',
			'Collecting Tabular Input' : 'guide-input-tabular-input',
			'Getting Data for Multiple Models' : 'guide-input-multiple-models',
		},
		'displaying-data' : {
			'Data Formatting' : 'guide-output-formatting',
			'Pagination' : 'guide-output-pagination',
			'Sorting' : 'guide-output-sorting',
			'Data Providers' : 'guide-output-data-providers',
			'Data Widgets' : 'guide-output-data-widgets',
			'Working with Client Scripts' : 'guide-output-client-scripts',
			'Theming' : 'guide-output-theming'
		},
		'security' : {
			'Overview' : 'guide-security-overview',
			'Authentication' : 'guide-security-authentication',
			'Authorization' : 'guide-security-authorization',
			'Working with Passwords' : 'guide-security-passwords',
			'Cryptography' : 'guide-security-cryptography',
			'Auth Clients' : 'guide-security-auth-clients',
			'Best Practices' : 'guide-security-best-practices'
		},
		'caching' : {
			'Overview' : 'guide-caching-overview',
			'Data Caching' : 'guide-caching-data',
			'Fragment Caching' : 'guide-caching-fragment',
			'Page Caching' : 'guide-caching-page',
			'HTTP Caching' : 'guide-caching-http'
		},
		'restful-web-services' : {
			'Quick Start' : 'guide-rest-quick-start',
			'Resources' : 'guide-rest-resources',
			'Controllers' : 'guide-rest-controllers',
			'Routing' : 'guide-rest-routing',
			'Response Formatting' : 'guide-rest-response-formatting',
			'Authentication' : 'guide-rest-authentication',
			'Rate Limiting' : 'guide-rest-rate-limiting',
			'Versioning' : 'guide-rest-versioning',
			'Error Handling' : 'guide-rest-error-handling'
		},
		'development-tools' : {
			'Debug Toolbar and Debugger' : 'guide-debug-toolbar-and-debugger',
			'Generating Code using Gii' : 'guide-generating-code-using-gii',
			'Generating API Documentation' : 'guide-generating-api-documentation',
		},
		'testing' : {
			'Overview' : 'guide-test-overview',
			'Testing environment setup' : 'guide-test-environment-setup',
			'Unit Tests' : 'guide-test-unit',
			'Functional Tests' : 'guide-test-functional',
			'Acceptance Tests' : 'guide-test-acceptance',
			'Fixtures' : 'guide-test-fixtures',
		},
		'special-topics' : {
			'Advanced Project Template' : 'guide-tutorial-advanced-project-template',
			'Building Application from Scratch' : 'guide-tutorial-start-from-scratch',
			'Console Commands' : 'guide-tutorial-console',
			'Core Validators' : 'guide-tutorial-core-validators',
			'Internationalization' : 'guide-tutorial-i18n',
			'Mailing' : 'guide-tutorial-mailing',
			'Performance Tuning' : 'guide-tutorial-performance-tuning',
			'Shared Hosting Environment' : 'guide-tutorial-shared-hosting',
			'Template Engines' : 'guide-tutorial-template-engines',
			'Working with Third-Party Code' : 'guide-tutorial-yii-integration',
		},
		'widgets' : {
			'GridView' : 'guide-widgets-gridview',
			'ListView' : 'guide-widgets-listview',
			'DetailView' : 'guide-widgets-detailview',
			'ActiveForm' : 'guide-widgets-activeform',
			'Pjax' : 'guide-widgets-pjax',
			'Menu' : 'guide-widgets-menu',
			'LinkPager' : 'guide-widgets-linkpager',
			'LinkSorter' : 'guide-widgets-linksorter',
			'Bootstrap Widgets' : 'guide-widgets-bootstrap-widgets',
			'jQuery UI Widgets' : 'guide-widgets-jquery-ui-widgets',
		},
		'helpers' : {
			'Overview' : 'guide-helper-overview',
			'ArrayHelper' : 'guide-helper-array',
			'Html' : 'guide-helper-html',
			'Url' : 'guide-helper-url',
		}
	};
	
	if(!$scope.title){
		$scope.title = "Introduction";
	}
	
	$scope.setTitle = function(title){
		$scope.title = title;
	}
	
	$scope.currentMenu = $rootScope.subMenus[$stateParams.mainmenu];
})
.controller('PageCtrl', function($scope, $rootScope, $ionicModal, $timeout, $stateParams) {
	$scope.page = $stateParams.submenu;
	console.log($scope.page);
})