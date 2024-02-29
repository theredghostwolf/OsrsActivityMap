const express = require('express');
const app = express();
const port = 3000;

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
    res.json({ message:  
            'hello hello hello!' }); 
}); 

app.get('/', (req, res) => {
res.send('Index');
});


app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});