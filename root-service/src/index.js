const express = require('express');
const app = express();
const { apiUrl } = require('./configuration');
const axios = require('axios');
const port = 8080;
const { produce } = require('./kafka/produce');

const launchServer = async () => {
  app.listen(port, async () => {
    console.log("Server is up and running on PORT: ", port);
		await produce();
  });
}

app.get('/api/root/test', async (req, res, next) => {
  const { data } = await axios.get(apiUrl + '/api/api/testwithcurrentuser');

  res.json({
    message: "Cross server request is successfull!",
    data
  });
});


launchServer();
