/* eslint-disable max-classes-per-file */

const bookName = document.getElementById('name');
const author = document.getElementById('author');
const output = document.querySelector('.list-elements');

function pushListItem() {
  let bookHtml = '';
  const booksArray = JSON.parse(localStorage.getItem('booksList'));
  if (booksArray !== null) {
    booksArray.forEach((item) => {
      bookHtml += `<li class="list_item">
    <p class="book-name">"${item.book}" by ${item.author}</p><br><button type="button" id=${item.id} onclick="collection.removeBooks(this.id)">Remove</button></li>`;
    });
    output.innerHTML = bookHtml;
  }
}

class Collection {
  constructor() {
    this.arr = [];
  }

  // class to check array items in the local storage

  getBooks() {
    if (localStorage.getItem('booksList') === null) {
      this.arr = [];
    } else {
      this.arr = JSON.parse(localStorage.getItem('booksList'));
    }
  }

  // class to update array in the local storage

  UpdateLocalStorage() {
    localStorage.setItem('booksList', JSON.stringify(this.arr));
  }

  // class to push items into array and display them

  addBooks() {
    const bookObj = {
      id: new Date().getTime().toString(),
      book: bookName.value,
      author: author.value,
    };
    this.arr.push(bookObj);
    this.UpdateLocalStorage();
    pushListItem();
  }

  // class to remove items from array and display them

  removeBooks(id) {
    this.arr = this.arr.filter((e) => e.id !== id);
    this.UpdateLocalStorage();
    pushListItem();
  }
}

const collection = new Collection();



// window onload function to get array items from the local storage and display them

window.onload = () => {
  collection.getBooks();
  pushListItem();
};

const addBtn = document.querySelector('.addBtn');

// event listener to trigger add class

addBtn.addEventListener('click', () => {
  collection.getBooks();
  collection.addBooks();
});
