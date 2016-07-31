var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/dashboard', {
            templateUrl : 'pages/dashboard.html',
            controller  : 'mainController',
        })
    .when('/reports', {
            templateUrl : 'pages/reports.html',
            controller  : 'reportController'
        })
    .when('/customers', {
            templateUrl : 'pages/customers.html',
            controller  : 'customerController'
        })
    .when('/addCustomers', {
            templateUrl : 'pages/addCustomers.html',
            controller  : 'addCustomersController'
        })
    .when('/others', {
            templateUrl : 'pages/others.html',
            controller  : 'othersController'
        });
});

app.controller('mainController', function($scope) {
    $scope.message = 'Dashborad';
    $scope.$on('$routeChangeSuccess', function() {
        console.log("hello");
    });
});

app.controller('reportController', function($scope) {
    $scope.message = 'Report';
    $scope.$on('$routeChangeSuccess', function() {
        console.log("hello");
    });
});

app.controller('customerController', function($scope) {
    $scope.message = 'Customer';
    $scope.$on('$routeChangeSuccess', function() {
        $scope.customers=[
            {
            firstName:"Meena",
            lastName: "Masoodi",
            email: "masoodi.meena@gmail.com",
            phone:"8595596227",
            country:"India"
            
        },
             {
            firstName:"Mark",
            lastName: "Otto",
            email: "mark@gmail.com",
            phone:"123456789",
            country:"USA"
        },
             {
            firstName:"John",
            lastName: "Smith",
            email: "john@gmail.com",
            phone:"6578196553",
            country:"UK"
  
            
        },
             {
            firstName:"Roshan",
            lastName: "Vikram",
            email: "roshan@gmail.com",
            phone:"3245667891",
            country:"Japan" 
            
        },
            {
            firstName:"Will",
            lastName: "Smith",
            email: "will@gmail.com",
            phone:"2341567891",
            country:"China" 
            
        }
        ]
    });
});

app.controller('addCustomersController', function($scope) {
    $scope.message = 'Add Customers';
    $scope.$on('$routeChangeSuccess', function() {
        console.log("hello");
    });
});

app.controller('othersController', function($scope) {
    $scope.message = 'Others';
    $scope.$on('$routeChangeSuccess', function() {
        console.log("hello");
    });
});