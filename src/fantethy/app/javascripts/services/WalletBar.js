app.factory("WalletBar", [function () {
    var dappID = "com-addc-fantethy-dev-edgware";
    var callbackUrl = "http://localhost:63342";
    return new WalletBar({
        dappNamespace: dappID,
        authServiceCallbackUrl: callbackUrl
    });
}]);