var app = angular.module('App', ['ui.bootstrap', 'ngSanitize', 'Service']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
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
            .when('/location/:place', {
                controller: 'LocationController'
            })
            .otherwise({redirectTo: '/error'});

        $locationProvider.html5Mode(true);
    }]);

app.controller('HomeController', ['$scope', function ($scope) {


}]);

app.controller('ErrorController', ['$scope', function ($scope) {
}]);


app.controller('LocationController', ['$scope', '$http', 'formData', 'dataStorage',
    function ($scope, $http, formData, dataStorage) {

        $scope.row = '';
        $scope.places = formData.location;
        $scope.selected = $scope.places[0];

        $scope.getInfo = function (place) {

            var file = '/data/location/' + place.id + '.html?v' + dataStorage.version;
            $http.get(file, {cache: true})
                .success(function(data){
                    $scope.row = data;
                    $scope.selected = data;
                });
        }

    }]);