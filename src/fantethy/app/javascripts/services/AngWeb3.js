
(function(Web3, app) {
    app.factory("AngWeb3", ["WalletBar", function (WalletBar) {

        var web3 = new Web3();
        web3.setProvider(WalletBar.getHook('edgware'));

        return web3;
    }]);
})(Web3, app);
