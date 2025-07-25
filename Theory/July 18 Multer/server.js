const express = require('express');
const app = express();
const multer = require('multer');
app.listen(3000, () =>
{
    console.log(" server started at http://localhost:3000");
})

app.use(express.urlencoded({ extended: true }))
const storage = multer.diskStorage({
    destination: function (req, file, cb)
    {
        console.log(file.mimetype)
        if (file.mimetype == "image/jpeg")
        {
            cb(null, "upload/images/")
        }
        else
        {
            cb(null, "upload/")
        }
    },
    filename: function (req, file, cb)
    {
        const date = new Date().now;
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: function (req, file, cb)
    {
        if (file.mimetype.startsWith("image/"))
        {
            cb(null, true)
        }
        else
        {
            cb(new Error("Only image file are accepted"), false)
        }
    }
}
)

app.get('/', (req, res) =>
{
    res.sendFile('/index.html', { root: '.' });
})

app.post('/uploadFile', upload.single("fileUploadField"), (req, res) =>
{
    const bodyData = req.body;
    console.log(bodyData)
    res.send("File Received")
})