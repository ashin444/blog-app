const express = require('express');
const cors = require('cors');
const BlogInfo = require('./src/model/BlogDb');
import path from 'path';

//Object initialization
const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.use(cors());
//Post Method
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Display to blog/  Route 
app.get('/api/blog/:name', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    try{
        const blogName = req.params.name;
        BlogInfo.findOne({ name: blogName })
        .then(function(blog) {
            res.status(200).json(blog);
        })
    }

    catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
});

// //Display Title
// app.get('/api/blog/:name', (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
//     try{
//         const blogName = req.params.name;
//         BlogInfo.findOne({ name: blogName }, {title})
//         .then(function(blog) {
//             res.status(200).json(blog);
//         })
//     }

//     catch (error) {
//         res.status(500).json({ message: 'Error', error });
//     }
// });


// Add Blog
app.post('/api/addblog/:name/update', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var item = {
        name:req.body.name,
        title: req.body.title,
        description: req.body.description
    }
    
    const blog = new BlogInfo(item);

    blog.save(item)
    .then(function(addblog){
        res.json(addblog);
    })
});

//Delete blog
app.delete('/api/blog/:name/delete', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var item = {
        name:req.body.name,
        title: req.body.title,
        description: req.body.description
    }
    
    const blog = new BlogInfo(item);

    blog.deleteOne(item)
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

//Port number
app.listen(5000,()=>{
    console.log("Listening on port 5000");
}) 