module.exports = function(deployer) {
  deployer.deploy(Players);
  deployer.autolink();
  deployer.deploy(FantasyLeague);
};
