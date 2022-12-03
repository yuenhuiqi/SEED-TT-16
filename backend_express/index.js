var admin = require('firebase-admin');
var bodyParser = require('body-parser');
var serviceAccount = require('./fbAdminConfig.json');

const express = require('express');
const { verifyToken } = require('./utils/verifyToken');
const { createUser } = require('./utils/createUser');

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/newUser', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const userDetails = await createUser(email, password);
  res
    .status(200)
    .json({ message: 'ok', uid: userDetails.uid, token: userDetails.token });
});

app.post('/verifyToken', async (req, res) => {
  const token = req.get('Authorization');
  const uid = req.body.uid;
  const success = verifyToken(token, uid);
  res.status(200).json({ success: success });
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
