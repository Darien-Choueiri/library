function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return console.log(`${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`)
    }
}