// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
}

contract Farmer {
    IERC20 public vegrowwToken; // Declare the custom token interface

    struct FarmerDetails {
        address walletAddress;
        uint32 rating;
        uint numberOfRatings;
    }

    mapping(address => FarmerDetails) farmerDetailsMap;

    constructor(address _tokenAddress) {
        // Initialize the custom token contract
        vegrowwToken = IERC20(_tokenAddress);
    }

    function checkAllowance(address owner, address spender) public view returns (uint256) {
        // Check the allowance of the owner for the spender
        return vegrowwToken.allowance(owner, spender);
    }

    // Farmer actions
    function transferTokensToFarmer(uint rewardAmount) public {
        require(vegrowwToken.balanceOf(address(this)) >= rewardAmount, "Insufficient funds");
        require(vegrowwToken.transfer(msg.sender, rewardAmount), "Token transfer failed");
    }

    // Farmer actions
    function buyProducts(address vendorAddress, uint256 itemsCost) public {
        address farmerAddress = msg.sender;
        uint256 finalCost = itemsCost;
        if (farmerDetailsMap[farmerAddress].rating == 5) {
            finalCost = (itemsCost * 10) / 100;
        }
        require(vegrowwToken.balanceOf(msg.sender) >= finalCost, "Insufficient funds");
        require(vegrowwToken.transferFrom(farmerAddress, vendorAddress, finalCost), "Token transfer failed");
    }

    // Customer actions
    function rateFarmer(address farmerAddress, uint32 rating) public {
        FarmerDetails storage thisFarmer = farmerDetailsMap[farmerAddress];
        thisFarmer.numberOfRatings += 1;
        thisFarmer.rating = uint32(thisFarmer.rating + rating) / uint32(thisFarmer.numberOfRatings);
    }

    function getFarmerRating(address farmerAddress) public view returns (uint32) {
        return farmerDetailsMap[farmerAddress].rating;
    }

    // Customer actions
    function payFarmer(address farmerAddress, uint256 amount) public {
        address vendorAddress = msg.sender;
        require(vegrowwToken.balanceOf(msg.sender) >= amount, "Insufficient funds");
        require(vegrowwToken.transferFrom(vendorAddress, farmerAddress, amount), "Token transfer failed");
    }

    // Subscription
    function subscribe(uint256 subscriptionAmount) public {
        address subscriberAddress = msg.sender;
        require(vegrowwToken.balanceOf(msg.sender) >= subscriptionAmount, "Insufficient funds");
        require(vegrowwToken.transferFrom(subscriberAddress, address(this), subscriptionAmount), "Token transfer failed");
    }
}
