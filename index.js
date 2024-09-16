const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Server is live!`);
});

app.listen(process.env.port || port, () => {
    console.log(`Servr live on port ${port}`);
});