const bookName = document.getElementById('name');
const author = document.getElementById('author');
const addBtn = document.querySelector('.addBtn');
const output = document.querySelector('.list-elements');
let arr = [{ id: new Date().getTime().toString(), book: 'Avengers', author: 'Omar Labana' }];
if (localStorage.getItem('booksList') === null) {
  localStorage();
}
function locStorage() {
  localStorage.setItem('booksList', JSON.stringify(arr));
}

function pushBook() {
  if (bookName.value !== '' && author.value !== '') {
    arr.unshift({
      id: new Date().getTime().toString(),
      book: bookName.value,
      author: author.value,
    });
    locStorage();
  } else {
    alert('Please type in your data');
  }
}

function pushListItem() {
  let bookHtml = '';
  const booksArray = JSON.parse(localStorage.getItem('booksList'));
  if (booksArray !== null) {
    arr = booksArray;
    booksArray.forEach((item) => {
      bookHtml += `<li class="list_item"><p class="book-name">${item.book}</p><br>
                          <p class="book-author">${item.author}</p>
                      <button type="button" id=${item.id} onclick="removeData(this.id)">Remove</button>
                      <hr class="line"></li>`;
    });
    output.innerHTML = bookHtml;
  }
}
pushListItem();

function removeData(id) {
  arr = arr.filter((e) => e.id.toString() !== id.toString());
  locStorage();
  pushListItem();
}

addBtn.addEventListener('click', () => {
  pushBook();
  pushListItem();
});

removeData();