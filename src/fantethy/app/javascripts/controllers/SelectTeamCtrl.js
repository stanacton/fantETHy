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