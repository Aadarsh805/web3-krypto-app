//https://muddy-quiet-field.ropsten.discover.quiknode.pro/dae71acccc83e9d81f50d9cdfd9f19b5a6b60bfb/

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://muddy-quiet-field.ropsten.discover.quiknode.pro/dae71acccc83e9d81f50d9cdfd9f19b5a6b60bfb/",
      accounts: [
        "b65a8d9097f11b94a768da02b5ace62c3f73955982ff716021f0be5d50c04d64",
      ],
    },
  },
};
