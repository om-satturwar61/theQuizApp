const { v4: uuid } = require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "prakashsakari",
            password: "ps12345",
            emailID: "pk@gmail.com"
        },
        {
            id: uuid(),
            username: "ashishjangra",
            password: "aj12345",
            emailID: "aj@gmail.com"
        }
    ]
}

module.exports = userdata;