var express = require('express');
var cors = require('cors');
var axios = require('axios');
var app = express();
app.use(cors());

const port = 3000

app.get('/', function(req, res) => {
    var data =axios.get(" https://pnyv9hc928.execute-api.us-east-2.amazonaws.com/prod")
 .then((response) =>{
    res.send=(response.data);
             });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
