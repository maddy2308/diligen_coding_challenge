module.exports = function (app, documentDAO) {

    app.get('/rest/document/:documentID', getDocument);
    app.get('/rest/documents', getAllDocuments);

    function getDocument(req, res) {
        var docId = req.params['documentID'];
        var doc = documentDAO.getDocument(docId);
        if (!doc || doc.length === 0) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Cannot Find the document with id ' + docId);
        } else {
            res.send(doc);
        }
    }

    function getAllDocuments(req, res) {
        res.send(documentDAO.getAllDocuments(req));
    }

};
