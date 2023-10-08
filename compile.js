import path from "path";
import fs from "fs";
import solc from "solc";

const contractPath = path.resolve(__dirname, "Contracts", "Reward.sol");
const source = fs.readFileSync(contractPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Reward.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

export default output.contracts["Reward.sol"].Reward;
