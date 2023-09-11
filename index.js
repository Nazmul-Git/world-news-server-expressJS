const express =require('express');
const app= express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors())

const catagories=require('./Data/catagories.json')
const news=require('./Data/news.json')

app.get('/', (req, res)=>{
   res.send('world news running');
});

app.get('/catagories',(req, res)=>{
    res.send(catagories)
})

app.get('/news', (req, res)=>{
   res.send(news)
})

app.get('/news/:id', (req, res)=>{
   const id=req.params.id;
   console.log(id);
   const selectedNews=news.find(n=>n._id === id);
   res.send(selectedNews);
})

app.get('/catagories/:id', (req, res)=>{
   const id=req.params.id;
   console.log(id);
   const selectedCategory= news.filter(n=>n.category_id === id);
   console.log(selectedCategory);
   res.send(selectedCategory);
})



app.listen(port, ()=>{
   console.log(`world news running on port ${port}`)
})