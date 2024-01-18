const { MIN_DELAY, PROPOSERS, EXECUTORS } =  require("../hardhat-config-helper");


const deployTimeLock = async (hre) => {
  const {deploy} = hre.deployments;
  const {deployer} = await hre.getNamedAccounts();

  const timeLock = await deploy("TimeLock", {
    from: deployer,
    args: [MIN_DELAY, PROPOSERS, EXECUTORS],
    log: true,
    waitConfirmations: 1,
  });

};

module.exports = deployTimeLock;
module.exports.tags = ["all", "timelock"];