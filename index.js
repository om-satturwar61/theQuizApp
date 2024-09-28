const express = require('express');
const cors = require('cors');
const quizzes = require('./db/quizzes');
const quizRouter = require('./router/quiz.router');

const app = express();
app.use(cors());
app.use(express.json())

const port = 3000;

app.get('/', (req, res) => {
    res.send(`Server is live!`);
});

app.use('/quiz', quizRouter);

app.listen(process.env.port || port, () => {
    console.log(`Server live on port ${port}`);
});