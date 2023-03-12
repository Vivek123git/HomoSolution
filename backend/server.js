// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const url="mongodb+srv://Vivek_homo:homo123@cluster0.hqirbyj.mongodb.net/HomoDatabase?retryWrites=true&w=majority"

// Create Express app
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect(url)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define user schema
const userSchema = new mongoose.Schema({
  email: String,
  mobile: String,
  password: String
});

// Define user model
const User = mongoose.model('User', userSchema);

// Define login route
app.post('/login', async (req, res) => {
  const { email, mobile, password } = req.body;

  // Find user by email/mobile number
  const user = await User.findOne({ $or: [{ email }, { mobile }] });

  // If user is not found, return error response
  if (!user) {
    return res.status(401).json({ message: 'Invalid email/mobile number or password' });
  }

  // Compare password with hash stored in database
  const isPasswordValid = bcrypt.compare(password, user.password);

  // If password is invalid, return error response
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid email/mobile number or password' });
  }

  // If login is successful, return success response
  return res.status(200).json({ message: 'Login successful' });
});

// Start server
app.listen(1000, () => console.log('Server started on port 1000'));
