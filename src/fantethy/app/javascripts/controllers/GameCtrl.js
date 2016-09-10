app.controller("GameCtrl", ["$scope", function ($scope) {
    $scope.game = {
        name: "Andy's Premiership",
        status: "Season in Progress",
        prizePool: 34,
        players: [
            { rank: 1, name: "Andy", address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a"},
            { rank: 2, name: "Chris", address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a"},
            { rank: 3, name: "Coleman", address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a"},
            { rank: 4, name: "Acton", address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a"}
        ]
    };

}]);