function colorAllParagraphs(color){
    let paragraphs = document.querySelectorAll('.colorParagraph');
    paragraphs.forEach(paragraph => {
        paragraph.style.color= color;
    });
}

module.exports.colorAllParagraphs = colorAllParagraphs;