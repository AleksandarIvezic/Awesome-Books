let books = [];
const displayBooks = document.getElementById("displayBooks");
let addButton = document.getElementById("add");

function addBook () {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let book = new formBook (title.value, author.value);
  books.push(book);

  display ();
}

addButton.onclick = addBook;



function removeBook (rmBook) {
  books = books.filter(book => book !== rmBook );
}

function display () {
  books.forEach(book => {
    let bookContainer = document.createElement("div");
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    bookContainer.textContent = "";
    bookTitle.innerText = book.title;
    bookAuthor.innerText = book.author;
    displayBooks.appendChild(bookContainer);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
  });
  
}

function formBook (title, author){
  this.title = title;
  this.author = author;
}

display();