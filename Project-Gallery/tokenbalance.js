const axios = require('axios');

let data = JSON.stringify({
  "method": "alchemy_getTokenBalances",
  "params": [
    "0x988Dd08C548d396A754649D998B4D5225C682B62",
    "erc20"
  ],
  "id": 42,
  "jsonrpc": "2.0"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://arb-sepolia.g.alchemy.com/v2/Ws39Z-twSPfg7p8ubLkjKXPARyfsUGBl',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': '_cfuvid=jfarqpXUKTjWoJx.HoV.1.g6D38FBZk44tHAPuNvsFo-1704832780860-0-604800000'
  },
  data: data
};

axios.request(config)
  .then((response) => {
    const result = response.data.result;
    const filteredToken = result.tokenBalances.find(token => token.contractAddress === '0x260fdba5890ac2883adcb990c1f7476d2444368b');

    if (filteredToken) {
      const tokenBalanceWei = BigInt(filteredToken.tokenBalance); // Convert hex to BigInt
      const ethBalance = tokenBalanceWei / BigInt('1000000000000000000'); // Convert wei to ETH
      console.log(ethBalance.toString()); // Display ETH balance
    } else {
      console.log('Token balance not found for the specified contract address.');
    }
  })
  .catch((error) => {
    console.log(error);
  });
