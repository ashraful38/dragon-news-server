const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/' , (req , res)=>{
    res.send('News ApI Running');
});

app.get('/news-categories', (req , res)=>{
    res.send(categories);
});

app.listen(port, ()=>{
    console.log('Dragon news server runnging port' , port);
})