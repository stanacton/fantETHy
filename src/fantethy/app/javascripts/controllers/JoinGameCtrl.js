app.controller("JoinGameCtrl", ["$scope", "GameSvc","$routeParams", function ($scope, GameSvc, $routeParams) {
    $scope.game = GameSvc.getGame($routeParams.id);

    $scope.joinGame = function (user) {
        if (!user.nickname) {
            $scope.errors.push({ message: "Nickname is required."});
        }

        if ($scope.errors.length > 0) {
            return;
        }

        var response = GameSvc.joinGame($routeParams.id, user);
        if (response.status === 'success') {
            window.location.href = "#/game/" + $routeParams.id;
        } else {
            $scope.errors.push({ message: "There was an error joining the game."});
        }
    };
}]);