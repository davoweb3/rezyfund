const { ThirdwebSDK } = require ("@thirdweb-dev/sdk/evm");

const sdk = ThirdwebSDK.fromPrivateKey("a9b88a687e828461c7fc8613e07e421ba033ed40a12ba0fec8da8ebe11f517c7", {
        // === Required information for connecting to the network === \\
        chainId: 421614, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://arbitrum-sepolia.rpc.thirdweb.com"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Arbitrum-Sepolia",
          symbol: "Arbsepolia",
        },
        shortName: "ArbitrumSepolia", // Display value shown in the wallet UI
        slug: "arb-sepolia", // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "astar-shibuya", // Name of the network
        name: "astar-shibuya", // Name of the network
      }, {
  
  secretKey: "BlpfiR-V9HI21PwZzgcsw3GZ0Zq3DGaai9sN3ieSN2ZLyLSFgFb6t0EbLOU3NThRZKIij16Ws5C5Zn2QQ154Pg", // Use secret key if using on the server, get it from dashboard settings
});

const callAlchemy = async (wallet) => {
  const contract = await sdk.getContract("0x260fdba5890ac2883adcb990c1f7476d2444368b");
const amount = 100000000000000000n; //Fixed Token Value per bottle
const data = await contract.call("mintTo", wallet, amount);
 console.log(data);
  return data;
}
module.exports = { callAlchemy };
