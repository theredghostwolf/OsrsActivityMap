const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const user = 'root';
const password = 'root';

const DBConnection = mysql.createConnection({
    host:'localhost',
    user:user,
    password: password,
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
app.get('/api/activities', (req, res) => {
    sql = "SELECT * FROM Activities";
    DBConnection.query(sql, (err, rows, fields) => {
        if (err) throw err;
        var objs = [];
        for (var i=0; i < rows.length; i++) {
            objs.push(JSON.parse(JSON.stringify(rows[i])));
        }
        res.json(objs)
    }); 
});

app.get('/api/items', (req, res) => {
    sql = "SELECT * FROM Items";
    DBConnection.query(sql, (err, rows, fields) => {
        if (err) throw err;
        var objs = [];
        for (var i=0; i < rows.length; i++) {
            objs.push(JSON.parse(JSON.stringify(rows[i])));
        }
        res.json(objs)
    }); 
});

app.get('/api/items/find', (req, res) => {
    sql = "SELECT * FROM Items WHERE Name LIKE '%" + req.query.name +"%'";
    DBConnection.query(sql, (err, rows, fields) => {
        if (err) throw err;
        var objs = [];
        for (var i=0; i < rows.length; i++) {
            objs.push(JSON.parse(JSON.stringify(rows[i])));
        }
       
        res.json(objs)
    }); 
})

app.get('/api/allactivities', (req, res) => {
    sql = "SELECT * FROM Activities JOIN activitytypes ON activities.ActivityType = activitytypes.ID JOIN relatedskills ON activities.ActivityID = relatedskills.ActivityID JOIN skills ON relatedskills.SkillID = skills.SkillID JOIN ActivityLocations on activities.location = LocationID JOIN Regions ON ActivityLocations.Region = regions.RegionID";
  
    DBConnection.query(sql, (err, rows, fields) => {
        if (err) throw err;
        var objs = [];
        for (var i=0; i < rows.length; i++) {
            objs.push(JSON.parse(JSON.stringify(rows[i])));
        }
    
        res.json(objs);
    }); 
})

app.get('/api/generateRandomSetup', (req, res) => {
    sql = "SELECT * FROM Items";
    DBConnection.query(sql, (err, rows, fields) => {
        if (err) throw err;
        var objs = [];
        for (var i=0; i < rows.length; i++) {
            objs.push(JSON.parse(JSON.stringify(rows[i])));
        }

        var gear = []
        for (let index = 0; index < 28; index++) {
            gear[index] = objs[Math.floor(Math.random() * objs.length)];
        }

        res.json(gear);


    });

})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});