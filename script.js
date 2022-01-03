let bookName = document.getElementById('name')
let author = document.getElementById('author')
let addBtn = document.querySelector('.addBtn')
let removeBtn = document.querySelector('#removeBtn')
let output = document.querySelector('.list-elements')
let arr = [];
let li;



addBtn.addEventListener('click', () => {
	pushData();
    console.log(arr)
    arr.forEach(function(item) {
        li = document.createElement("li");

        li.innerHTML = `<p class="book-name">${item.book}</p><br>
                    <p class="book-author">${item.author}</p>
    <button type="button" value=${item.id} id="removeBtn">Remove</button>
    <hr class="line">`
    });
    output.appendChild(li);
});

function pushData() {
    arr.push({
        id: new Date().getTime().toString(),
        book : bookName.value,
        author : author.value
    }
    )
}

function removeData(id) {
    console.log(id)
    arr = arr.filter(e=> e.id.toString() !== id.toString())
    console.log(arr.filter(e=> e.id.toString() !== id.toString()))
    output.removeChild(li)
}

removeBtn.addEventListener(click,function() {
    let removeId =  removeBtn.id
    console.log(removeId)
})