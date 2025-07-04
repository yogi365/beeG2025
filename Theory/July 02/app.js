const http = require('http');
const fs = require('fs')
const queryString = require('querystring');
const server = http.createServer((req, res) =>
{
    if (req.url == '/')
    {
        res.setHeader('Content-Type', 'text/html');
        res.end(fs.readFileSync('./home.html', 'utf-8'));
        return;
    }

    if (req.url == '/registration' && req.method == "GET")
    {
        res.setHeader('Content-Type', 'text/html');
        res.end(fs.readFileSync('./registration.html', 'utf-8'));
        return;
    }

    if (req.url == '/registration' && req.method == "POST")
    {
        var body = '';
        req.on('data', (chunk) =>
        {
            body += chunk.toString();
        })

        req.on('end', () =>
        {
            const bodyObj = queryString.parse(body);
            // console.log(bodyObj);
            fs.writeFile('./data.json', JSON.stringify(bodyObj), (err) => { })
            res.statusCode = 301;
            res.setHeader('Location', '/');
            res.end();
        })
        return;
    }
})
server.listen(3000, () =>
{
    console.log('Server started')
})