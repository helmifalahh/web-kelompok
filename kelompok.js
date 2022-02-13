const express = require('express');

const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const staticpath = path.join(__dirname,'/')

app.use(express.static(staticpath));
//masuk tahap sendfile
app.get('/',function(req, res) {
    res.sendFile(staticpath + '/kelompok.html');
});

app.listen(port);
console.log('Server started at http://localhost:' + port);