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