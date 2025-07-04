const http = require('http');
const fs = require('fs');
const qs = require('querystring');

function requestHandler(request, response)
{
    // console.log(request.url);
    // console.log(request.method)
    // console.log(response);
    // response.setHeader('Content-Type', 'text/html');
    // response.statusCode = 201
    response.writeHeader(201, {
        'Content-Type': 'text/html'
    })
    // response.write('<html>');
    // response.write('<body>');
    // response.write('<h1>Hello Class </h1>');


    // if (request.url == '/home')
    // {
    //     response.write('<h1>Home Page </h1>')
    // }
    // else if (request.url == '/movies')
    // {
    //     response.write('<h1>Movies Page </h1>')
    // }
    // else
    // {
    //     response.write('<h1>Error 404: not found </h1>')
    // }

    // response.write('</body>');
    // response.write('</html>');
    // response.end();

    // const homePage = fs.readFileSync('./home.html', 'utf-8');
    // response.write(homePage);
    // response.end(homePage);


}
const server = http.createServer(requestHandler);

server.listen(3000, (err) =>
{
    if (err)
    {
        console.log(err)
    }
    else
    {
        console.log("Server started at port 3000")
    }
})