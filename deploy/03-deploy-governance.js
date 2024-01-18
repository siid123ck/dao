const {
    QUORUM_PERCENTAGE,
    VOTING_DELAY,
    VOTING_PERIOD,
  } = require("../hardhat-helper-config");
  
  const deployGovernorContract = async (hre) => {
    const { getNamedAccounts, deployments } = hre;
    const { deploy, get } = deployments;
    const { deployer } = await getNamedAccounts();
  
    const governanceToken = await get("GovernanceToken");
    const timeLock = await get("TimeLock");
  
    const governorContract = await deploy("Governance", {
      from: deployer,
      args: [
        governanceToken.address,
        timeLock.address,
        VOTING_DELAY,
        VOTING_PERIOD,
        QUORUM_PERCENTAGE,
      ],
      log: true,
      waitConfirmations: 1, 
    });
  
  };
  
  module.exports = deployGovernorContract;
  module.exports.tags = ["all", "governor"];