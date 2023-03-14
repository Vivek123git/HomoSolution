const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
 const url = "mongodb+srv://Vivek_homo:homo123@cluster0.hqirbyj.mongodb.net/HomoDatabase?retryWrites=true&w=majority"

const app = express();
const port = 3000;

mongoose.connect(url)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input type="email" name="email" placeholder="Email" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.send('Invalid email or password');
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.send('Invalid email or password');
  }

  req.session.user = user;
  res.redirect('/home');
});

app.get('/signup', (req, res) => {
  res.send(`
    <form method="POST" action="/signup">
      <input type="email" name="email" placeholder="Email" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Signup</button>
    </form>
  `);
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  res.redirect('/login');
});

app.get('/home', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }

  res.send(`Welcome ${req.session.user.email}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
