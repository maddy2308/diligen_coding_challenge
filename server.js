const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

/*Run the server.*/
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log( "Listening on  server_port " + port )
});

require("./server/app")(app);
app.use(express.static(__dirname + '/public'));