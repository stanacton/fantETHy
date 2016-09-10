app.controller("GameCtrl", ["$scope", "GameSvc", "$routeParams", function ($scope, svc, $routeParams) {

    $scope.game = svc.getGame($routeParams.id);

}]);