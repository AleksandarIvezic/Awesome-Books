let books = ["book1", "book2"];
const displayBooks = document.getElementById("displayBooks");

function addBook (book) {
  books.push(book);
}

function removeBook (rmBook) {
  books = books.filter(book => book !== rmBook );
}

function display () {
  books.forEach(book => {
    let bookContainer = document.createElement("div");
    bookContainer.style.borderBottom = "1px solid black";
    bookContainer.innerText = book;
    displayBooks.appendChild(bookContainer);
  });
  
}

display();