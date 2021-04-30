const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname+'/dist/my-resume'));

app.get('/*', (req,res)=> {
    res.sendFile(path.join(__dirname+'/dist/my-resume/index.html'));
});

const port = 3000 || process.env.PORT;

app.listen(port, ()=> {
    console.log(`server started at port ${port}`);
})