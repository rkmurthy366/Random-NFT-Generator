require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || "your rpc url";
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "your rpc url";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "your private key";

const POLYSCAN_API_KEY =
  process.env.POLYSCAN_API_KEY || "Your polyscan API key";

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYSCAN_API_KEY,
  },
};
