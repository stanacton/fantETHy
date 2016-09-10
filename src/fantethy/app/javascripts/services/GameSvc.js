app.factory("GameSvc", ['AngWeb3','WalletBar',"$http", function (web3, WalletBar, $http)  {

    var FantasyLeagueContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"fetchTeamByID","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"joinLeague","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"setBuyIn","type":"uint256"}],"type":"constructor"}]);

    function getGame(id) {
        var league = FantasyLeagueContract.at(id);

        var players = [
            { name: "Ronaldo"},
            { name: "Andre Gray"},
        ];

        var item = {
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

        return item;

    }

    function createGame(game) {
        var fantasyleague = FantasyLeagueContract.new(
            game.name,
            game.buyIn,
            {
                from: game.creator,
                data: '60606040526040516102d83803806102d8833981016040528080518201919060200180519060200190919050505b600f6004600050600001600050819055506002600460005060010160005081905550600260046000506002016000508190555060026004600050600301600050819055506004600460005060040160005081905550600460046000506005016000508190555060046004600050600601600050819055506004600460005060070160005081905550806001600050819055505b5050610208806100d06000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480634e69d56014610052578063a1c22c2d1461007a578063c99fea941461008e5761004d565b610002565b346100025761006460048050506100b8565b6040518082815260200191505060405180910390f35b346100025761008c60048050506100d4565b005b34610002576100a060048050506100d7565b60405180821515815260200191505060405180910390f35b6000600260009054906101000a900460ff1690506100d1565b90565b5b565b600060011515600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160009054906101000a900460ff161515141561012e5760009050610205565b6060604051908101604052803381526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81526020016001815260200150600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506020820151816001016000505560408201518160020160006101000a81548160ff0219169083021790555090505060019050610205565b9056',
                gas: 4700000
            }, function (e, contract){
                if (e) {
                    return {
                        status: "error",
                        error: e
                    };
                }
                if (typeof contract.address !== 'undefined') {
                    return {
                        status: "success",
                        address: contract.address
                    };
                }
            });

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