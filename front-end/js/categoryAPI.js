let categoryContainer = document.querySelector('.category-page-container')
let mainURL = `http://localhost:3000/api/`

window.addEventListener('load', () => {
    getCategory()
});


function getCategory() {
    fetch(`${mainURL}category/getAllCategory`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            categoryContainer.innerHTML = ''
            data.forEach(category => {
                categoryContainer.insertAdjacentHTML(`afterbegin`, `
                <div class="category-item-part main-cat-item-${data.indexOf(category) +1}">
                <a href="productList.html?id=${category.id}&title=${category.title}">
                    <h2 class="font-bold">${category.title}</h2>
                </a>
            </div>
                `)
            })
        })
}