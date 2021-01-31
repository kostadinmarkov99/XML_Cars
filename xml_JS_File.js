function createXMLDocument() {
    let documentImplementation = document.implementation;
    debugger;
    let doc = documentImplementation.createDocument(null, "cars_1.xml");

    // Вместо коментар генерирайте валиден XML документ
    var rootElement = doc.createElement('car');
    doc.appendChild(rootElement);
    var make = doc.createElement('make');
    rootElement.appendChild(make);
    var makeText = doc.createTextNode('Тойота');
    make.appendChild(makeText);
    rootElement.setAttribute('vin', 'JT2CE82L9F3006626');
}