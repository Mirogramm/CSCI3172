const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const UNSPLASH_ACCESS_KEY = '3CjpT_X8Wb2IraxI8EdDxRptBtFPXS84NrgXc2Jmp6o';

app.use(cors());
app.use(express.static(path.join(__dirname)));

app.get('/api/images', async (req, res) => {
    const query = req.query.query || 'funny';
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
        const data = await response.json();
        res.json(data.results);
    } catch (error) {
        res.status(500).json({error: 'failed to fetch the images'});
    }
});

app.listen(PORT);