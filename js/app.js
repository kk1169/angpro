var app = angular.module("angProApp",[
    'ngRoute'
]);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
            .when('/',{
                templateUrl : 'home.html',
                controller : "HomeController"
            })
            .when('/contact',{
                templateUrl : 'contact.html',
                controller : "ContactController"
            })
            .otherwise({
                redirectTo: ''
            });
            $locationProvider.html5Mode(true);
    
});


app.controller("IndexController",function($scope, $rootScope){
    $scope.title = 'Index';
    $rootScope.loading = false;
});

app.controller("HomeController",function($scope){
    $scope.title = 'Home';
    
    $scope.user = [{
        email : '',
        password : ''
    }];

    $scope.onSubmit = function(user){
        console.log(user);
    }
});


app.controller("ContactController",function($scope){
    $scope.title = 'Contact';
});
