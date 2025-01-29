const myLibrary = [];


// the constructor // 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

// seperate function that will take arguements, create a book from those arguements, and then store the new book object into the array //

function addBookToLibrary(title, author, pages, read) {
    const book = new Book (title, author, pages, read); 
    myLibrary.push(book);

}

