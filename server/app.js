module.exports = function (app) {
    var documentDAO = require("./dao/DocumentDAO")();
    require("./service/DocumentService")(app, documentDAO);
};
