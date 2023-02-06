const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Blog = require('./models/blog.js');


// express app
const app = express();



//database


const dbid = 'mongodb+srv://maicol01230:maicol01230@cluster0.zf4vms9.mongodb.net/?retryWrites=true&w=majority';



mongoose.connect(dbid)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

mongoose.set('strictQuery', true);



// mongo and mongoose sandbox

app.get('/add-blog', (req, res) => {
  const blog = new Blog({
     title: 'new blog',
     snippet: 'about my new blog',
     body: 'text'
  }) 

  blog.save()
   .then((result) => {
    res.send(result);
   })
   .catch((err) => {
    console.log(err)
   });
});



//middleware of static

app.use(express.static('public'));

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});