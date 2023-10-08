// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "./VeGroww.sol";
import "./Farmer.sol";


contract Driver {
    Farmer public farmerContract;
    VeGroww public vegrowwTokenContract;
    address owner;
    
    modifier onlyOwner {
        require(msg.sender == owner, "Only owner is allowed");
        _;
    }

    constructor(address _farmerContractAddress, address _vegrowwTokenContractAddress) {
        farmerContract = Farmer(_farmerContractAddress);
        vegrowwTokenContract = VeGroww(_vegrowwTokenContractAddress);
        owner = msg.sender;
    }

    function setFarmerContract(address _farmerContractAddress) public onlyOwner {
        farmerContract = Farmer(_farmerContractAddress);
    }

    function setVeGrowwTokenContract(address _vegrowwTokenContractAddress) public onlyOwner {
        vegrowwTokenContract = VeGroww(_vegrowwTokenContractAddress);
    }

    // Implement functions to interact with the Farmer and VeGroww contracts

    // Functions from Farmer contract

    function checkAllowance(address owner, address spender) public view returns (uint256) {
        return farmerContract.checkAllowance(owner, spender);
    }

    function transferTokensToFarmer(uint rewardAmount) public onlyOwner {
        farmerContract.transferTokensToFarmer(rewardAmount);
    }

    function buyProducts(address vendorAddress, uint256 itemsCost) public onlyOwner {
        farmerContract.buyProducts(vendorAddress, itemsCost);
    }

    function rateFarmer(address farmerAddress, uint32 rating) public {
        farmerContract.rateFarmer(farmerAddress, rating);
    }

    function getFarmerRating(address farmerAddress) public view returns (uint32) {
        return farmerContract.getFarmerRating(farmerAddress);
    }

    function payFarmer(address farmerAddress, uint256 amount) public onlyOwner {
        farmerContract.payFarmer(farmerAddress, amount);
    }

    function subscribe(uint256 subscriptionAmount) public onlyOwner {
        farmerContract.subscribe(subscriptionAmount);
    }

    // Functions from VeGroww contract

    function transfer(address to, uint256 value) public onlyOwner {
        vegrowwTokenContract.transfer(to, value);
    }

    function approve(address spender, uint256 value) public onlyOwner {
        vegrowwTokenContract.approve(spender, value);
    }

    function allowance(address owner, address spender) public view returns (uint256) {
        return vegrowwTokenContract.allowance(owner, spender);
    }

    function transferFrom(address from, address to, uint256 value) public onlyOwner {
        vegrowwTokenContract.transferFrom(from, to, value);
    }

    // You can add more functions here as needed.
}
