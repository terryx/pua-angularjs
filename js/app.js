var app = angular.module('App', ['ui.bootstrap']);


app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '/templates/home.html',
                controller: 'HomeController'
            });

        $locationProvider.html5Mode(true);
    }]);

app.controller('HomeController', ['$scope', function () {

}]);