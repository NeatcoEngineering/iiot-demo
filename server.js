const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
// Serve the favicon
app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/favicon.ico');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
