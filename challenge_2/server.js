const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('reports.db');

// app.get('/', (req, res) => res.send('hellllo world!'))

// route 


app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', express.static('./client'))


app.get('/reports', (req, res) => {
    db.all('SELECT * FROM reports', (err, reports) => {
        if (err) {
            res.status(400).end();
        } else {
            res.send(reports);     
        }
    })
})

// to start sqlite, run this in terminal: sqlite3 items.db
app.post('/server.js', function(req, res) {
    // console.log(req.name);
    // var newItem = req.body;
    db.run('INSERT INTO reports(firstName, lastName, county, city, role, sales) VALUES(?, ?, ?, ?, ?, ?)', req.body.firstName, req.body.lastName, req.body.county, req.body.city, req.body.role, req.body.sales, (err) => {
        if (err) {
            res.status(400).end();
        } else {
            // res.send(newItem);
            db.all('SELECT * FROM reports', (err, data) => {
                if (err) {
                    res.status(400).end();
                } else {
                    res.send(data);
                }
            })
        }
    });
    // let data = '';
    // req.on('data', chunk => {
    //     data = data.concat(chunk);
    // })
    // req.on('end', () => {
    //     var newItem = data;
    //     res.send(newItem);
    // })
    // res.send(newItem)
})

app.listen(port, () => console.log(`listening on port ${port}`));


// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of 
// CSV report (see included sample output), where the keys of the JSON objects will be the columns of the 
// CSV report. You may assume the JSON data has a regular structure and hierarchy (see included sample file). In 
// other words, all sibling records at a particular level of the hierarchy will have the same set of 
// properties, but child objects might not contain the same properties. In all cases, every property 
// you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.