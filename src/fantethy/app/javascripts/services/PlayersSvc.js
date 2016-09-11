app.factory("PlayersSvc", ["$http", function ($http) {
    function getPlayers() {
        return $http.get("javascripts/data/players.json");
    }
    function savePlayers(team) {
        return {
            status: 'success'
        };
    }
    return {
        getPlayers: getPlayers,
        savePlayers: savePlayers
    };
}]);