module.exports = function (app) {
    var documentDAO = require("./DAO/DocumentDAO")();
    require("./Service/DocumentService")(app, documentDAO);
};
