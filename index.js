const express = require('express');
const quizzes = require('./db/quizzes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Server is live!`);
});

app.get('/quiz', (req, res) => {
    res.send(quizzes.data);
})

app.listen(process.env.port || port, () => {
    console.log(`Server live on port ${port}`);
});