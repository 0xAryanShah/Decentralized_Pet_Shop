/* uncomment to deploy on rinkeby testnet
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "fj4jll3k....."; //replace it with your infura key
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
*/

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    /* uncomment to deploy on rinkeby testnet
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,          // Rinkeby's id
      gas: 6700000,        
    },
    */
  }
};
