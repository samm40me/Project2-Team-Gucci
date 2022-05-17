const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


//app.use(express.bodyParser({ limit: "50mb" }));


app.use(cors());
app.use(express.json())

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Anjola@14',
    database: 'patientprofile'
})

app.post('/create', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const location = req.body.location
    const email = req.body.email
    const picture = req.body.picture;

    db.query('INSERT INTO patients (name, age, location, email, picture) VALUES (?,?,?,?,?)',
        [name, age, location, email, picture], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Value Inserted")
            }
        })
})

app.get('/patients', (req, res) => {
    db.query("SELECT * FROM patients", (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    })
})

app.put('/update', (req, res) => {
    const id = req.body.id;
    const email = req.body.email;
    db.query('UPDATE patients SET email = ? WHERE id = ?', [email, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM patients WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    } )
})

app.listen(3001, () => {
    console.log('Server running on port 3001')
});