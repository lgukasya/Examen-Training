'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql2');
const fs = require('fs');

const port = 5000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'users'
});

app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get('/:url', (req, res, next) => {
    res.sendFile(__dirname + `/views/${req.params.url}.html`);
});

app.get('/v/segells', async (req, res, next) => { 
    await fs.readFile('./segells.json', (err, data) => {
        if(err){
            return res.send({ message: 'error' });
        }

        return res.send(data);
    });
});

app.get('/sql/:any', async (req, res, next) => {

    console.log(req.params.any);

    const query = `
    SELECT s.segell, s.pais, s.year, t.tema FROM segell AS s
    JOIN tema AS t
    ON t.id_tema = s.id_segell WHERE s.year <= ${req.params.any};
    `
    await connection.execute(query, (err, rows, fields) => {
        return res.send(rows);
    });
});

app.listen(port, () => {
    console.log("listening on 5000");
});