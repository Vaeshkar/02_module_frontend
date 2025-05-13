/* 1. Create an Object called Book using object literals syntax */
/* 2. Add: Book, Title, Author, Pages, isRead */
const book = {
    title: 'Working to Learn',
    author: 'Dennis van Leeuwen',
    pages: 754,
    isRead: true,
    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead? 'Yes': 'No'}`;
    },
};

/* 3. Add a method names summary to the book object. 
This method should return a string summariying the book details in the format: 
"Title: [title], Author: [Author], Pages: [pages], Read: [Yes/No]*/

console.log(book.pages) /* Dot Notation method */
console.log(book['author']) /* Squarre Brackets method, make it a string */
console.log(book.summary()) /* Run the programm inside the object */