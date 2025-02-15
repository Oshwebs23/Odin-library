const myLibrary = [];


// the constructor // 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author},${pages} pages, ${read ? 'yes read book' : 'not read yet'}`;
    }

}

// seperate function that will take arguements, create a book from those arguements, and then store the new book object into the array //

function addBookToLibrary(title, author, pages, read) {
    const book = new Book (title, author, pages, read); 
    myLibrary.push(book);

};

// Function that loops through the array and displays each book on the page //
function displayBooks () {
    console.log("Books are being displayed")
    const container = document.getElementById('book-container');

    container.innerHTML='';

    /* add elements to the functions which will display the information input from HTML form. 
    ELements will be p elements displaying Title, Author, Pages, and read or not */

    myLibrary.forEach((book) => {
        console.log(book.title);
        const bookDiv = document.createElement('div');
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookRead = document.createElement('p');

        bookTitle.innerText = `Title: ${book.title}`;
        bookAuthor.innerText = `Author: ${book.author}`;
        bookPages.innerText = `Pages: ${book.pages}`;
        bookRead.innerText = `Read: ${book.read}`;

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookRead);
        bookDiv.classList.add('book');
    
    container.appendChild(bookDiv);
})
}


// Function that takes the data from the form //

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title,author,pages,read);

    document.getElementById("newBookForm").reset();
    document.getElementById("newBookForm").style.display = "block";

    displayBooks();

}

