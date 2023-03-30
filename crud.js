const express = require('express')
const app = express();

app.get("" , (a,b) => {
    b.send(`
    <h1>welcome to home page</h1><a href="/app"> goto home page</a>
    `)
})
app.get("/app" , (a,b) => {
    b.send(`
    <input type = "text" placeholder = "your name " value="${a.quary.name}"/>
    <button>click me </button>
    <a href="/">go to home </a>
    `)
})
app.get("/app2" , (a,b) => {
    b.send([
        {
            name : 'meet',
            email : 'meetvaghasiya@gmail.com'
        },
        {
            name : 'ronak',
            email : 'ronakk@gmail.com'
        },
        {
            name : 'milan',
            email : 'milanb@gmail.com'
        },
        {
            name : 'daksh',
            email : 'dakshma@gmail.com'
        }
    ])
})
app.listen(4500)
