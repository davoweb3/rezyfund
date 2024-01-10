// server.js

const express = require('express');
const { execute } = require('./executeCallAlchemy'); // Import execute function

const app = express();

// Endpoint to trigger script execution
app.post('/triggerScript', async (req, res) => {
  try {
    await execute(); // Call execute function
    res.status(200).send('PET tokens minted successfully!');
  } catch (error) {
    res.status(500).send('Error minting PET tokens!');
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
