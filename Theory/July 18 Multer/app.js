const express = require('express');
const app = express();
const userRouter = require("route");


app.get('/', (req, res) =>
{
    res.send("Some data");
})

app.use('/user', userRouter)

app.listen(3000, () =>
{
    console.log(" server started at http://localhost:3000");
})

//locahostl/user/login