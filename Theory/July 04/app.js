const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
http.createServer((req, res) =>
{
    if (req.url == "/")
    {
        const index = fs.readFileSync('./index.html', 'utf-8');
        res.setHeader('Content-Type', 'text/html');
        res.write(index);
        res.end();
    }
    if (req.url == "/movies" && req.method == "GET")
    {
        const movies = fs.readFileSync('./movies.json', 'utf-8');
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Method', "POST,GET")
        res.setHeader('Content-Type', 'application/json');
        res.write(movies);
        res.end();
    }

    if (req.url == "/movies" && req.method == "POST")
    {
        var data = '';
        req.on('data', (chunk) =>
        {
            data += chunk.toString()
        })
        req.on('end', () =>
        {
            const parsedData = queryString.parse(data);
            var movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'));
            movies.push(parsedData);
            fs.writeFileSync('./movies.json', JSON.stringify(movies));
            res.setHeader('Location', '/movies');
        })
        res.end();

    }
}).listen(3000, () =>
{
    console.log("Server Started")
})