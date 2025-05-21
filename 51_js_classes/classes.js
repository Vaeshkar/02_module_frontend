class Boek {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, isRead: ${this.isRead? 'yes':'no'}`;
    }
}

const eragonPart2 = new Boek('Eragon2', 'Paul Paloni', 854, false);

console.log(eragonPart2.summary()); // print the summary of the new Object
console.log(eragonPart2); // print the new Object from the main Class