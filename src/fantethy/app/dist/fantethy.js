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

        GameSvc.createGame(game, function (err, response) {
            console.log(err, response);
            if (err) {
                $scope.errors.push(err);
            }

            if (response) {
                if (response.status === "success") {
                    console.log("SUCCESS", err, response);

                    $scope.success = true;
                    $scope.address = response.address;
                    $scope.$apply();
                } else {
                    $scope.errors.push(response.error);
                }
            }
        });
    };
}]);
app.controller("GameCtrl", ["$scope", "GameSvc", "$routeParams", function ($scope, svc, $routeParams) {

    $scope.game = svc.getGame($routeParams.id);

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

app.controller("JoinGameCtrl", ["$scope", "GameSvc","$routeParams", function ($scope, GameSvc, $routeParams) {
    $scope.game = GameSvc.getGame($routeParams.id);

    $scope.joinGame = function (user) {

        console.log("TRYING TYRIG");


        GameSvc.joinLeague($routeParams.id, function (err, response) {
            if (err) {
                console.error(err);
                return;
            }
            if (response) {
                if (response.status === 'success') {
                    window.location.href = "#/game/" + $routeParams.id;
                } else {
                    $scope.errors.push({ message: "There was an error joining the game."});
                }
            }
        });
    };
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
        if ($scope.team.defender.length < $scope.max.maxDefender) {
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

    $scope.save = function () {
        $scope.errors = [];

        if ($scope.team.goalkeeper.length !== $scope.max.maxGoalkeeper) {
            $scope.errors.push({ message: "You require " + $scope.max.maxGoalkeeper + " goal keepers."});
        }

        if ($scope.team.forwards.length !== $scope.max.maxForwards) {
            $scope.errors.push({ message: "You require " + $scope.max.maxForwards + " forwards."});
        }

        if ($scope.team.midfield.length !== $scope.max.maxMidField) {
            $scope.errors.push({ message: "You require " + $scope.max.maxMidField + " midfielders."});
        }

        if ($scope.team.defender.length !== $scope.max.maxDefender) {
            $scope.errors.push({ message: "You require " + $scope.max.maxDefender + " defenders."});
        }

        if ($scope.errors.length > 0) {
            return;
        }

        var leagueAddress = $routeParams.id;

        var team = $scope.team;
        team.leagueAddress = leagueAddress;
        var response = PlayersSvc.savePlayers(team);

        if (response.status === 'success') {
            window.location.href = "#/game/" + leagueAddress;
        } else {
            $scope.errors.push({ message: "There was an error. " + response.error.message });
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
        .when('/game/create', {
            templateUrl: 'partials/game-create.html',
            controller: 'GameCreateCtrl'
        })
        .when('/game/:id/join', {
            templateUrl: 'partials/game-join.html',
            controller: 'JoinGameCtrl'
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

   // var FantasyLeagueContract = web3.eth.contract([{"name":"FantasyLeague","interface":"[{\"constant\":false,\"inputs\":[],\"name\":\"getStatus\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getEntitlement\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"startDraft\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"joinLeague\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"onUpdate\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"inputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"setBuyIn\",\"type\":\"uint256\"}],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]\n","bytecode":"606060405273e5483c010d0f50ac93a341ef5428244c84043b54600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506040516109f53803806109f5833981016040528080518201919060200180519060200190919050505b6100746102e1565b73ffffffffffffffffffffffffffffffffffffffff16639ce6582d33604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b156100025760325a03f1156100025750505060405180519060200150151561010d57610002565b600f60026000506000016000508190555060026002600050600101600050819055507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd60046000506000016000508190555060026004600050600101600050819055506007600f600050600001600050819055506007600f600050600101600050819055506006600f600050600201600050819055506005600f60005060030160005081905550600f600050600460005060020160005060008201600050548160000160005055600182016000505481600101600050556002820160005054816002016000505560038201600050548160030160005055905050600360046000506006016000508190555060056004600050600701600050819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004600050600801600050819055507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb6004600050600901600050819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004600050600a016000508190555080601d60005081905550611388601e600050819055505b5b5050610639806103bc6000396000f35b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dc5acb90604051817c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260158152602001807f636f6d2e616464632e66616e74657468792e6465760000000000000000000000815260200150602001915050602060405180830381600087803b156100025760325a03f115610002575050506040518051906020015090506103b9565b905660606040526000357c0100000000000000000000000000000000000000000000000000000000900480634e69d560146100685780637b5330a714610090578063bdce3701146100ce578063c99fea94146100e2578063e0d65ec51461010c57610063565b610002565b346100025761007a6004805050610120565b6040518082815260200191505060405180910390f35b34610002576100a260048050506101de565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34610002576100e060048050506102b9565b005b34610002576100f4600480505061035e565b60405180821515815260200191505060405180910390f35b346100025761011e6004805050610594565b005b600061012a6101de565b73ffffffffffffffffffffffffffffffffffffffff16639ce6582d33604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b156100025760325a03f115610002575050506040518051906020015015156101c357610002565b600060149054906101000a900460ff1690506101da565b5b90565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dc5acb90604051817c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260158152602001807f636f6d2e616464632e66616e74657468792e6465760000000000000000000000815260200150602001915050602060405180830381600087803b156100025760325a03f115610002575050506040518051906020015090506102b6565b90565b6102c16101de565b73ffffffffffffffffffffffffffffffffffffffff16639ce6582d33604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b156100025760325a03f1156100025750505060405180519060200150151561035a57610002565b5b5b565b60006103686101de565b73ffffffffffffffffffffffffffffffffffffffff16639ce6582d33604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b156100025760325a03f1156100025750505060405180519060200150151561040157610002565b60011515600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060980160009054906101000a900460ff16151514156104565760009050610590565b601d60005054601f60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054101561049b5760009050610590565b601d60005054601f60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250540392505081905550601d60005054601f60005060003073ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef601d600050546040518082815260200191505060405180910390a360019050610590565b5b90565b61059c6101de565b73ffffffffffffffffffffffffffffffffffffffff16639ce6582d33604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b156100025760325a03f1156100025750505060405180519060200150151561063557610002565b5b5b56"}]);
    var FantasyLeagueContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"poolSize","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getEntitlement","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"teamCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"joinLeague","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"onUpdate","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"setBuyIn","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]);
    function getGame(id) {
        var league = FantasyLeagueContract.at(id);

        var players = [
            { name: "Ronaldo"},
            { name: "Andre Gray"},
        ];

        var item = {
            address: "0xda3323f2332f32f32f23f32f",
            buyIn: 4,
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

    function createGame(game, next) {
        var account = WalletBar.getCurrentAccount(); // get account selected in wallet bar
        if (!account) return alert("You must log in to transact: create");
        WalletBar.createSecureSigner();

        FantasyLeagueContract.new(
            game.name,
            game.buyIn,
            {
                from: account,
                data: '606060405273e5483c010d0f50ac93a341ef5428244c84043b54600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060006020600050556000602160005055604051610901380380610901833981016040528080518201919060200180519060200190919050505b6100846102f1565b73ffffffffffffffffffffffffffffffffffffffff16639ce6582d33604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b156100025760325a03f1156100025750505060405180519060200150151561011d57610002565b600f60026000506000016000508190555060026002600050600101600050819055507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd60046000506000016000508190555060026004600050600101600050819055506007600f600050600001600050819055506007600f600050600101600050819055506006600f600050600201600050819055506005600f60005060030160005081905550600f600050600460005060020160005060008201600050548160000160005055600182016000505481600101600050556002820160005054816002016000505560038201600050548160030160005055905050600360046000506006016000508190555060056004600050600701600050819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004600050600801600050819055507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb6004600050600901600050819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004600050600a016000508190555080601d60005081905550611388601e600050819055505b5b5050610535806103cc6000396000f35b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dc5acb90604051817c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260158152602001807f636f6d2e616464632e66616e74657468792e6465760000000000000000000000815260200150602001915050602060405180830381600087803b156100025760325a03f115610002575050506040518051906020015090506103c9565b905660606040523615610074576000357c0100000000000000000000000000000000000000000000000000000000900480634e69d560146100795780634ec18db9146100a15780637b5330a7146100c95780638caa008314610107578063c99fea941461012f578063e0d65ec51461015957610074565b610002565b346100025761008b600480505061016d565b6040518082815260200191505060405180910390f35b34610002576100b3600480505061022b565b6040518082815260200191505060405180910390f35b34610002576100db6004805050610234565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3461000257610119600480505061030f565b6040518082815260200191505060405180910390f35b34610002576101416004805050610318565b60405180821515815260200191505060405180910390f35b346100025761016b6004805050610490565b005b6000610177610234565b73ffffffffffffffffffffffffffffffffffffffff16639ce6582d33604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b156100025760325a03f1156100025750505060405180519060200150151561021057610002565b600060149054906101000a900460ff169050610227565b5b90565b60216000505481565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dc5acb90604051817c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260158152602001807f636f6d2e616464632e66616e74657468792e6465760000000000000000000000815260200150602001915050602060405180830381600087803b156100025760325a03f1156100025750505060405180519060200150905061030c565b90565b60206000505481565b60006000610324610234565b73ffffffffffffffffffffffffffffffffffffffff16639ce6582d33604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b156100025760325a03f115610002575050506040518051906020015015156103bd57610002565b601d600050543410156103cf57610002565b6002600050600001600050546020600050541015156103ed57610002565b600160005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000509050338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550348160980160008282825054019250508190555060016020600050540160206000508190555034602160005054016021600050819055506001915061048b565b5b5090565b610498610234565b73ffffffffffffffffffffffffffffffffffffffff16639ce6582d33604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b156100025760325a03f1156100025750505060405180519060200150151561053157610002565b5b5b56',
                gas: 4700000
            }, function (e, contract){
                if (e) {
                    return next({
                        status: "error",
                        error: e
                    });
                }
                if (typeof contract.address !== 'undefined') {
                    return next(null, {
                        status: "success",
                        address: contract.address
                    });
                } else {
                    return next({
                        status: "success",
                        error: { message: "The contract address was undefined" }
                    });
                }
            });
    }

    function joinLeague(leagueId, next) {
        var account = WalletBar.getCurrentAccount(); // get account selected in wallet bar
        if (!account) return alert("You must log in to transact");
        WalletBar.createSecureSigner();
        var league = FantasyLeagueContract.at(leagueId);
        league.joinLeague({
            from: account,
            value:web3.toWei(4, 'ether')
        }, function (err, response) {
            if (err) {
                return next(err);
            }
            console.log(err, response);
            return next(null, { status: 'success'});
        });
    }

    return  {
        getGame: getGame,
        createGame: createGame,
        joinLeague: joinLeague
    };
}]);
app.factory("PlayersSvc", ["$http", function ($http) {
    function getPlayers() {
        return $http.get("javascripts/data/players.json");
    }
    function savePlayers(team) {
        return {
            status: 'success'
        };
    }
    return {
        getPlayers: getPlayers,
        savePlayers: savePlayers
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