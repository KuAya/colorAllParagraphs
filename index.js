function colorAllParagraphs(color){
    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.color= color;
    });
}

module.exports.colorAllParagraphs = colorAllParagraphs;