const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname+'/dist/MyResume'));

app.get('/*', (req,res)=> {
    res.sendFile(path.join(__dirname+'/dist/MyResume/index.html'));
});

const serve_port = process.env.PORT || 3000;
const server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(serve_port,server_host, ()=> {
    console.log(`server started at port ${serve_port}`);
});
