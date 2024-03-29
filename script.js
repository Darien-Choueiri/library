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
    let index = 0;
    myLibrary.forEach(function (book){
        const output = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const remove = document.createElement('button');
        const read = document.createElement('button');
        const buttons = document.createElement('div');

        buttons.classList.add('btns-card');
        output.classList.add('card');

        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = book.pages + " pages";
        remove.innerHTML = "Delete";
        if (book.read === false){
            read.innerText = 'Not Read';
            read.id = 'secondary';
        } else {
            read.id = '';
            read.innerText = 'Read';
        }

        output.dataset.indexNumber = index;

        remove.addEventListener('click', () => {
           display.removeChild(output);
           myLibrary.splice(output.dataset.indexNumber, 1);
        });

        read.addEventListener('click', () => {
            if (book.read === true){
                read.innerText = 'Not Read';
                read.id = 'secondary';
            } else {
                read.id = '';
                read.innerText = 'Read';
            }
            book.read = !book.read;
        });

        buttons.appendChild(read);
        buttons.appendChild(remove);

        output.appendChild(title); 
        output.appendChild(author);
        output.appendChild(pages);
        output.appendChild(buttons);
        
        display.appendChild(output);
        index += 1;
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

const submit = document.querySelector('form');
submit.addEventListener('submit', (event) => {
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    event.preventDefault();
    dialog.close();
    displayLibrary();
});


