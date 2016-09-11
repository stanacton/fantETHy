app.factory("PlayersSvc", ["$http", function ($http) {
    function getPlayers() {
        return $http.get("javascripts/data/players.json");
    }

    return {
        getPlayers: getPlayers
    };
}]);