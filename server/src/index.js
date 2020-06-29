const express = require('express');

const app = express();
const router = require('./router');

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
});
const port = process.env.PORT||5000;

app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})