const Boek = function (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

Boek.prototype.summary = function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, isRead: ${this.isRead? 'Yes':'No'}`;
};

// try it out
const Eragon = new Boek('Eragon', 'Paul Paloni', 707, true);
console.log(Eragon);