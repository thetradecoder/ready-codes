```javascript

// require passport
const passport = require('passport');

// use passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));


// initialize passport and use session
app.use(passport.initialize());
app.use(passport.session());



// serializeUser
 passport.serializeUser((user, done) => {
    done(null, user._id);
  });

//deserializeUser
  passport.deserializeUser((id, done) => {
    myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
      done(null, doc);
    });
  });
  
}).catch((err) => {
  app.route('/').get((req, res) => {
    res.render('pug', { title: err, message: 'Login Error' });
  });
});
```
