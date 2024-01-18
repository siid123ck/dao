const { network } = require("hardhat");

const moveBlocks = async (amount) => {
  for (let i = 0; i < amount; i++) {
    await network.provider.request({
      method: "evm_mine",
      params: [],
    });
  }

  console.log(`Moved forward ${amount} blocks.`);
};

const moveTime = async (seconds) => {
  await network.provider.send("evm_increaseTime", [seconds]);
  console.log(`Moved forward ${seconds} seconds.`);
};

module.exports = {moveBlocks, moveTime};
