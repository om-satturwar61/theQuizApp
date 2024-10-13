const express = require('express');
const cors = require('cors');
const quizzes = require('./db/quizzes');
const quizRouter = require('./router/quiz.router');
const userdata = require('./db/users');
const jwt = require('jsonwebtoken');
const {loginRouter, signupRouter} = require('./router/auth.router');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Server is live!`);
});

app.use('/quiz', quizRouter);

app.use('/auth/login', loginRouter);

app.user('/auth/signup', signupRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server live on port ${PORT}`);
});