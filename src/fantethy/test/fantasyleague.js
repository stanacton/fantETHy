contract('FantasyLeague', function(accounts) {
  it("should start a game with the status waiting for teams", function() {
    var meta = FantasyLeague.deployed();

    return meta.getStatus.call(accounts[0]).then(function(status) {
      assert.equal(status.valueOf(), 0, "league status is not correct");
    });
  });

  it("should let a player join the game", function() {
    var meta = FantasyLeague.deployed();

    return meta.joinLeague.call(accounts[1]).then(function(success) {
      assert.equal(success.valueOf(), true, "league status is not correct");
    });
  });

  it("should not let a player join the game more than once", function() {
    var meta = FantasyLeague.deployed();

    return meta.joinLeague.call(accounts[1]).then(function(success) {
      assert.equal(success.valueOf(), false, "player was allowed to join the game repeatedly.");
    });
  });

});
