var admin = require('firebase-admin');
var bodyParser = require('body-parser');
var serviceAccount = require('./fbAdminConfig.json');
const express = require('express');

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(8000, () => {
    console.log('Server listening on port 3000');
    }
);