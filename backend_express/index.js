const express = require('express');
const mysql = require('./config/mysqlConfig.js');

mysql.connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
   
//   connection.end();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(8000, () => {
    console.log('Server listening on port 8000');
    }
);