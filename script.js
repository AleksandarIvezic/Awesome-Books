let books = [];

function addBook (book) {
  books.push(book);
}

function removeBook (rmBook) {
  books = books.filter(book => book !== rmBook );
}