let inputFav = document.querySelector('#category')
let favArticleContainer = document.querySelector('.fav-article-search-container')
let dashFavArticleContainer = document.querySelector('.dash-fav-article-container')
let mainUrl = `http://localhost:3000/api/`

window.addEventListener('load', () => {
    getArticleName(inputFav.value)
    getArticleFav()
});


inputFav.addEventListener('input', () => {
    getArticleName(inputFav.value);
})


function getArticleName(category) {
    fetch(`${mainUrl}article/getCategoryArticle/${category}`)
        .then(res => res.json())
        .then(data => {
            favArticleContainer.innerHTML = ''
            favArticleContainer.classList = 'py-8 px-2 grid article-list-page-container sm:grid-cols-2 gap-3 lg:grid-cols-4'
            data.forEach(article => {
                favArticleContainer.insertAdjacentHTML('afterbegin', `
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
                        <p class="text-gray-500">${article.category}</p>
                        <h2 class="text-lg">${article.title}</h2>
                    </a>
                </div>
                <button onclick="addArticleFav('${article.category}' , '${article.img}' , '${article.title}' , '${category.urlArticle}')"  class="bg-red-700 text-white my-3 px-2 py-3 rounded">اضافه کردن به علاقه مندی</button>
            </div>
                `)
            })
        })
}

function getArticleFav() {
    fetch(`${mainUrl}favArticle/getAllArticle`)
        .then(res => res.json())
        .then(data => {
            dashFavArticleContainer.innerHTML = ''
            dashFavArticleContainer.classList = 'py-8 px-2 grid article-list-page-container sm:grid-cols-2 gap-3 lg:grid-cols-4'
            data.forEach(article => {
                dashFavArticleContainer.insertAdjacentHTML('afterbegin', `
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
        })
}

function deleteArticleFav(id) {
    fetch(`${mainUrl}favArticle/deleteArticle/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            getArticleFav()

        })
}


function addArticleFav(category, img, title, url) {
    fetch(`${mainUrl}favArticle/getAllArticle`)
        .then(res => res.json())
        .then(data => {

            allArticleInFav = data

            let insInFav = allArticleInFav.some(article => article.title === title)
            if (insInFav) {

                console.log(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'info',
                    title: `قبلا این مقاله را به علاقه مندی هایت اضافه کردی`,
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    toast: true,
                })


            } else {
                let favArticle = {
                    categoryArticle: category,
                    img,
                    title,
                    urlArticle: url
                }

                fetch(`${mainUrl}favArticle/addToFavArticle`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(favArticle)
                    })
                    .then(res => res.json())
                    .then(data => {
                        getArticleFav()
                        console.log(data);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `مقاله به علاقه مندی هات اضافه شد`,
                            showConfirmButton: false,
                            timer: 5000,
                            timerProgressBar: true,
                            toast: true,
                        })
                    })
            }
        })
}