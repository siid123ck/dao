// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.20;

// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

// contract GovernanceToken is ERC20, ERC20Permit {

//     uint256 public s_maxSupply = 1000000000000000000000000;

//     constructor(
//         string memory _name,
//         string memory _symbol
//     )
//         ERC20(_name, _symbol)
//         ERC20Permit(_name)
//     {
//         _mint(msg.sender, s_maxSupply);
//     }

//     // The functions below are overrides required by Solidity.

//     function _afterTokenTransfer(
//         address from,
//         address to,
//         uint256 amount
//     ) internal (ERC20, ERC20Votes) {
//         super._afterTokenTransfer(from, to, amount);
//     }

//     function _mint(address to, uint256 amount) internal
//     override(ERC20, ERC20Votes) {
//         super._mint(to, amount);
//     }

//     function _burn(address account, uint256 amount)
//         internal
//         override(ERC20, ERC20Votes)
//     {
//         super._burn(account, amount);
//     }
// }
