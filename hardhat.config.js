require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');


module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{
      chainId:31337,
    },
    localhost:{
      chainId:31337
    }
  },
  namedAccounts:{
    deployer:{
      default:0,
    }
  },
  solidity: "0.8.20",
};
