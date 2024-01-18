const { ethers } = require("hardhat");

const deployGovernanceToken = async (hre) => {
  const { deploy} = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();

  const governanceToken = await deploy("GovernanceToken", {
    from: deployer,
    log: true,
    args: [],
    waitConfirmations: 1, 
  });

  // Delegate votes to deployer.
  await delegate(governanceToken.address, deployer);
  log(`Delegated votes to ${deployer} `);
};

const delegate = async (
  governanceTokenAddress,
  delegatedAccount
) => {
  const governanceToken = await ethers.getContractAt(
    "GovernanceToken",
    governanceTokenAddress
  );
  const txResponse = await governanceToken.delegate(delegatedAccount);
  await txResponse.wait(1);
  console.log(
    `Checkpoints: ${await governanceToken.numCheckpoints(delegatedAccount)}`
  );
};

module.exports =  deployGovernanceToken;
module.exports.tags = ["all", "governor"];