const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const display = document.querySelector('.display-lib');

function displayLibrary() {
    display.innerHTML = '';
    myLibrary.forEach(function (book){
        const output = document.createElement('div');
        output.innerHTML = book.info();
        output.classList.add('card');
        display.appendChild(output);
    });
}

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.btn button');
const closeButton = document.querySelector('.btns-form > button[type="button"]');

showButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
}); 

const add = document.querySelector('.btns-form > button[type="submit"]');

add.addEventListener('click', (event) => {
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
    const book = new Book(author, title, pages, read);
    addBookToLibrary(book);
    event.preventDefault();
    dialog.close();
    displayLibrary();
});

