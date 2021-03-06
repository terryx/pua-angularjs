var app = angular.module('App', ['ui.bootstrap', 'ngSanitize', 'Service']);

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
                .success(function (data) {
                    $scope.row = data;
                    $scope.selected = data;
                });
        }

        $scope.getInfo($scope.places[0]);
    }]);

app.controller('RequirementController', ['$scope', function($scope){

    $scope.requirement = {
        title : 'Smile'
    }
}]);

app.controller('DiscussionController', ['$scope', function ($scope) {

}]);

app.controller('PhotoController', ['$scope', function($scope){

}]);

app.controller('NatureController', ['$scope', function ($scope) {

}]);