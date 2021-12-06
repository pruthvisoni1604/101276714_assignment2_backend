const express = require('express');
const mongoose = require('mongoose');

const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); 


mongoose.connect('mongodb+srv://exec06:pruthvi@exec06.dubue.mongodb.net/101276714_assignment2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(employeeRouter);

app.listen(8888, () => { console.log('Server is running please wait for it to load...') });