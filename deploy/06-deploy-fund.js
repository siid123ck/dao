const { ethers, network } = require("hardhat");

const deployFund = async (hre) => {
  const {deploy} = hre.deployments;
  // const {deployer} = await hre.getNamedAccounts();
  const [deployer, payee] = await ethers.getSigners();
  const chainId = network.config.chainId; 
  const etherValueToSend = ethers.parseEther("1");

  const fund = await deploy("Fund", {
    from: deployer.address,
    log: true,
    args:[payee.address],
    waitConfirmations: chainId == 31337 ? 1 : 2,
    value: etherValueToSend
  })
  


  const fundContract = await ethers.getContractAt("Fund", fund.address);

  // const boxContract = await ethers.getContractAt("Box", box.address);
  // const timelockContract = await ethers.getContract("TimeLock", deployer);

  // const transferTx = await boxContract.transferOwnership(
  //   timelockContract.address
  // );
  // await transferTx.wait(1);
  // log("Ownership of 'Box' transferred to 'TimeLock'...");
};

// deployFund().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

module.exports = deployFund;
module.exports.tags = ["all", "fund"]