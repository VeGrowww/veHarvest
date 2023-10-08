//File to deploy the Contract on the VeChain TestNet.
import { Wallet, Connex, Driver } from "@vechain/connex.driver-nodejs";
import { Framework } from "@vechain/connex.framework";
import { compile } from "./compile.js"; // You'll need to provide your own compilation function.
import { seedPhrase, veChainTestnetUrl, PRIVATE_KEY } from "./config.js";

const privateKey = PRIVATE_KEY; // Private key of the account deploying the contract
const driver = await Driver.connect();
const connex = new Connex(driver);
const wallet = new Wallet(privateKey, connex);

const framework = new Framework(connex);

async function deployContract() {
  try {
    const abi = compile("YourContract.sol"); // Replace with your own compilation function

    const deployment = await framework.deploy(wallet, abi.bytecode);
    const receipt = await deployment.confirm(3);

    console.log("Contract deployed at", receipt.address);
  } catch (error) {
    console.error("Error deploying contract:", error);
  }
}

deployContract();
