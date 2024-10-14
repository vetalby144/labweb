"use strict";
class Book {
    constructor(title, author, pages) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`${this.title} has been borrowed.`);
        }
        else {
            console.log(`${this.title} is already borrowed.`);
        }
    }
}
class Magazine {
    constructor(title, author, issueNumber) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`${this.title} (Issue ${this.issueNumber}) has been borrowed.`);
        }
        else {
            console.log(`${this.title} (Issue ${this.issueNumber}) is already borrowed.`);
        }
    }
}
class DVD {
    constructor(title, author, duration) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`${this.title} (Duration: ${this.duration} mins) has been borrowed.`);
        }
        else {
            console.log(`${this.title} is already borrowed.`);
        }
    }
}
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        console.log(`Item "${item.title}" has been added to the library.`);
    }
    findItemByName(name) {
        return this.items.find(item => item.title === name);
    }
    listAvailableItems() {
        const availableItems = this.items.filter(item => !item.isBorrowed);
        if (availableItems.length > 0) {
            console.log("Available items in the library:");
            availableItems.forEach(item => {
                console.log(`- ${item.title} by ${item.author}`);
            });
        }
        else {
            console.log("No available items in the library.");
        }
    }
}
const library = new Library();
const book1 = new Book("2005", "Antoshchenko Taras", 228);
const book2 = new Book("Kto ya", "Vitaliy Mateiuk", 110);
const magazine1 = new Magazine("Vogue", "Vogue", 505);
const dvd1 = new DVD("Titanic", "IDK", 100);
library.addItem(book1);
library.addItem(book2);
library.addItem(magazine1);
library.addItem(dvd1);
library.listAvailableItems();
book1.borrow();
dvd1.borrow();
book1.borrow();
const foundItem = library.findItemByName("Kto ya");
if (foundItem) {
    console.log(`Found item: ${foundItem.title} by ${foundItem.author}`);
}
library.listAvailableItems();
