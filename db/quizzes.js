const {v4 : uuid } = require("uuid");

const quizzes = {
    "data": [
        {
            id: uuid(),
            category: "marvel",
            title: "Marvel",
            description: "lorem ipsum",
            quiz: [
                {
                    id: uuid(),
                    question: "Black Panther is set in which fictional country ?",
                    options: [
                        {
                            id: uuid(),
                            option: "Wakanda",
                            isCorrect: true
                        },
                        {
                            id: uuid(),
                            option: "Takanda",
                            isCorrect: false
                        },
                        {
                            id: uuid(),
                            option: "Jakanda",
                            isCorrect: false
                        },
                        {
                            id: uuid(),
                            option: "Zakanda",
                            isCorrect: false
                        }
                    ]
                },
                {
                    id: uuid(),
                    question: "Who rescued Tony Stark and Nebula from space ?",
                    options: [
                        {
                            id: uuid(),
                            option: "Hulk",
                            isCorrect: false
                        },
                        {
                            id: uuid(),
                            option: "Thor",
                            isCorrect: false
                        },
                        {
                            id: uuid(),
                            option: "Captain Marvel",
                            isCorrect: true
                        },
                        {
                            id: uuid(),
                            option: "Captain America",
                            isCorrect: false
                        }
                    ]
                }
            ]
        }
    ]
}

module.exports = quizzes;