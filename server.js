const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Diligen app listening on port 3000!')
});

require("./server/app")(app);
app.use(express.static(__dirname + '/public'));