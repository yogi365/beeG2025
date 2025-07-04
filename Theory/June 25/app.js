const fs = require('fs');
// fs.writeFile('./public/demo.txt', "Sample data in demo.txt ",
//     (err) =>
//     {
//         if (err)
//         {
//             console.log(err)
//         }
//         console.log("File written successfully");
//     }
// )

// fs.writeFileSync('./writesync.png', 'File written using sync method');
// console.log("After writing a file")

// fs.readFile('./demo.txt', 'utf-8', (err, data) =>
// {
//     if (err)
//     {
//         console.log(err)
//     }
//     console.log(data);
// })

// try
// {
//     const data = fs.readFileSync('./emo.txt', 'utf8');
//     console.log(data)
// }
// catch (err)
// {
//     console.error(err);
// }

// fs.appendFile('./demo.txt', "\nAppended data to old file", (err) =>
// {
//     if (err)
//     {
//         console.err(err);
//     }
//     console.log("success")
// })

// fs.unlink('./public/demo.txt', (err) =>
// {
//     if (err)
//     {
//         console.log(err)
//     }
//     console.log("file deleted")
// })

// const exist = fs.existsSync('./public');
// console.log(exist);

// fs.mkdir('./src', false, (err) =>
// {
//     if (err)
//     {
//         console.log(err)
//     }
//     console.log("directory created");
// })

fs.rmdir('./public', (err) =>
{
    if (err)
    {
        console.log(err)
    }
    console.log("Folder deleted")
})