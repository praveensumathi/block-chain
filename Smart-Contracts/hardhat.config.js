require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks:{
    rinkeby:{
      url : "https://eth-rinkeby.alchemyapi.io/v2/lgoHJHVuEAzwdy9Q-3jhvIspa_3gMbSz",
      accounts:["3e0cd0a9c344987143522a9ca4a7aa36d1b0dac96db072106764fa6f95721a90"]
    }
  }
};
