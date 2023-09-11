const express =require('express');
const app= express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors())

const catagories=require('./Data/catagories.json')

app.get('/', (req, res)=>{
   res.send('world news running');
});

app.get('/catagories',(req, res)=>{
    res.send(catagories)
})
app.listen(port, ()=>{
   console.log(`world news running on port ${port}`)
})