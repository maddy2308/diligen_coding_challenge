(function () {
    document.getElementsByClassName("show_doc")[0].addEventListener('mouseup', grepText);
    var docData = "";

    function grepText(e) {
        docData = document.getElementsByClassName("show_doc")[0].getAttribute('data-content');
        if (docData !== "") {
            //var textHighlighted = (document.all) ? document.selection.createRange().text : document.getSelection();
            var textHighlighted = document.getSelection();
            highlightText(textHighlighted.toString());
        }
    }

    function highlightText(t) {
        var ignore = document.getElementById("ignoreCase").checked ? "i" : "";
        //Handle special characters used in regex
        var searchregexp = new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "g"+ignore);
        document.getElementsByClassName("show_doc")[0].innerHTML = docData.replace(searchregexp, "<span class = 'highlight'>$&</span>");
    }

})();