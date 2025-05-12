const express = require('express');
const app = express();
const cors = require('cors') 
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


// Data
const userData = [
    {id:1 , name:"jim" , email:"jim12@gmail.com"},
    {id:2 , name:"jams" , email:"jams@gmail.com"},
    {id:3 , name:"Sankhya" , email:"santhiya@gmail.com"},
];


app.get('/userData',(req,res) => {
    res.send(userData);
})

// Post
app.post('/userData',(req,res) => {
    console.log('user post method');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = userData.length + 1;

    // add data to database
    userData.push(newUser);
    
    res.send(newUser);
    
})



app.get('/',(req,res) => {
    res.send('user server is running on')
})

app.listen(port,() => {
    console.log(`users server running on port: ${port}`);
})