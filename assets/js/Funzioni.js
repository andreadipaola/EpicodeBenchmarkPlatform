

export default function createElement(tag, classe, idd) {
    let tags = document.createElement(tag)
    tags.classList.add(classe)
    tags.id = idd
    return tags;
}




// export default function createFullElement(tagname, attr) {

//     let elem = document.createElement(tagname);

//     if (attr.id) {
//         elem.id = attr.id;
//     }

//     if (attr.className) {
//         elem.className = attr.className;
//     }

//     if (attr.src) {
//         elem.src = attr.src;
//     }

//     if (attr.textContent) {
//         elem.textContent = attr.textContent;
//     }

//     return elem;

// }