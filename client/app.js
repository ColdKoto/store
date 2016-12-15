const app = angular.module('storeApp', ['ngRoute', 'angularMoment']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/index.html',
            controller: 'indexC',
            controllerAs: 'iC'
        })
        .when('/customers', {
            templateUrl: '/partials/customers.html',
            controller: 'customerC',
            controllerAs: 'cC'
        })
        .when('/products', {
            templateUrl: '/partials/products.html',
            controller: 'productC',
            controllerAs: 'pC'
        })
        .when('/orders', {
            templateUrl: '/partials/orders.html',
            controller: 'orderC',
            controllerAs: 'oC'
        })
        .otherwise({
            redirectTo: '/'
        })
})
