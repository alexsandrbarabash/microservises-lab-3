const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, db, host, authApiUrl } = require('./configuration');
const { Kitten } = require('./models/kitten.model');
const axios = require('axios');

const currentPort = 8080;

const launchServer = () => {
  app.listen(currentPort, async () => {
    console.log('Server is up and running on PORT: ' + currentPort);

//    const kitten = new Kitten({
//      name: 'Silence'
//    });
//    console.log('Additional log');
//		console.log('Additional log!!!!!');
//		console.log('Govno');
//    try {
//      await kitten.save();
//
//      console.log('Kitten Silence has been saved!');
//
//    } catch (e) {
//      console.log(e);
//    }

  });
}

app.get('/test', async (req, res, next) => {
  res.status(200);
  res.send('Api is working correctly!');
});

app.get('/testwithcurrentuser', async (req, res, next) => {
	console.log('AUTH_API_URL: ' + authApiUrl);
	
	const response = await axios.get(authApiUrl + '/currentUser');
	
	const { data } = response;
	
	
	res.json({
		testwithcurrentuser: true,
		currentUserFromAuth: data
	});
}); 

app.get('/api/testapidata', (req, res) => {
	res.json({
		testWithApi: true
	});
});

//mongoose
//  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//  .then(() => {
//    console.log('Connected to db: ', db);
//    launchServer();
//  })
//  .catch(e => console.log(e));
//

launchServer();
