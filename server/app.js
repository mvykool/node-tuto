const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Blog = require('./models/blog.js');


// express app
const app = express();



//database


const dbid = 'mongodb+srv://maicol01230:maicol01230@cluster0.zf4vms9.mongodb.net/node-tuto?retryWrites=true&w=majority';



mongoose.connect(dbid)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

mongoose.set('strictQuery', true);



// mongo and mongoose sandbox

/* app.get('/add-blog', (req, res) => {
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


//get all the blogs

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
})
 */

//middleware of static

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});


//go to individual page

app.get('/blogs/:id', (req,res) => {
  const id = req.params.id;
  Blog.findById(id)
   .then(result => {
    res.render('details', { blog: result, title: 'blog details'})
   })
    .catch(err => {
      console.log(err)
    })
})


//delete

app.delete('/blogs/:id', (req,res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
   .then(result => {
     res.json({ redirect: '/blogs'})
   })
    .catch((err) => {
      console.log(err)
    })
})