let saleProductContainer = document.querySelector('.sold-product-container')
let arrivalsProductContainer = document.querySelector('.arrivals-product-container')
let categoryProductContainer = document.querySelector('.category-product-container')
let specialProductContainer = document.querySelector('.special-product')
let ratedProductContainer = document.querySelector('.rated-product')
let suggestProductContainer = document.querySelector('.suggestion-product')
let reviewProductContainer = document.querySelector('.review-product')
let articleTechnologyContainer = document.querySelector('.article-technology-container')

let mainUrl = `http://localhost:3000/api/`

window.addEventListener('load', () => {

    fetch(`${mainUrl}category/getMainCategory`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);

            data.forEach(category => {
                categoryProductContainer.insertAdjacentHTML('afterbegin', `
                <div class="category-item-part swiper-slide main-cat-item-${data.indexOf(category) +1}">
                <a href="productList.html?id=${category.id}&title=${category.title}">
                    <h2 class="font-bold">${category.title}</h2>
                </a>
            </div>

                `)

                var swiper = new Swiper(".mySwiper", {
                    loop: true,
                    slidesPerView: 7,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    spaceBetween: 50,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });


                responsiveSlider()

            })


        })


    fetch(`${mainUrl}product/getSaleProduct`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            saleProductContainer.innerHTML = ''
            data.forEach(product => {
                //  console.log(product.description);
                saleProductContainer.insertAdjacentHTML('afterbegin', `
                <div class=" w-full product-item py-3">
                <a href="productInfo.html?title=${product.url}">
                    <div class="photo ">
                        <img src="${product.img_1}" class="w-full ">
                    </div>
                    <div class="selling-text text-right pt-3">
                        <h2 class="font-bold text-lg">${product.name}</h2>
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

            </div>
                `)
            })
        })


    fetch(`${mainUrl}product/getRecentProduct`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            arrivalsProductContainer.innerHTML = ''
            data.forEach(product => {
                // console.log(product.url);
                arrivalsProductContainer.insertAdjacentHTML('afterbegin', `
                <div class=" w-full product-item py-3 ">
                <a href="productInfo.html?title=${product.url}">
                    <div class="photo ">
                        <img src="${product.img_1} " class="w-full ">
                    </div>
                    <div class="selling-text text-right pt-3 ">
                        <h2 class="font-bold text-lg ">${product.name}</h2>
                        <h3 class=" text-green-500 py-3 font-bold ">تومان ${product.price} </h3>
                        <p>${product.description}</p>
                    </div>
                    <div class="selling-rate py-3 ">

                        <div class="flex justify-end items-center space-x-1 ">
                            <svg class="w-4 h-4 text-yellow-300 " aria-hidden="true " xmlns="http://www.w3.org/2000/svg " fill="currentColor " viewBox="0 0 22 20 ">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534
                            0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z "/>
</svg>
                            <svg class="w-4 h-4 text-yellow-300 " aria-hidden="true " xmlns="http://www.w3.org/2000/svg " fill="currentColor " viewBox="0 0 22 20 ">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534
                            0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z "/>
</svg>
                            <svg class="w-4 h-4 text-yellow-300 " aria-hidden="true " xmlns="http://www.w3.org/2000/svg " fill="currentColor " viewBox="0 0 22 20 ">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534
                            0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z "/>
</svg>
                            <svg class="w-4 h-4 text-yellow-300 " aria-hidden="true " xmlns="http://www.w3.org/2000/svg " fill="currentColor " viewBox="0 0 22 20 ">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534
                            0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z "/>
</svg>
                            <svg class="w-4 h-4 text-gray-300 dark:text-gray-500 " aria-hidden="true " xmlns="http://www.w3.org/2000/svg " fill="currentColor " viewBox="0 0 22 20 ">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534
                            0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z "/>
</svg>
                        </div>

                    </div>
                </a>

            </div>
                
                `)
            })
        })


    fetch(`${mainUrl}product/getSpecialProduct`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            specialProductContainer.innerHTML = ''
            data.forEach(product => {
                specialProductContainer.insertAdjacentHTML('afterbegin', `
                <div class="suggestion-cart flex justify-end ">

                <div class="content-suggest py-3 px-3 text-right ">
                   <a href="productInfo.html?title=${product.url}">
                   <h2 class="font-bold ">${product.name}</h2>
                   <p class="text-sm ">${product.price}تومان</p></a>
                </div>
                <div class="img-suggest ">
                    <img src="${product.img_1}" alt=" ">
                </div>
            </div>
                `)
            })
        })


    fetch(`${mainUrl}product/getRatedProduct`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            ratedProductContainer.innerHTML = ''
            data.forEach(product => {
                ratedProductContainer.insertAdjacentHTML('afterbegin', `
                <div class="suggestion-cart flex justify-end ">

                                <div class="content-suggest py-3 px-3 text-right ">
                                   <a href="productInfo.html?title=${product.url}">
                                   <h2 class="font-bold ">${product.name}</h2>
                                   <p class="text-sm ">${product.price}تومان</p></a>
                                </div>
                                <div class="img-suggest ">
                                    <img src="${product.img_1}" alt=" ">
                                </div>
                            </div>
                `)
            })
        })


    fetch(`${mainUrl}product/getSuggestionProduct`)
        .then(res => res.json())
        .then(data => {
            //  console.log(data);
            suggestProductContainer.innerHTML = ''
            data.forEach(product => {
                suggestProductContainer.insertAdjacentHTML('afterbegin', `
                <div class="suggestion-cart flex justify-end ">

                <div class="content-suggest py-3 px-3 text-right ">
                   <a href="productInfo.html?title=${product.url}">
                   <h2 class="font-bold ">${product.name}</h2>
                   <p class="text-sm ">${product.price}تومان</p></a>
                </div>
                <div class="img-suggest ">
                    <img src="${product.img_1}" alt=" ">
                </div>
            </div>
                `)
            })
        })


    fetch(`${mainUrl}product/getReviewProduct`)
        .then(res => res.json())
        .then(data => {
            //  console.log(data);
            reviewProductContainer.innerHTML = ''
            data.forEach(product => {
                reviewProductContainer.insertAdjacentHTML('afterbegin', `
                <div class="suggestion-cart flex justify-end ">

                                <div class="content-suggest py-3 px-3 text-right ">
                                   <a href="productInfo.html?title=${product.url}">
                                   <h2 class="font-bold ">${product.name}</h2>
                                   <p class="text-sm ">${product.price}تومان</p></a>
                                </div>
                                <div class="img-suggest ">
                                    <img src="${product.img_1}" alt=" ">
                                </div>
                            </div>
                `)
            })
        })


    fetch(`${mainUrl}article/technologyArticle`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            articleTechnologyContainer.innerHTML = ''
            data.forEach(article => {


                articleTechnologyContainer.insertAdjacentHTML('afterbegin', `
                <div class="article-list-item text-center ">
                        <div class="container photo ">
                            <img src="${article.img}" alt="Avatar " class="image ">
                            <div class="overlay ">
                                <div class="text ">
                                    <a href="articleText.html?title=${article.urlArticle}">مشاهده مقاله</a>
                                </div>
                            </div>
                        </div>
                        <div class="detail-article ">
                            <a href="articleText.html?title=${article.urlArticle}">
                                <p class="text-gray-500 ">${article.category}</p>
                                <h2 class="text-lg ">${article.title}</h2>
                            </a>
                        </div>
                    </div>
                `)
            })
        })
});

function responsiveSlider() {

    if (window.innerWidth < 1170 && window.innerWidth > 950) {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            autoPlay: true,
            slidesPerView: 4,
            spaceBetween: 50,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else if (window.innerWidth < 950) {
        var swiper = new Swiper(".mySwiper", {
            autoPlay: true,
            loop: true,
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        var swiper = new Swiper(".mySwiper", {
            autoPlay: true,
            loop: true,
            slidesPerView: 7,
            spaceBetween: 50,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

        });

    }
}