
function Hello($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
}

function SimpleController($scope){
	$scope.customers= [
	   {name: 'Jonard0', city: 'Mandaluyong'},
	   {name: 'Jonard1', city: 'Mandaluyong'},
	   {name: 'Jonard2', city: 'Mandaluyong'},
	   {name: 'Jonard3', city: 'Mandaluyong'}
	];
}
