const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Roblox Rank Bot API!');
});

app.get('/status', (req, res) => {
    res.status(200).send('Server is online');
});

app.post('/rank', async (req, res) => {
    const { userId, rankId, groupId } = req.body;

    try {
        // Your rank change logic here using Roblox API
        res.status(200).send('Rank changed successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
