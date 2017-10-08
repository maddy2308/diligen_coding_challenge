(function () {
    module.exports = function () {
        const DocumentModel = require("../model/DocumentModel").schema;
        const fs = require("fs");
        return {
            getDocument: getDocument,
            getAllDocuments: getAllDocuments
        };

        function getDocument(docId) {
            var documents = getDocuments('../resources/mockup_data.json');
            return filterByRecordNumber(documents, docId);
        }

        function getAllDocuments() {
            return getDocuments('../resources/mockup_data.json');
        }

        function readJsonFileSync(filepath, encoding){
            if (typeof (encoding) === 'undefined'){
                encoding = 'utf8';
            }
            var file = fs.readFileSync(filepath, encoding);
            return deserialize(JSON.parse(file));
        }

        function deserialize(payload) {
            var index = 1;
            return payload['documents'].map(function (document) {
                return new DocumentModel(index++, document);
            });
        }

        function getDocuments(file){
            return readJsonFileSync(__dirname + '/' + file);
        }

        function filterByRecordNumber (documents, id) {
            return documents.filter(function(doc){
                return doc['id'] == id;
            });
        }

    }
})();