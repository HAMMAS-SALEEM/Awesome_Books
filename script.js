let bookName = document.getElementById('name')
let author = document.getElementById('author')
let addBtn = document.querySelector('.addBtn')
let output = document.querySelector('.list-elements')
let arr = [];
let li;

console.log(arr);

addBtn.addEventListener('click', () => {
	pushData();
    arr.forEach(function(item) {
			li = document.createElement("li");
			li.innerHTML += `<p class="book-name">${item.book}</p><br>
                        <p class="book-author">${item.author}</p>
    <button type="button" class="removeBtn">Remove</button>
    <hr class="line">`
		});
			output.appendChild(li);
});

function pushData() {
    arr.push({
        book : bookName.value,
        author : author.value
    }
    )
}
