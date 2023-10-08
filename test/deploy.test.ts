import { ethers } from "hardhat";

import { HttpNetworkConfig } from "hardhat/types";

import { createWallet } from "@vechain/hardhat-vechain/dist/helpers/createWallet";

import { createProvider } from "@vechain/hardhat-vechain/dist/helpers/createProvider";

import { ClausesBuilder } from "@vechain/hardhat-vechain/dist/clausesBuilder";

const { expect } = require("chai");

 
// describe("VeGroww", function () {

 

  
   
  
//     describe("Deployment", function () {


//     async function deploy_1() {
  
   
  
//         const [owner, otherAccount] = await ethers.getSigners();
    
     
    
//         const tokenDeploy = await ethers.getContractFactory("VeGroww");
    
//         const Token_deploy = await tokenDeploy.deploy();
    
//         const abiArray = tokenDeploy.interface["fragments"];
    
//         const abi = JSON.stringify(abiArray);
    
     
    
//         return { Token_deploy, owner, otherAccount };
    
//       }
  
   
  
//       it("Default value is 0", async function () {
  
//         const { Token_deploy, owner, otherAccount } = await deploy_1();
  
//         console.log("Token address: ",await Token_deploy.getAddress());
  
   

  
//         //expect(res).to.equal(0);
  
//       });
  
//     });
  
//   });

// address: 0x3569795838C4257D7D8c924FE9FE588a1f96D34E
// describe("Farmer", function () {

 

  
   
  
//     describe("Deployment", function () {


//     async function deploy_1() {
  
   
  
//         const [owner, otherAccount] = await ethers.getSigners();
    
     
    
//         const tokenDeploy = await ethers.getContractFactory("Farmer");
    
//         const Token_deploy = await tokenDeploy.deploy("0x2B038c8729Ea5C506aabb6E9d62cDfB3B0f8a439");
    
//         const abiArray = tokenDeploy.interface["fragments"];
    
//         const abi = JSON.stringify(abiArray);
    
     
    
//         return { Token_deploy, owner, otherAccount };
    
//       }
  
   
  
//       it("Default value is 0", async function () {
  
//         const { Token_deploy, owner, otherAccount } = await deploy_1();
  
//         console.log("Token address: ",await Token_deploy.getAddress());
  
   

  
//         //expect(res).to.equal(0);
  
//       });
  
//     });
  
//   });

// 0x76e3f970CB5eF784b63e1fa541d45Bc444A40660
describe("Driver", function () {

 

  
   
  
    describe("Deployment", function () {


    async function deploy_1() {
  
   
  
        const [owner, otherAccount] = await ethers.getSigners();
    
     
    
        const tokenDeploy = await ethers.getContractFactory("Driver");
    
        const Token_deploy = await tokenDeploy.deploy("0x3569795838C4257D7D8c924FE9FE588a1f96D34E","0x2B038c8729Ea5C506aabb6E9d62cDfB3B0f8a439");
    
        const abiArray = tokenDeploy.interface["fragments"];
    
        const abi = JSON.stringify(abiArray);
    
     
    
        return { Token_deploy, owner, otherAccount };
    
      }
  
   
  
      it("Default value is 0", async function () {
  
        const { Token_deploy, owner, otherAccount } = await deploy_1();
  
        console.log("Token address: ",await Token_deploy.getAddress());
  
   

  
        //expect(res).to.equal(0);
  
      });
  
    });
  
  });
