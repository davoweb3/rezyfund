const fetch = require('node-fetch');

const callAlchemy = async (wallet) => {
    const backendUrl = 'http://127.0.0.1:8082'; //cambio llamada desde middleware a backend on render//
    const url = backendUrl + '/callalchemy';
    const options = {
       method: "POST",
       body: JSON.stringify({wallet}),
       headers: {
           "content-type": "application/json"
       }
    }
    let response = await fetch(url, options);
    let output = await response.json();
    return output;
   }

module.exports = { callAlchemy };