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
