import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import fs from 'fs';
import path from 'path';
import App from '../src/App';


const PORT = 7000;
const app = express();

app.use('^/$', (req, res) => {
    fs.readFile(path.resolve('./dist/index.html'), 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).send('Some error');
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${renderToString(<App />)}</div>`));
    });
});

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});