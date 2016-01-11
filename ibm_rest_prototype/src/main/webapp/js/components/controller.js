var myApp = angular.module('spicyApp1', []);

// Simple Controller
myApp.controller('SpicyController', ['$scope', function($scope) {
    $scope.spice      = 'very';

    $scope.chiliSpicy = function() {
        $scope.spice  = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice  = 'jalapeño';
    };
    
    $scope.labuyoSpicy = function() {
        $scope.spice  = 'labuyo';
    };
}]);


// Input Controller
myApp.controller('SpicyController2', ['$scope', function($scope) {
    $scope.customSpice = "wasabi";
    $scope.spice       = 'very';

    $scope.spicy = function(spice) {
        $scope.spice   = spice;
    };
}]);


// Nested Controllers
myApp.controller('MainController', ['$scope', function($scope) {
    $scope.timeOfDay   = 'morning';
    $scope.name        = 'Jonard';
}]);

myApp.controller('ChildController', ['$scope', function($scope) {
    $scope.name        = 'Jonard';
}]);

myApp.controller('GrandChildController', ['$scope', function($scope) {
    $scope.timeOfDay   = 'evening';
    $scope.name        = 'Jonard';
}]);



