app.factory("WalletBar", [function () {
    var dappID = "com-addc-fantethy-dev-edgware";
    var callbackUrl = "http://localhost:63342";
    var walletBar = new WalletBar({
        dappNamespace: dappID,
        authServiceCallbackUrl: callbackUrl
    });
    console.log(JSON.stringify(walletBar, null, 4));

    return walletBar;
}]);