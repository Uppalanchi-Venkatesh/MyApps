const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const codechefLib = require('./src/assets/Lib/Codechef');

app.use(express.static(__dirname + '/dist/MyResume'));
app.use(cors());

app.get('/api/codechef/:handle', (req, res) => {
    codechefLib.userSubmissions(req.params.handle)
        .then(data => res.send(data))
        .catch(err => res.send({status: 'failed'}));
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/MyResume/index.html'));
});

const serve_port = process.env.PORT || 3000;
const server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(serve_port, server_host, () => {
    console.log(`server started at port ${serve_port}`);
});

