const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs');
app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.get('/', (req, res) =>
// {
//     var student = {
//         student_name: "Abc",
//         age: 27,
//         address: "Chandigarh"
//     }
//     // console.log(req.url);
//     // res.send("<h1>Hello Class</h1>")
//     // res.send(student);
//     // res.json(student);
//     // console.log(__dirname)
//     // console.log(__filename)
//     const absolutePath = path.join("home", 'index.html')
//     console.log(path.extname(__filename))
//     res.sendFile(path.join(__dirname, "index.html"))
// })

app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/signup', (req, res) =>
{

    res.sendFile(path.join(__dirname, 'user.html'))
})
app.post('/signup', (req, res) =>
{
    // console.log(req.body);
    const formData = req.body;
    const fileData = [];
    const filePath = path.join(__dirname, 'data', 'user.json');
    if (fs.existsSync(filePath))
    {
        fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    fileData.push(formData);
    fs.writeFileSync(filePath, JSON.stringify(fileData));
    // res.redirect('/');
    res.json({ status: 200, message: "Data saved" })
})


app.get('/user', (req, res) =>
{
    const userData = req.query;
    res.send(userData)
})

app.get('/product/:id', (req, res) =>
{
    console.log(req.params)
    res.send('product')
})
app.listen('3000', (err) =>
{
    console.log("Server started at 3000")
})