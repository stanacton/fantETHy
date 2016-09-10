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