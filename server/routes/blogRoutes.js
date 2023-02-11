//blog routes

app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1})
      .then((result) => {
        res.render('index', {title: 'ALl Blogs', blogs: result});
      })
       .catch((err) => {
        console.log(err)
       })
  })
  
  //post request
  app.post('/blogs', (req, res) => {
     const blog = new Blog(req.body);
  
     blog.save()
       .then((result) => {
        res.redirect('/blogs');
       })
        .catch((err) => {
          console.log(err);
        });
  });
  
  
  app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  