let productInfo = document.querySelector('.product-info')
let dataProduct = document.querySelector('.data-product')
let suggestionContainer = document.querySelector('.suggestion-container-product-info')
let num = 1
let allProductsInBasket = null
let allProductsInFav = null
let mainURL = `http://localhost:3000/api/`

window.addEventListener('load', () => {
    getProductInfo()
    getSuggestContainer()
});



function getProductInfo() {
    let urlSearch = location.search
    let urlParams = new URLSearchParams(urlSearch)

    let titleURL = urlParams.get('title')

    fetch(`${mainURL}product/${titleURL}`)
        .then(res => res.json())
        .then(data => {

            console.log(data);

            productInfo.innerHTML = ''
            data.forEach(product => {
                productInfo.insertAdjacentHTML('afterbegin', `
                <div class="grid gap-4 md:grid-cols-2">

                <div class="img-product-info">
                    <div class="w-full text-right grid md:grid-cols-2 gap-3">
                        <div class="container-img1">
                        <img  id="img-product-1" src="${product.img_1}" class="h-90" alt="" />
                        </div>
                        <div class="container-img2 ">
                        <img   id="img-product-2" src="${product.img_2}" alt="" />
                        </div>
                    </div>

                </div>
                <div class="text-right">
                    <div class="selling-rate py-3">

                        <div class="flex justify-end items-center space-x-1">
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
</svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
</svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
</svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
</svg>
                            <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
</svg>
                        </div>

                    </div>
                    <div class="product-text ">
                        <h2 class="font-bold text-2xl">${product.name}</h2>
                        <p class="py-2 font-bold text-green-500">${product.price}تومان</p>
                        <p class="py-3">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                        
                        <div class="count-input py-5">
                            <div class="counter">
                                <button id="plus" onclick="plusCount(${product.id})"  class="border-[5px] px-3 py-1 bg-gray-200">+</button>
                                <input id="input-count" type="text" class="text-center" value="${+num}">
                                <button id="minus" onclick="minusCount(${product.id} , ${product.count})" class="border-[5px] px-3 py-1 bg-gray-200">-</button><br>
                                <button onclick="addToBasket(${product.id} , '${product.img_2}' , '${product.name}' , '${product.url}' ,  ${product.count} , ${product.price} , ${product.price * product.count})" id="add-basket" class="rounded w-72 bg-red-600 py-2 px-3  my-2 text-white text-center">اضافه کردن به سبد خرید</button><br>
                                <button onclick = "addToFavProduct('${product.name}' , '${product.img_2}' , '${product.description}' ,   '${product.url}' , ${product.price})" id="add-fav-product" class="rounded w-72  text-red-600  py-2 px-3  my-2  text-center">اضافه کردن به علاقه مندی ها</button>
                            </div>
                        </div>
                        <div class="featured">
                            <h2 class="font-bold text-lg">ویژگی ها</h2>
                            <div class="feature-list ">
                                <div class="feature-item content-center py-2 flex justify-end">
                                    <p class="px-2">ارسال رایگان برای تمامی سفارشات بالای 50 هزار تومان</p>
                                    <img src="images/check.png" alt="">
                                </div>
                                <div class="feature-item content-center py-2 flex justify-end">
                                    <p class="px-2">30 روز بازگشت آسان</p>
                                    <img src="images/check.png" alt="">
                                </div>
                                <div class="feature-item content-center py-2 flex justify-end">
                                    <p class="px-2">کلیه مالیات ها و عوارض گمرکی شامل می شود</p>
                                    <img src="images/check.png" alt="">
                                </div>
                                <div class="feature-item content-center flex py-2 justify-end">
                                    <p class="px-2">لورم ایپسوم متن ساختگی با نامفهوم از صنعت چاپ</p>
                                    <img src="images/check.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                `)
                enterData(product.weight, product.colors, product.dimension, product.brand)
                zoomProductImg()


            })
        })
}

function zoomProductImg() {
    let containerImg1 = document.querySelector('.container-img1')
    let containerImg2 = document.querySelector('.container-img2')
    let imgProduct1 = document.querySelector('#img-product-1')
    let imgProduct2 = document.querySelector('#img-product-2')

    containerImg1.addEventListener('mousemove', event => {
        imgProduct1.style.transform = 'scale(3)'
        let firstOrigin = event.clientX - containerImg1.offsetLeft //x location
        let secondOrigin = event.clientY - containerImg1.offsetTop //y location
        imgProduct2.style.transition = '0.3s'
        imgProduct1.style.transformOrigin = firstOrigin + 'px' + ' ' + secondOrigin + 'px'
    })

    containerImg1.addEventListener('mouseleave', event => {
        //back to default location
        imgProduct1.style.transform = 'scale(1)'
        imgProduct2.style.transition = '0.3s'
        imgProduct1.style.transformOrigin = 'center center'
    })


    containerImg2.addEventListener('mousemove', event => {
        imgProduct2.style.transform = 'scale(2.5)'
        let firstOrigin = event.clientX - containerImg2.offsetLeft //x location
        let secondOrigin = event.clientY - containerImg2.offsetTop //y location
        imgProduct2.style.transformOrigin = firstOrigin + 'px' + ' ' + secondOrigin + 'px'
        imgProduct2.style.transition = '0.3s'
    })

    containerImg2.addEventListener('mouseleave', event => {
        //back to default location
        imgProduct2.style.transform = 'scale(1)'
        imgProduct2.style.transformOrigin = 'center center'
        imgProduct2.style.transition = '0.3s'
    })
}


