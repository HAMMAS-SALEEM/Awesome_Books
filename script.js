/* eslint-disable max-classes-per-file */

const bookName = document.getElementById('name');
const author = document.getElementById('author');
const output = document.querySelector('.list-elements');
const defaultObj = {
  id: '1',
  book: 'Avengers',
  author: 'Hammas'
} 

class Collection {
  constructor() {
    this.arr = [];
  }

  //class to check array items in the local storage

  getBooks() {
    if (localStorage.getItem('booksList') === null) {
      this.arr.push(defaultObj);
      console.log('null');
      console.log(this.arr.push(defaultObj));
    }
     else {
      this.arr = JSON.parse(localStorage.getItem('booksList'));
      console.log('Not empty');
    }
  }

  //class to update array in the local storage

  UpdateLocalStorage() {
    localStorage.setItem('booksList', JSON.stringify(this.arr));
  }

  //class to display data in the array
/*
  displayData() {
    let li;
    console.log("!"+this.arr)
    this.arr.forEach((item) => {
      li = document.createElement('li');
      li.className = 'list_item';
      li.innerHTML += `<p class="book-name">"${item.book}" by ${item.author}</p>`;
      const btn = document.createElement('button');
      btn.innerHTML = "Remove";
      btn.addEventListener('click',()=>{
        this.removeBooks(item.id);
      })

      li.appendChild(btn);
  })
  output.appendChild(li);
  }*/

  //class to push items into array and display them

  addBooks() {
    const bookObj = {
      id : new Date().getTime().toString(), 
      book : bookName.value,
      author : author.value
    };
    this.arr.push(bookObj);
    this.UpdateLocalStorage();
    pushListItem();
  }

  //class to remove items from array and display them

  removeBooks(id) {
    this.arr = this.arr.filter((e) => e.id !== id);
    this.UpdateLocalStorage();
    pushListItem()
  }
}

const collection = new Collection();

function pushListItem() {
    let bookHtml = '';
    let booksArray = JSON.parse(localStorage.getItem('booksList'));
    if(booksArray!==null){
        arr = booksArray;
        booksArray.forEach((item)=>{
        bookHtml += `<li class="list_item">
        <p class="book-name">"${item.book}" by ${item.author}</p><br><button type="button" id=${item.id} onclick="collection.removeBooks(this.id)">Remove</button></li>`
        });
        output.innerHTML = bookHtml
    }
}

//window onload function to get array items from the local storage and display them

window.onload = () => {
  collection.getBooks();
  pushListItem();
}

const addBtn = document.querySelector('.addBtn');

// event listener to trigger add class

addBtn.addEventListener('click', ()=>{
  collection.getBooks();
  collection.addBooks();
})




// form prevent default


/*const bookName = document.getElementById('name');
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