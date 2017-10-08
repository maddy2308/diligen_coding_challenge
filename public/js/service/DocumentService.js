(function() {
    var httpRequest;
    document.getElementById("request_doc").addEventListener('click', makeRequest);

    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        var docId = document.getElementById("docId").value;
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', '/rest/document/' + docId);
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // Assuming that there will be only one document per id;
            var element = document.getElementsByClassName("show_doc")[0];
            if (httpRequest.status === 200) {
                var panel = document.getElementById("content_panel");
                var docs = JSON.parse(httpRequest.responseText);
                panel.classList.remove('panel-danger');
                panel.classList.add('panel-info');
                element.innerHTML = docs[0]['content'];
                element.setAttribute('data-content', docs[0]['content']);
            } else {
                panel = document.getElementById("content_panel");
                panel.classList.remove('panel-info');
                panel.classList.add('panel-danger');
                element.innerHTML = '<span class="alert alert-error">404, Document Not found</\span>';
                element.setAttribute('data-content', '');
            }
        }
    }
})();