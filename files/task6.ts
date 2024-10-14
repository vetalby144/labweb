interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
  
    borrow(): void;
  }
  
  
  class Book implements LibraryItem {
    title: string;
    author: string;
    pages: number;
    isBorrowed: boolean = false;
  
    constructor(title: string, author: string, pages: number) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    borrow(): void {
      if (!this.isBorrowed) {
        this.isBorrowed = true;
        console.log(`${this.title} has been borrowed.`);
      } else {
        console.log(`${this.title} is already borrowed.`);
      }
    }
  }
  
  class Magazine implements LibraryItem {
    title: string;
    author: string;
    issueNumber: number;
    isBorrowed: boolean = false;
  
    constructor(title: string, author: string, issueNumber: number) {
      this.title = title;
      this.author = author;
      this.issueNumber = issueNumber;
    }
  
    borrow(): void {
      if (!this.isBorrowed) {
        this.isBorrowed = true;
        console.log(`${this.title} (Issue ${this.issueNumber}) has been borrowed.`);
      } else {
        console.log(`${this.title} (Issue ${this.issueNumber}) is already borrowed.`);
      }
    }
  }
  
  class DVD implements LibraryItem {
    title: string;
    author: string;
    duration: number; 
    isBorrowed: boolean = false;
  
    constructor(title: string, author: string, duration: number) {
      this.title = title;
      this.author = author;
      this.duration = duration;
    }
  
    borrow(): void {
      if (!this.isBorrowed) {
        this.isBorrowed = true;
        console.log(`${this.title} (Duration: ${this.duration} mins) has been borrowed.`);
      } else {
        console.log(`${this.title} is already borrowed.`);
      }
    }
  }
  
  class Library {
    private items: LibraryItem[] = [];
  
    addItem(item: LibraryItem): void {
      this.items.push(item);
      console.log(`Item "${item.title}" has been added to the library.`);
    }
  
    findItemByName(name: string): LibraryItem | undefined {
      return this.items.find(item => item.title === name);
    }
  
    listAvailableItems(): void {
      const availableItems = this.items.filter(item => !item.isBorrowed);
      if (availableItems.length > 0) {
        console.log("Available items in the library:");
        availableItems.forEach(item => {
          console.log(`- ${item.title} by ${item.author}`);
        });
      } else {
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
  