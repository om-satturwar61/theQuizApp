const express = require('express');
const cors = require('cors');
const quizzes = require('./db/quizzes');
const quizRouter = require('./router/quiz.router');
const userdata = require('./db/users');

const app = express();
app.use(cors());
app.use(express.json())

const port = 3000;

app.get('/', (req, res) => {
    res.send(`Server is live!`);
});

app.use('/quiz', quizRouter);

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    console.log({username, password});
});

app.listen(process.env.port || port, () => {
    console.log(`Server live on port ${port}`);
});