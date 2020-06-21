var express_1 = require('express');
var app = express_1["default"]();
app.get('/', function (request, response) {
    return response.json({ message: 'Hello Word' });
});
app.listen(3333);
