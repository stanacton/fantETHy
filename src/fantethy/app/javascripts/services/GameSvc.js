app.factory("GameSvc", ['AngWeb3','WalletBar', function (web3, WalletBar)  {
    function getGame(id) {
        var players = [
            { name: "Ronaldo"},
            { name: "Andre Gray"},
        ];

        return {
            weeksRemaining: 4,
            name: "Andy's Premiership",
            status: "Season in Progress",
            prizePool: 34,
            users: [
                { rank: 1, name: "Andy", points: 345, address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players},
                { rank: 2, name: "Chris",points: 245, address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players},
                { rank: 3, name: "Coleman",points: 45, address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players},
                { rank: 4, name: "Acton", points: 5,address: "0x44asa097fad6fdfs9s87f9s7f97a7f7af7e9f7a89a7f9a", players: players}
            ]
        };

    }

    function createGame(game) {
        return {
            status: "success",
            address: "0x23423423423423423423423423423423423423423423423423"
        };
    }

    return  {
        getGame: getGame,
        createGame: createGame
    };
}]);