let inputName = document.querySelector('#product-name')
let productSearch = document.querySelector('.pre-product-search-container')
let productFav = document.querySelector('.dash-fav-product-container')
let searchInput = document.querySelector('.search-product-button')
let allProductFav = null

let mainURL = `http://localhost:3000/api/`

window.addEventListener('load', () => {
    getProductBuyName(inputName.value)
    getFavProduct()


});


searchInput.addEventListener('click', () => {
    if (inputName.value.trim() === '') {
        productSearch.innerHTML = ''
        Swal.fire({
            position: 'top-start',
            icon: 'error',
            title: `لطفا برای پیداکردن کالا ,اسم کالارو وارد کن`,
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            toast: true,
        })
    } else {
        getProductBuyName(inputName.value)
    }
})

function getProductBuyName(name) {
    fetch(`${mainURL}product/getProductByName/${name}`)
        .then(res => res.json())
        .then(data => {
            if (data.length) {
                productSearch.innerHTML = ''
                productSearch.classList = 'grid grid-cols-1 py-5'
                data.forEach(product => {
                    productSearch.insertAdjacentHTML('afterbegin', `
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
                    <button onclick="addToFavProduct(${product.price} , '${product.name}' , '${product.description}' , '${product.img_1}' , '${product.url}')" class="bg-red-700 text-white my-3 px-2 py-3 rounded w-full">اضافه کردن به علاقه مندی ها</button>
                </div>
                    `)
                })
            } else {
                productSearch.innerHTML = ''
                productSearch.innerHTML = `<p class="search-error text-xl font-bold text-red-600 text-center">!کالای موردنظر شما پیدا نشد
                <p>`

            }

        })
}





function getFavProduct() {
    fetch(`${mainURL}favProduct/getFavProduct`)
        .then(res => res.json())
        .then(data => {
            if (data.length) {
                productFav.innerHTML = ''
                productFav.classList = 'grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3'
                data.forEach(product => {
                    productFav.insertAdjacentHTML('afterbegin', `
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
                    <button onclick="deleteProductFav(${product.id})" class="bg-red-700 text-white my-3 px-2 py-3 rounded w-full">حذف از علاقه مندی ها</button>
                </div>
                    `)
                })
            } else {
                productSearch.innerHTML = ''
                productSearch.innerHTML = `<p class="search-error text-xl font-bold text-red-600 text-center">!کالای موردنظر شما پیدا نشد
                <p>`

            }
        })
}

function deleteProductFav(id) {
    fetch(`${mainURL}favProduct/deleteProduct/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            location.reload()
            getFavProduct()

        })
}

function addToFavProduct(price, name, desc, img, url) {
    fetch(`${mainURL}favProduct/getFavProduct`)
        .then(res => res.json())
        .then(data => {

            allProductsInFav = data

            let insInFav = allProductsInFav.some(product => product.nameProduct === name)
            if (insInFav) {

                console.log(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'info',
                    title: `قبلا این محصول را به علاقه مندی هایت اضافه کردی`,
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    toast: true,
                })


            } else {
                let productFav = {
                    description: desc,
                    imgSecond: img,
                    nameProduct: name,
                    url: url,
                    price: +price,
                }

                console.log(productFav);

                fetch(`${mainURL}favProduct/addToFavProduct`, {
                        method: "POST",
                        headers: {
                            "Content-Type": 'application/json'
                        },
                        body: JSON.stringify(productFav)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `محصول با موفقیت به کالاهای علاقه مند شما اضافه شد`,
                            showConfirmButton: false,
                            timer: 5000,
                            timerProgressBar: true,
                            toast: true,
                        })
                        getFavProduct()
                    })
            }
        })
}