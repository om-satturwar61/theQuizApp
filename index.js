const express = require('express');
const cors = require('cors');
const quizzes = require('./db/quizzes');
const quizRouter = require('./router/quiz.router');
const userdata = require('./db/users');

const app = express();
app.use(cors());
app.use(express.json())

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Server is live!`);
});

app.use('/quiz', quizRouter);

app.post('/auth/login', (req, res) => {
    const {username, password} = req.body;
    console.log({username, password});
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password)
    if (isUserVerified){
        res.json({message: "User Verified"});
    }
    else{
        res.status(401).json({message: "Invalid Credentials"});
    }
    //res.json({username, password, message: "got the values"});
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server live on port ${PORT}`);
});