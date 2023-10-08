//File to deploy the Contract on the VeChain TestNet.
const { Wallet, Connex, Driver } = require("@vechain/connex.driver-nodejs");
const { Framework } = require("@vechain/connex.framework");
const { compile } = require("./compile.js"); // You'll need to provide your own compilation function

const privateKey = "YOUR_PRIVATE_KEY"; // Private key of the account deploying the contract
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
