const bookName = document.getElementById('name');
const author = document.getElementById('author');
const addBtn = document.querySelector('.addBtn');
const output = document.querySelector('.list-elements');
let arr = [{ id: new Date().getTime().toString(), book: 'Avengers', author: 'Omar Labana' }];

function locStorage() {
  localStorage.setItem('booksList', JSON.stringify(arr));
}

if (localStorage.getItem('booksList') === null) {
  locStorage();
} else if (JSON.parse(localStorage.getItem('booksList')).length === 0) {
  locStorage();
}

class PushBook {
  constructor() {
    this.id = new Date().getTime().toString(),
    this.book = bookName.value,
    this.author = author.value
  }
}

class Render {
  constructor() {
    this.arr = [];
  }

  addBook() {
    const book = new PushBook();
    arr.push(book);
    locStorage();
    pushListItem();
  }
  
  RemoveBook(id) {
    arr = arr.filter((e) => e.id !== id);
    console.log(arr)
    locStorage();
    pushListItem();
  }
}

const renderData = new Render();
console.log(renderData)

function pushListItem() {
  let bookHtml = '';
  const booksArray = JSON.parse(localStorage.getItem('booksList'));
  if (booksArray !== null) {
    arr = booksArray;
    booksArray.forEach((item) => {
      bookHtml += `<li class="list_item">
      <p class="book-name">"<b>${item.book}</b>" by ${item.author}</p>
                      <button type="button" id=${item.id} onclick="renderData.RemoveBook(${item.id})">Remove</button>`;
    });
    output.innerHTML = bookHtml;
  }
}
pushListItem();

addBtn.addEventListener('click', () => {
  renderData.addBook();
})

/*
class RemData {
  removeData(id) {
    arr = arr.filter((e) => e.id !== id);
      const book = new PushBook();
      locStorage()
      pushListItem()
    }
}

let remData = new RemData();
remData.removeData();
*/

/*@@ -1,67 +1,71 @@
const bookName = document.getElementById('name');
const author = document.getElementById('author');
const addBtn = document.querySelector('.addBtn');
const output = document.querySelector('.list-elements');
let arr = [{ id: new Date().getTime().toString(), book: 'Avengers', author: 'Omar Labana' }];
const error = document.getElementById('error');

function locStorage() {
  localStorage.setItem('booksList', JSON.stringify(arr));
}

if (localStorage.getItem('booksList') === null) {
  locStorage();
} else if (JSON.parse(localStorage.getItem('booksList')).length === 0) {
  locStorage();
}

class PushBook {
    constructor() {
      this.id = new Date().getTime().toString(),
      this.book = bookName.value,
      this.author = author.value
    }
    updateLoc() {
      locStorage();
    }
}

class DisplayBooks {
  pushListItem() {
  let bookHtml = '';
  const booksArray = JSON.parse(localStorage.getItem('booksList'));
  if (booksArray !== null) {
    arr = booksArray;
    booksArray.forEach((item) => {
      bookHtml += `<li class="list_item"><p class="book-name">${item.book}</p><br>
                          <p class="book-author">${item.author}</p>
                      <button type="button" id=${item.id} onclick="remData.removeData(this.id)">Remove</button>
                      <hr class="line"></li>`;
      bookHtml += `<li class="list_item">
      <p class="book-name">"<b>${item.book}</b>" by ${item.author}</p>
                      <button type="button" id=${item.id} onclick="remData.removeData(this.id)">Remove</button>`;
    });
    output.innerHTML = bookHtml;
  }
}
}

const display = new DisplayBooks();
display.pushListItem();

addBtn.addEventListener('click', () => {
  const book = new PushBook();
  const display = new DisplayBooks();
  arr.push(book);
  book.updateLoc();
  display.pushListItem()
  if(bookName.value === '' && author.value === '') {
    alert("Please type in your data")
  }else {
    const book = new PushBook();
    const display = new DisplayBooks();
    arr.push(book);
    book.updateLoc();
    display.pushListItem()
  }
})

class RemData {
  removeData(id) {
      arr = arr.filter((e) => e.id !== id);
      const book = new PushBook();
      const display = new DisplayBooks();
      book.updateLoc();
      display.pushListItem()
    }
}

let remData = new RemData();
remData.removeData();*/