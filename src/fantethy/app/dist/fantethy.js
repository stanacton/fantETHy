var app = angular.module("fantethy", ['ngRoute']);
app.controller("GameCreateCtrl", ["$scope","GameSvc", function ($scope, GameSvc) {
    $scope.item = {};

    $scope.create = function (game) {
        $scope.errors = [];
        if (!game.name) {
            $scope.errors.push({ message: "Name is required."});
        }
        if (!game.nickname) {
            $scope.errors.push({ message: "Nickname is required."});
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
        } else {
            console.log("The error was: ", response);
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
app.controller("SelectTeamCtrl", ["$scope", "$routeParams","PlayersSvc", function ($scope, $routeParams, PlayersSvc) {
    $scope.max = {
        maxForwards: 2,
        maxMidField: 4,
        maxDefender: 4,
        maxGoalkeeper: 1
    };

    $scope.team = {
        forwards: [],
        midfield: [],
        defender: [],
        goalkeeper: []
    };

    PlayersSvc.getPlayers()
        .success(function (data) {
            $scope.players = data;
        });

    $scope.addForward = function(player) {
        if ($scope.team.forwards.length < $scope.max.maxForwards) {
            addUser($scope.team.forwards, player);
        }
    };

    $scope.addKeeper = function (player) {
        if ($scope.team.goalkeeper.length < $scope.max.maxGoalkeeper) {
            addUser($scope.team.goalkeeper, player);
        }
    };

    $scope.addMidfield = function (player) {
        if ($scope.team.midfield.length < $scope.max.maxMidField) {
            addUser($scope.team.midfield, player);
        }
    };

    $scope.addDefender = function (player) {
        if ($scope.team.midfield.length < $scope.max.maxDefender) {
            addUser($scope.team.defender, player);
        }
    };

    function addUser(array, player) {
        for (var i = 0; i < array.length; i++) {
            var existingPlayer = array[i];
            if (existingPlayer.name === player.name) {
                console.log("Already added.");
                return;
            }
        }

        array.push(player);
    }

    $scope.moveUp = function (aryName, player) {
        var index = $scope.team[aryName].indexOf(player);
        console.log("index", index);
        if (index > 0) {
            $scope.team[aryName].splice(index, 1);
            var newIndex = index - 1;
            $scope.team[aryName].splice(newIndex,0, player);
        }
    };

    $scope.moveDown = function (aryName, player) {
        var index = $scope.team[aryName].indexOf(player);
        console.log("index", index);
        if (index < $scope.team[aryName].length) {
            $scope.team[aryName].splice(index, 1);
            var newIndex = index + 1;
            $scope.team[aryName].splice(newIndex,0, player);
        }
    };

    $scope.remove = function (aryName, player) {
        var index = $scope.team[aryName].indexOf(player);
        if (index < $scope.team[aryName].length) {
            $scope.team[aryName].splice(index, 1);
        }
    };

}]);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
        .when('/game/:id/select-team', {
            templateUrl: 'partials/select-team.html',
            controller: 'SelectTeamCtrl'
        })
        .when('/game/:id', {
            templateUrl: 'partials/game.html',
            controller: 'GameCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });

   // $locationProvider.html5Mode(true);
}]);

(function(Web3, app) {
    app.factory("AngWeb3", ["WalletBar", function (WalletBar) {

        var web3 = new Web3();
        var hook = WalletBar.getHook('edgeware');
        console.log("Hook", hook);
        if (hook) {
            web3.setProvider(WalletBar.getHook('edgware'));
        } else {
            if (typeof web3 !== 'undefined') {
                web3 = new Web3(web3.currentProvider);
            } else {
                // set the provider you want from Web3.providers
                web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            }
        }

        return web3;
    }]);
})(Web3, app);

app.factory("GameSvc", ['AngWeb3','WalletBar',"$http", function (web3, WalletBar, $http)  {

    var FantasyLeagueContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"fetchTeamByID","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"joinLeague","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"setBuyIn","type":"uint256"}],"type":"constructor"}]);

    function getGame(id) {
        var league = FantasyLeagueContract.at(id);

        var players = [
            { name: "Ronaldo"},
            { name: "Andre Gray"},
        ];

        var item = {
            address: "0xda3323f2332f32f32f23f32f",
            weeksRemaining: 4,
            name: "Andy's Premiership",
            status: "Season in Progress",
            prizePool: 34,
            users: [
                { rank: 3, name: "Andy", points: 345, address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players},
                { rank: 4, name: "Chris",points: 245, address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players},
                { rank: 2, name: "Coleman",points: 45, address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players},
                { rank: 1, name: "Acton", points: 5,address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players}
            ]
        };

        return item;

    }

    function createGame(game) {
        /*var fantasyleague = FantasyLeagueContract.new(
            game.name,
            game.buyIn,
            {
                from: game.creator,
                data: '60606040526040516102d83803806102d8833981016040528080518201919060200180519060200190919050505b600f6004600050600001600050819055506002600460005060010160005081905550600260046000506002016000508190555060026004600050600301600050819055506004600460005060040160005081905550600460046000506005016000508190555060046004600050600601600050819055506004600460005060070160005081905550806001600050819055505b5050610208806100d06000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480634e69d56014610052578063a1c22c2d1461007a578063c99fea941461008e5761004d565b610002565b346100025761006460048050506100b8565b6040518082815260200191505060405180910390f35b346100025761008c60048050506100d4565b005b34610002576100a060048050506100d7565b60405180821515815260200191505060405180910390f35b6000600260009054906101000a900460ff1690506100d1565b90565b5b565b600060011515600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160009054906101000a900460ff161515141561012e5760009050610205565b6060604051908101604052803381526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81526020016001815260200150600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506020820151816001016000505560408201518160020160006101000a81548160ff0219169083021790555090505060019050610205565b9056',
                gas: 4700000
            }, function (e, contract){
                if (e) {
                    return {
                        status: "error",
                        error: e
                    };
                }
                if (typeof contract.address !== 'undefined') {
                    return {
                        status: "success",
                        address: contract.address
                    };
                }
            });
*/
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
app.factory("PlayersSvc", ["$http", function ($http) {
    function getPlayers() {
        return $http.get("javascripts/data/players.json");
    }

    return {
        getPlayers: getPlayers
    };
}]);
app.factory("WalletBar", [function () {
    var dappID = "com-addc-fantethy-dev-edgware";
    var callbackUrl = "http://localhost:63342";
    var walletBar = new WalletBar({
        dappNamespace: dappID,
        authServiceCallbackUrl: callbackUrl
    });
    console.log(JSON.stringify(walletBar, null, 4));

    return walletBar;
}]);