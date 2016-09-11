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