const { ethers } = require("hardhat");

const deployBox = async (hre) => {
  const {deploy} = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();
  const chainId = network.config.chainId;

  // const [deployer] = await ethers.getSigners();
 
  const box = await deploy("Box", {
    from: deployer,
    log: true,
    args: [],
    waitConfirmations: chainId == 31337 ? 1 : 6,
});

  const boxContract = await ethers.getContractAt("Box", box.address);
  const timelockContract = await ethers.getContractAt("TimeLock", deployer);

  const transferTx = await boxContract.transferOwnership(
    timelockContract.address
  );
  await transferTx.wait(1);
  console.log("Ownership of 'Box' transferred to 'TimeLock'...");
};


module.exports = deployBox;
module.exports.tags = ["all", "box"];