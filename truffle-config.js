const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",     // Localhost (default: none)
    //   port: 8545,            // Standard GODE port (default: none)
    //   network_id: "*",       // Any network (default: none)
    // },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpctest.godechain.com`),
      network_id: 5566,
      // confirmations: 10,
      // timeoutBlocks: 200,
      skipDryRun: true
    },
    // gode: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://rpc.godechain.com`),
    //   network_id: 5500,
    //   confirmations: 10,
    //   timeoutBlocks: 200,
    //   skipDryRun: true
    // },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0", // A version or constraint - Ex. "^0.5.0"
    }
  }
}