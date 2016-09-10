module.exports = {
  build: {
  },
  rpc: {
    network_id: 909,
    host: "localhost",
    port: 8545
  },
  networks: {
    "live": {
      network_id: 1, // Ethereum public network
      // optional config values
      // host - defaults to "localhost"
      // port - defaults to 8545
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
    },
    "edgeware": {
      network_id: 909,        // Official Ethereum test network
    },
    "staging": {
      network_id: 1337 // custom private network
      // use default rpc settings
    },
    "development": {
      network_id: "default"
    }
  }
};

//0x1dbbc5f6b6176edf98d95f566aea91891b4538f5
