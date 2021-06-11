const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const codechefLib = require('./src/assets/Lib/Codechef');

app.use(express.static(__dirname + '/dist/MyResume'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/api/codechef/:handle', (req, res) => {
    req.setTimeout(60*60*60*1000);
    codechefLib.userContestsWithRanks(req.params.handle)
        .then(data => res.json(data))
        .catch(err => {
            console.error(err);
            res.json({status: 'failed'});
        });
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/MyResume/index.html'));
});

const serve_port = process.env.PORT || 3000;
//const server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(serve_port, () => {
    console.log(`server started at port ${serve_port}`);
});

