const express = require('express');
const app = express();
app.listen(3000);
const fs = require('fs');
app.use(express.urlencoded({ extended: true }))

app.get('/login', (req, res) =>
{
    res.sendFile('/login.html', { root: "./src/UI/user" })
})

app.get('/registration', (req, res) =>
{
    res.sendFile('/registration.html', { root: "./src/UI/user" })
})
app.get('/dashboard/:role', (req, res) =>
{
    // console.log('dashboard')
    const role = req.params.role;

    res.sendFile('/dashboard.html', { root: `./src/UI/${role}` })
})

app.post('/login', (req, res) =>
{
    const bodyData = req.body;
    const users = JSON.parse(fs.readFileSync('./src/data/user.json', 'utf-8'));
    // console.log(bodyData.email);
    const user = users.find(user => user.email == bodyData.email);
    // console.log(user)
    if (user.password != bodyData.password)
    {
        return res.send("Invalid password")

    }
    // console.log(!user.isAdmin)
    if (user.isAdmin)
    {
        return res.redirect("/dashboard/admin")
    }

    return res.redirect("/dashboard/user")
    //bcrypt




})

app.post("/registration", (req, res) =>
{
    const userData = JSON.parse(fs.readFileSync('./src/data/user.json', 'utf-8'));
    const userObject = req.body;
    userData.push(userObject);
    fs.writeFileSync("./src/data/user.json", JSON.stringify(userData));
    res.redirect('/login')//this will be get request
})