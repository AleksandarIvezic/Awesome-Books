let books = [];
const displayBooks = document.getElementById("displayBooks");
let addButton = document.getElementById("add");
function addBook () {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let book = new formBook (title.value, author.value);
  books.push(book);
  saveBooks();
  display ();
}
addButton.onclick = addBook;
function removeBook (e) {
  let bookTitle = e.target.parentElement.childNodes[0].textContent;
  let bookAuthor = e.target.parentElement.childNodes[1].textContent;
  books = books.filter(book => book.title !== bookTitle || book.author !== bookAuthor);
  saveBooks();
  display();
}
function display () {
  displayBooks.innerHTML = " ";
  books.forEach(book => {
    let bookContainer = document.createElement("div");
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.onclick = removeBook;
    bookTitle.innerText = book.title;
    bookAuthor.innerText = book.author;
    displayBooks.appendChild(bookContainer);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(remove);
  });
}
function formBook (title, author){
  this.title = title;
  this.author = author;
}
function saveBooks() {
  let myBooks = JSON.stringify(books);
  localStorage.setItem('books', myBooks);
}
function checkStorage() {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
    display();
  }
}
window.onload = checkStorage;
display();