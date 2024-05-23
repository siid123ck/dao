// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GovernanceToken is ERC20, ERC20Permit, ERC20Votes {

    uint256 public s_maxSupply = 1000000000000000000000000;

    constructor(
        string memory _name,
        string memory _symbol
    )
        ERC20(_name, _symbol)
        ERC20Permit(_name)
    {
        _mint(msg.sender, s_maxSupply);
    }



    // The functions below are overrides required by Solidity.
       function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Votes)
    {
        super._update(from, to, value);
    }

    function nonces(address owner)
        public
        view
        override(ERC20Permit, Nonces)
        returns (uint256)
    {
        return super.nonces(owner);
    }

    function mint(address to, uint256 amount)
     {
        super._mint(to, amount);
    }

    function burn(address account, uint256 amount)
        internal virtual
        override(ERC20Votes)
    {
        super._burn(account, amount);
    }
}
