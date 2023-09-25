let articleListContainer = document.querySelector('.article-list-page-container')
let mainURL = `http://localhost:3000/api/`

window.addEventListener('load', () => {
    getArticleList()
});


function getArticleList() {
    fetch(`${mainURL}article/getAllArticle`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            articleListContainer.innerHTML = ''
            data.forEach(article => {
                articleListContainer.insertAdjacentHTML('afterbegin', `
                
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
                </div>
                `)
            });
        })
}