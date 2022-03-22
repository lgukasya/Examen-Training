'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

const port = 8080;

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

app.listen(port, () => {
    console.log("listening on 8080");
});