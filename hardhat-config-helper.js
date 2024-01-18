 const MIN_DELAY = 3600;
 const PROPOSERS= [];
 const EXECUTORS = [];


 const VOTING_DELAY = 1; // blocks 
 const VOTING_PERIOD = 5; // blocks
 const QUORUM_PERCENTAGE = 4; // percentage

 const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

 const FUNC = "store";
 const FUNC_ARGS = 100; 
 const DESCRIPTION = "Proposal #1 - update  value of box to 100";
 const PROPOSAL_FILE = "proposals.json";

 const VOTE_REASON = "Cause Dao's score 100 for coolness";

// TimeTravel
 const developmentChains = ["hardhat", "localhost"];

 module.exports = { MIN_DELAY, PROPOSERS, EXECUTORS, VOTING_DELAY,
    VOTING_PERIOD, QUORUM_PERCENTAGE, ADDRESS_ZERO, FUNC, FUNC_ARGS,
    DESCRIPTION, PROPOSAL_FILE, VOTE_REASON, developmentChains
 }