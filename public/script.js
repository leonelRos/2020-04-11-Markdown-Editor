window.onload = function() {
    let converter = new showdown.Converter();
    let pad = document.getElementById('pad');
    let markdownArea = document.getElementById('markdown');


    function convertAreaTextToMarkdown () {
        let markdownText = pad.value;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };
    pad.addEventListener('input', convertAreaTextToMarkdown);
    convertAreaTextToMarkdown();
}