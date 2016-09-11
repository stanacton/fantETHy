
(function(Web3, app) {
    app.factory("AngWeb3", ["WalletBar", function (WalletBar) {

        var web3 = new Web3();
        var hook = WalletBar.getHook('edgeware');
        console.log("Hook", hook);
        if (hook) {
            web3.setProvider(WalletBar.getHook('edgware'));
        } else {
            if (typeof web3 !== 'undefined') {
                web3 = new Web3(web3.currentProvider);
            } else {
                // set the provider you want from Web3.providers
                web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            }
        }

        return web3;
    }]);
})(Web3, app);