function plusCount(id) {
    let inputCount = +document.querySelector('#input-count').value
    inputCount++
    let inputCountElem = document.querySelector('#input-count')
    inputCountElem.value = inputCount
}

function minusCount(id) {
    let inputCount = +document.querySelector('#input-count').value
    if (inputCount != 1) {
        inputCount--
        let inputCountElem = document.querySelector('#input-count')
        inputCountElem.value = inputCount
    }


}










function addToBasket(id, img, name, url, count, price, total) {
    let inputCount = +document.querySelector('#input-count').value
    console.log(inputCount);
    fetch(`${mainURL}basket/getProduct`)
        .then(res => res.json())
        .then(data => {

            allProductsInBasket = data

            let insInBasket = allProductsInBasket.some(product => product.nameProduct === name)
            if (insInBasket) {

                let countNum = {
                    count: +inputCount
                }
                console.log(countNum);

                fetch(`${mainURL}basket/changeCount/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(countNum)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(countNum);
                        console.log(data);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'info',
                            title: `${inputCount} عدد به محصولت تو سبد خرید اضافه شد `,
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            toast: true,
                        })

                    })
            } else {
                let productBasket = {
                    productID: id,
                    imgProduct: img,
                    nameProduct: name,
                    urlProduct: url,
                    mainPrice: +price,
                    count: +inputCount,
                    totalPrice: +count * +price
                }

                console.log(productBasket);

                fetch(`${mainURL}basket/addToBasket`, {
                        method: "POST",
                        headers: {
                            "Content-Type": 'application/json'
                        },
                        body: JSON.stringify(productBasket)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `محصول با موفقیت به سبد خرید شما اضافه شد`,
                            showConfirmButton: false,
                            timer: 5000,
                            timerProgressBar: true,
                            toast: true,
                        })
                    })
            }
        })

}



function addToFavProduct(name, img, desc, url, price) {
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
                    })
            }
        })

}

function enterData(weight, colors, dimension, brand) {
    if (weight > 20) {
        dataProduct.innerHTML = ''
        dataProduct.insertAdjacentHTML('afterbegin', `
        <div class="item-desc-1 py-4">
        <span class="px-3 font-bold"> وزن :</span><span>${weight}  گرم</span>
    </div>
    <div class="item-desc-1 py-4">
        <span class="px-3 font-bold">  ابعاد :</span><span> ${dimension}</span>
    </div>
    <div class="item-desc-1 py-4">
        <span class="px-3  font-bold"> رنگ ها :</span><span> ${colors}</span>
    </div>
    <div class="item-desc-1 py-4">
        <span class="px-3 font-bold"> برند :</span><span>${brand}</span>
    </div>
        `)
    } else {
        dataProduct.innerHTML = ''
        dataProduct.insertAdjacentHTML('afterbegin', `
        <div class="item-desc-1 py-4">
        <span class="px-3 font-bold"> وزن :</span><span>${weight}  کیلوگرم</span>
    </div>
    <div class="item-desc-1 py-4">
        <span class="px-3 font-bold">  ابعاد :</span><span> ${dimension}</span>
    </div>
    <div class="item-desc-1 py-4">
        <span class="px-3  font-bold"> رنگ ها :</span><span> ${colors}</span>
    </div>
    <div class="item-desc-1 py-4">
        <span class="px-3 font-bold">${brand}</span><span> Brand :</span>
    </div>
        `)
    }
}



function getSuggestContainer() {
    fetch(`${mainURL}suggestion/getSubSuggestion`)
        .then(res => res.json())
        .then(data => {
            suggestionContainer.innerHTML = ''
            data.forEach(product => {
                suggestionContainer.insertAdjacentHTML(`afterbegin`, `
                <div class="swiper-slide category-item text-center cat-item-9">
                <a href="productInfo.html?title=${product.url}">
                <img src="${product.img_1}" class="rounded" alt="">
               <h2 class="py-2 font-bold text-white">${product.name}</h2>
               <span class="font-bold text-green-500">${product.price}</span>
               </a>
            </div>
                `)
            })
            var swiper = new Swiper(".mySwiper", {
                loop: true,
                slidesPerView: 7,
                spaceBetween: 50,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });



            responsiveSlider()
        })
}

function responsiveSlider() {

    if (window.innerWidth < 1170 && window.innerWidth > 950) {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            autoPlay: true,
            slidesPerView: 4,
            spaceBetween: 50,
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
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

    }
}