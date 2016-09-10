var app = angular.module("fantethy", ['ngRoute']);
app.controller("GameCreateCtrl", ["$scope","GameSvc", function ($scope, GameSvc) {
    $scope.item = {};

    $scope.create = function (game) {
        $scope.errors = [];
        if (!game.name) {
            $scope.errors.push({ message: "Name is required."});
        }
        if (!game.leagueSize) {
            $scope.errors.push({ message: "League Size is required."});
        }
        if (!game.buyIn) {
            $scope.errors.push({ message: "Buy In is required."});
        }

        if ($scope.errors.length > 0) {
            return;
        }

        var response = GameSvc.createGame(game);
        if (response.status === "success") {
            $scope.success = true;
            $scope.address = response.address;
        }
    };
}]);
app.controller("GameCtrl", ["$scope", "GameSvc", "$routeParams", function ($scope, svc, $routeParams) {

    $scope.game = svc.getGame($routeParams.id);

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
        .when('/game/create', {
            templateUrl: 'partials/game-create.html',
            controller: 'GameCreateCtrl'
        })
        .when('/game/:id', {
            templateUrl: 'partials/game.html',
            controller: 'GameCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

(function(Web3, app) {
    app.factory("AngWeb3", ["WalletBar", function (WalletBar) {

        var web3 = new Web3();
        web3.setProvider(WalletBar.getHook('edgware'));

        return web3;
    }]);
})(Web3, app);

app.factory("GameSvc", ['AngWeb3','WalletBar', function (web3, WalletBar)  {
    function getGame(id) {
        var players = [
            { name: "Ronaldo"},
            { name: "Andre Gray"},
        ];

        return {
            weeksRemaining: 4,
            name: "Andy's Premiership",
            status: "Season in Progress",
            prizePool: 34,
            users: [
                { rank: 1, name: "Andy", points: 345, address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players},
                { rank: 2, name: "Chris",points: 245, address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players},
                { rank: 3, name: "Coleman",points: 45, address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players},
                { rank: 4, name: "Acton", points: 5,address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players}
            ]
        };

    }

    function createGame(game) {
        return {
            status: "success",
            address: "0x23423423423423423423423423423423423423423423423423"
        };
    }

    return  {
        getGame: getGame,
        createGame: createGame
    };
}]);
app.factory("WalletBar", [function () {
    var dappID = "com-addc-fantethy-dev-edgware";
    var callbackUrl = "http://localhost:63342";
    return new WalletBar({
        dappNamespace: dappID,
        authServiceCallbackUrl: callbackUrl
    });
}]);