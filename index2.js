const express = require('express');
const torrentSearch = require('./torrentSearch');
const app = express();
const port = 3000;


app.get('/',async (request, response) => {
    const searchQuery = request.query.search;
    if (searchQuery != null) {
    //    var results=await torrentSearch(searchQuery)
    //    console.log(results);
       
       torrentSearch(searchQuery)
            .then(results => {
                response.status(200);
                response.json(results);
            });
    } else {
        response.end();
    }
});

app.get('/',async (request, response) => {
    const url = request.query.url;
    if (url != null) {
       torrentSearch(url)
            .then(results => {
                response.status(200);
                response.json(results);
            });
    } else {
        response.end();
    }
});



//Catches requests made to localhost:3000/
// app.get('/', (req, res) => res.send('Hello World!'));


//Initialises the express server on the port 30000
app.listen(port, () => console.log(`server is listening on port ${port}!`));
