const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');


// MONGODB

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'customers';
 
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});



//MONGOOSE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test')
// var Schema = mongoose.Schema

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connnected to mongoose')
});

var customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    phone_number: Number,
    credit_card: Number,
    expiry_date: Date,
    cvv: Number,
    billing_zip_code: Number
});

// Customers model
var Customers = mongoose.model('Customer', customerSchema);

// // // instance of Customers
// var jon = new Customers({name: 'vickie', email: 'naws@gmail.com'})

// jon.save(function (err) {
//     if (err) return console.error(err);
// });



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('ello sir')
})


app.post('/', (req, res) => {
    console.log(req.body)
    var name1 = req.body.name;
    var email1 = req.body.email;
    var password1 = req.body.password;
    
    newCustomer = new Customers({name: name1, email: email1, password: password1})
    newCustomer.save(function (err) {
        if (err) return console.error(err);
        res.end();
    });

})

app.post('/formtwo', (req, res) => {
    // console.log(req.body)

    // Customers.updateOne({name: req.body.name}, req.body, function(err) {
    //     if (err) return console.log(err);
    //     res.end();
    // })
    
})

app.get('/what', (req, res) => {
    res.send('ello sir')
})

app.listen(port, () => {
    console.log(`now listening on porttt ${port}`);
})





// db.customers.find({})