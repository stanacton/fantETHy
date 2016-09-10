var app = angular.module("fantethy", ['ngRoute']);
app.controller("GameCtrl", ["$scope", function ($scope) {
    $scope.game = {
        name: "Andy's Premiership",
        status: "Season in Progress",
        prizePool: 34,
        players: [
            { rank: 1, name: "Andy", address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a"},
            { rank: 2, name: "Chris", address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a"},
            { rank: 3, name: "Coleman", address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a"},
            { rank: 4, name: "Acton", address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a"}
        ]
    };

}]);
app.controller("GameJoinCtrl", ["$scope", function ($scope) {
    $scope.game = {
        name: "Andy's Game #1",
        buyIn: 33,
        address: "0x02332423423a9df0a9a9afas0s99977688ad8",
        type: "Winner Takes All",
        isPrivate: false
    };

    $scope.join = function () {
        $scope.success = true;
    };
}]);
app.controller("GamesListCtrl", ['$scope', function ($scope) {
    $scope.games = [
        { buyIn: 3, address: "0x12423596843e32f32af333", type: "WINNER_TAKES_ALL", name: "Andy's Game #1"},
        { buyIn: 10, address: "0x12423596843e32f32af333", type: "WINNER_TAKES_ALL", name: "Andy's Game #2"},
        { buyIn: 15, address: "0x12423596843e32f32af333", type: "WINNER_TAKES_ALL", name: "Andy's Game #3"},
        { buyIn: 15, address: "0x12423596843e32f32af333", type: "WINNER_TAKES_ALL", name: "Pinky's Game #3"},
        { buyIn: 15, address: "0x12423596843e32f32af333", type: "WINNER_TAKES_ALL", name: "The Brain's Game #3"},
    ];

    $scope.join = function (game) {
        var url = "#/games/" + game.address;
        window.location.href = url;
    };
}]);

app.controller("HomeCtrl", ['$scope','AngWeb3', function ($scope, AngWeb3) {

}]);

app.controller("MyGamesCtrl", ["$scope", function ($scope) {
    $scope.games = [
        { rank: 10, buyIn: 33, address: "0x12423596843e32f32af333", type: "WINNER_TAKES_ALL", name: "Andy's Game #1", status: "DRAFT"},
        { rank: 3, buyIn: 1, address: "0x12423596843e32f32af333", type: "WINNER_TAKES_ALL", name: "The Brain's Game #3", status: "Session In Progress"},
    ];

}]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when('/games', {
            templateUrl: 'partials/games-list.html',
            controller: 'GamesListCtrl'
        })
        .when('/my-games', {
            templateUrl: 'partials/games-mine.html',
            controller: 'MyGamesCtrl'
        })
        .when('/games/join/:id', {
            templateUrl: 'partials/game-join.html',
            controller: 'GameJoinCtrl'
        })
        .when('/game/:id', {
            templateUrl: 'partials/game.html',
            controller: 'GameCtrl'
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
