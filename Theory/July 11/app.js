const express = require('express');
const app = express();
app.listen(3000);

// app.get('/', (req, res) =>
// {
//     const user = req.query;
//     res.send(user)
// })
// app.get('/:username', (req, res) =>
// {
//     const user = req.params;
//     res.send(user);

// })
// app.use((req, res, next) =>
// {
//     console.log("first middleware triggered");
//     // res.send("First middleware triggered")
//     req.body = { "username": "user" }
//     next()
// })

// app.use((req, res, next) =>
// {
//     console.log("second middleware triggered");
//     next();
// })

// app.get('/', (req, res, next) =>
// {
//     res.send("Home page");
//     // next();
// })

// app.get('/about', (req, res, next) =>
// {
//     res.send("About page");
//     // next();
// })

//app.use((req, res) =>
// {
//     res.statusCode = 404;
//     res.statusMessage = "Invalid request"
//     res.send("404: resource not found")
// })

//Handling static files

app.use(express.static("./public"))

app.get('/', (req, res) =>
{
    res.sendFile('index.html', { root: '.' })
})

// app.get('/style', (req, res) =>
// {
//     res.sendFile("./style.css", { root: '.' })
// })