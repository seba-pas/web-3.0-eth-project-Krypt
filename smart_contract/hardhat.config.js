//https://eth-goerli.g.alchemy.com/v2/R8RpTeWlWjZp3RJQaMqaObvn4VM8WhaU

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/R8RpTeWlWjZp3RJQaMqaObvn4VM8WhaU",
      accounts: [
        "6b4fb04c8b9da689d07ee849bdbf993482a90a66ede4cd7b7dfe655c204bafd2",
      ],
    },
  },
};
