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