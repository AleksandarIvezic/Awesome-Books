// eslint-disable-next-line no-array-constructor
let books = new Array();
const displayBooks = document.getElementById('displayBooks');
const addButton = document.getElementById('add');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    books.push(this);
  }

  remove() {
    books = books.filter((book) => book.title !== this.title || book.author !== this.author);
  }
}
function saveBooks() {
  const myBooks = JSON.stringify(books);
  localStorage.setItem('books', myBooks);
}
function display() {
  displayBooks.innerHTML = ' ';
  books.forEach((book) => {
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const remove = document.createElement('button');
    remove.textContent = 'Remove';
    remove.onclick = () => {
      book.remove();
      saveBooks();
      display();
    };
    bookTitle.innerText = book.title;
    bookAuthor.innerText = book.author;
    displayBooks.appendChild(bookContainer);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(remove);
  });
}
function addBook() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const book = new Book(title.value, author.value);
  book.add();
  saveBooks();
  display();
  title.value = '';
  author.value = '';
}
addButton.onclick = addBook;
function checkStorage() {
  if (localStorage.getItem('books')) {
    const booksData = JSON.parse(localStorage.getItem('books'));
    booksData.forEach((book) => {
      const newBook = new Book(book.title, book.author);
      newBook.add();
    });
    display();
  }
}
window.onload = checkStorage;
