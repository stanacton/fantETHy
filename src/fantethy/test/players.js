contract('Players', function(accounts) {
  it("create player should create a new player", function() {
    var meta = Players.deployed();

    return meta.addPlayer.call(1, "testGoalie", "GK").then(function(status) {
      assert.equal(status.valueOf(), true, "could not create player");
    });
  });

  it(" string comparison should compare strings and return true if they match", function() {
    var meta = Players.deployed();

    return meta.stringsEqual.call("GK", "GK").then(function(status) {
      assert.equal(status.valueOf(), true, "strings do not match");
    });
  });

});
