var app = angular.module("fantethy", ['ngRoute']);
app.controller("HomeCtrl", ['$scope','AngWeb3', function ($scope, AngWeb3) {

}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);


if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

(function(web3, app) {
    app.factory("AngWeb3", [function () {
        return web3;
    }]);
})(web3, app);
