const dotenv = require('dotenv');
require('dotenv').config();
console.log(process.env); // configuration de .env
const mongoose = require('mongoose'); // introduction de mongoose
const express = require('express'); // creation du server express
const  app = express();
const port = 4000;
app.get('*', function(re,res){res.end('hello world this is great time'); });
app.listen(port,function() {
    console.log('the server is running, '+'please, open your browser at http://localhost:%s', port);
});

mongoose.connect('mongodb://localhost:27017/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('connect sussiful');
})
.catch((err) => {
console.log('error fail', err);
});

app.use(express.json());

// creation des quatres routes.

// Get: return all user
app.get('/users', async (req, res) => {
    try {
    const users = await users.find();
    res.json(users);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
});

  // POST: Add a new user to the database
app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
    const user = new user({ name, email });
    await user.save();
    res.json(user);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
});

  // PUT: Edit a user by ID
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
    const user = await user.findByIdAndUpdate(id, { name, email }, { new: true });
    res.json(user);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
});

  // DELETE: Remove a user by ID
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
    await User.findByIdAndRemove(id);
    res.json({ message: 'User deleted' });
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
});

