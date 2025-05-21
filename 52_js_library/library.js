class LibraryItem {
    pages = 100;
    #title;
    #author;

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
    }

    get getTitle() {
        return this.#title;
    }

    get getAuthor() {
        return this.#author;
    }

    setTitle(title) {
        return (this.#title = title);
    }
}

const LibraryItem2 = new LibraryItem('Title name', 'Author name');

LibraryItem2.pages = 200;
LibraryItem2.setTitle('New Title');
console.log(LibraryItem2);
console.log(LibraryItem2.getTitle);

class Book extends LibraryItem {
    #pages;
    constructor(title, author, pages) {
        super(title, author);
        this.#pages = pages;
    }

    get getPages() {
        return this.#pages;
    }
}

const book = new Book('Title name', 'Author name', 400);

console.log(book.getTitle);
console.log(book.pages);
console.log(book.getPages);