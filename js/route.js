app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '/templates/home.html',
                controller: 'HomeController'
            })
            .when('/index.html', {
                templateUrl: '/templates/home.html',
                controller: 'HomeController'
            })
            .when('/location', {
                templateUrl: '/templates/location.html',
                controller: 'LocationController'
            })
            .when('/error', {
                templateUrl: '/templates/error.html',
                controller: 'ErrorController'
            })
            .when('/requirement', {
                templateUrl: '/templates/requirement.html',
                controller: 'RequirementController'
            })
            .when('/nature', {
                templateUrl: '/templates/nature.html',
                controller: 'NatureController'
            })
            .when('/discussion', {
                templateUrl: '/templates/discussion.html',
                controller: 'DiscussionController'
            })
            .when('/photo', {
                templateUrl: '/templates/photo.html',
                controller: 'PhotoController'
            })
            .otherwise({redirectTo: '/error'});

        $locationProvider.html5Mode(true);
    }]);