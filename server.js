const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const DBConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'root',
    database: 'osrsactivitymap'
})

DBConnection.connect();

// handling CORS 
app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin",  
               "http://localhost:4200"); 
    res.header("Access-Control-Allow-Headers",  
               "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
}); 
  
// route for handling requests from the Angular client 
app.get('/api/message', (req, res) => {
    DBConnection.query("SELECT * FROM Activities", (err, rows, fields) => {
        if (err) throw err;
        var objs = [];
        for (var i=0; i < rows.length; i++) {
            objs.push(JSON.parse(JSON.stringify(rows[i])));
        }
        res.json(objs)
    }); 
}); 

app.get('/', (req, res) => {
res.send('Index');
});


app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});