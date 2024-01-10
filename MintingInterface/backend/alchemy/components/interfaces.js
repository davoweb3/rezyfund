export async function getAlchemyInfo(wallet) {
  const middleware = 'http://127.0.0.1:8081';
  const url = middleware + '/callalchemy';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      wallet
    }),
     headers: {
      "content-type": "application/json"
     }
  };
  let response = await fetch(url, options)
  let output = await response.json();
  return output;
}
