let titleFav = document.querySelector('.title-fav-items')
let favItemsContainer = document.querySelector('.fav-items-container ')
let error = document.querySelector('.error')
let mainURL = `http://localhost:3000/api/`




function getFavorite() {
    let urlSearch = location.search
    let urlParams = new URLSearchParams(urlSearch)

    let titleURL = urlParams.get('title')

    if (titleURL == 'favArticle') {

        titleFav.innerHTML = 'مقالات مورد علاقه شما'
        fetch(`${mainURL}favArticle/getAllArticle`)
            .then(res => res.json())
            .then(data => {

                favItemsContainer.innerHTML = '<h1 class="font-bold text-red-500 text-xl error text-center w-full">کالا یا مقاله مورد نظر شما یافت نشد</h1>'
                if (data.length) {
                    error.style.display = 'none'
                    data.forEach(article => {
                        favItemsContainer.innerHTML = ''
                        favItemsContainer.className = 'py-8 px-2 grid article-list-page-container sm:grid-cols-2 gap-3 lg:grid-cols-4'
                        favItemsContainer.insertAdjacentHTML(`afterbegin`, `
                    <div class="article-list-item text-center">
                    <div class="container photo">
                        <img src="${article.img}" alt="Avatar" class="image">
                        <div class="overlay">
                            <div class="text">
                                <a href="articleText.html?title=${article.urlArticle}">مشاهده مقاله</a>
                            </div>
                        </div>
                    </div>
                    <div class="detail-article">
                        <a href="articleText.html?title=${article.urlArticle}">
                            <p class="text-gray-500">${article.categoryArticle}</p>
                            <h2 class="text-lg">${article.title}</h2>
                        </a>
                    </div>
                    <button onclick="deleteArticleFav(${article.id})"  class="bg-red-700 text-white my-3 px-2 py-3 rounded">حدف از علاقه مندی</button>
                </div>
                    `)
                    })
                } else {
                    favItemsContainer.className = 'fav-items-container text-right py-8'
                    error.style.display = 'block'


                }
            })

    } else {




        titleFav.innerHTML = 'کالاهای مورد علاقه شما'
        fetch(`${mainURL}favProduct/getFavProduct`)
            .then(res => res.json())
            .then(data => {

                favItemsContainer.innerHTML = '<h1 class="font-bold text-red-500 text-xl error text-center w-full">کالا یا مقاله مورد نظر شما یافت نشد</h1>'
                if (data.length) {
                    error.style.display = 'none'
                    favItemsContainer.innerHTML = ''
                    data.forEach(product => {

                        favItemsContainer.className = 'py-8 px-2 grid fav-items-container  sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3'
                        favItemsContainer.insertAdjacentHTML(`afterbegin`, `
                <div class=" w-full product-item py-3">
                <a href="productInfo.html?title=${product.url}">
                    <div class="photo ">
                        <img src="${product.imgSecond}" class="w-full ">
                    </div>
                    <div class="selling-text text-right pt-3">
                        <h2 class="font-bold text-lg">${product.nameProduct}</h2>
                        <h3 class=" text-green-500 py-3 font-bold">تومان ${product.price} </h3>
                        <p>${product.description}</p>
                    </div>
                    <div class="selling-rate py-3">

                        <div class="flex justify-end items-center space-x-1">
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
                            <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
                        </div>

                    </div>
                </a>
                <button onclick="deleteProductFav(${product.id})" class="bg-red-700 text-white my-3 px-2 py-3 rounded w-full">حدف از علاقه مندی</button>

            </div>
                `)
                    })
                } else {
                    favItemsContainer.className = 'fav-items-container text-right py-8'
                    error.style.display = 'block'
                }
            })
    }
}



function deleteProductFav(id) {
    fetch(`${mainURL}favProduct/deleteProduct/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            getFavorite()

        })
}

function deleteArticleFav(id) {
    fetch(`${mainURL}favArticle/deleteArticle/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            getFavorite()

        })
}

window.addEventListener('load', () => {
    getFavorite()
});