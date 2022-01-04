let bookName = document.getElementById('name')
let author = document.getElementById('author')
let addBtn = document.querySelector('.addBtn')
let removeBtn = document.querySelector('#removeBtn')
let output = document.querySelector('.list-elements')
let arr = [];




addBtn.addEventListener('click', () => {
    pushBook();
    pushListItem();
}
)

function pushBook() {
    arr.unshift({
        id: new Date().getTime().toString(),
        book : bookName.value,
        author : author.value
    }
    )
    
    locStorage();
}

function pushListItem() {
    let bookHtml = '';
    let booksArray = localStorage.getItem('booksList');
    let booksItems = JSON.parse(booksArray);
    if(booksItems==null){
        
    } else {
    booksItems.forEach(item=>{
    bookHtml += `<li class="list_item"><p class="book-name">${item.book}</p><br>
    <p class="book-author">${item.author}</p>
<button type="button" id=${item.id} onclick="removeData(this.id)">Remove</button>
<hr class="line"></li>`
    })
    output.innerHTML = bookHtml
}

}
pushListItem();

function removeData(id) {
    arr = arr.filter(e=> e.id.toString() !== id.toString())
    locStorage();
    pushListItem();
}

function locStorage() {
    localStorage.setItem("booksList" , JSON.stringify(arr))
}