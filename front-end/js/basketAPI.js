let basketProducts = document.querySelector('.product-basket-table-container')
let tableResult = document.querySelector('.table-result ')
let totalPrice = document.querySelector('.total-price')
let purchaseBtn = document.querySelector('.purchase')
let purchaseDiv = document.querySelector('.purchase-div')
let mainURL = 'http://localhost:3000/api/'


window.addEventListener('load', () => {
    getProductBasket()

});


function getProductBasket() {
    fetch(`${mainURL}basket/getProduct`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            basketProducts.innerHTML = ''
            tableResult.innerHTML = ''
            totalPrice.innerHTML = ''
            let sum = 0
            data.forEach(product => {
                basketProducts.insertAdjacentHTML(`afterbegin`, `
                
                <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    <button id="delete" onclick="deleteProductItem(${product.productID})" class="text-white rounded font-bold px-3 py-2 bg-red-800">X</button>
                </th>
                <td class="px-6 py-4">
                    ${product.totalPrice}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <div class="counter flex justify-center">
                        <button onclick="plusCount(${product.productID} ,${product.count})" id="plus" class="text-white px-3 py-2 bg-red-700">+</button>
                        <input id="input-count" type="text" class="text-center mx-1" value="${product.count}">
                        <button onclick="minusCount(${product.productID} ,${product.count})"  id="minus" class="text-white px-3 py-2 bg-red-700">-</button>
                    </div>
                </td>
                <td class="px-6 py-4">
                ${product.mainPrice}
                </td>
                <td class="px-6 py-4">
                ${product.nameProduct}
                </td>
                <td class="px-6 py-4 flex justify-center">
                    <img class="" src="${product.imgProduct}" alt="">
                </td>
            </tr>
                `)

                tableResult.insertAdjacentHTML('afterbegin', `
                <div class="flex justify-between py-2 total-1">
                            <p>${product.mainPrice * product.count}</p>
                            <h2 class="font-bold text-lg">${product.nameProduct}</h2>
                        </div>
               
                `)

                //let sum = 0 => before forEach array  but is in request get
                sum += product.mainPrice * product.count
                totalPrice.innerHTML = sum

                purchaseDiv.innerHTML = `
                <button onclick="addToBuy('${product.nameProduct}' , '${product.imgProduct}')" class="purchase bg-green-500 text-white w-full py-2 rounded">پرداخت</button>`


            })


        })
}






function plusCount(id, count) {
    if (count != 60) {

        console.log(id);

        fetch(`${mainURL}basket/plusChangeCount/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }

            })
            .then(res => res.json())
            .then(data => {
                console.log(count);
                getProductBasket()
            })
    }
}

function minusCount(id, count) {
    if (count != 1) {


        //console.log(newCount);
        fetch(`${mainURL}basket/minusChangeCount/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },

            })
            .then(res => res.json())
            .then(data => {
                getProductBasket()
            })
    }
}




function deleteProductItem(id) {
    fetch(`${mainURL}basket/deleteProduct/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            getProductBasket()
        })
}




function addToBuy(name, img) {
    let products = tableResult.innerHTML
    if (products) {
        fetch(`${mainURL}basket/getProduct`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                data.forEach(basketProduct => {

                    let productBuy = [
                        [null, `${basketProduct.nameProduct}`, basketProduct.mainPrice, `${basketProduct.imgProduct}`, `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ`, basketProduct.count, basketProduct.totalPrice]
                    ]

                    fetch(`${mainURL}buy/sendProduct`, {
                            method: "POST",
                            headers: {
                                "Content-Type": 'application/json'
                            },
                            body: JSON.stringify(productBuy)
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            tableResult.innerHTML = ''
                            Swal.fire({
                                icon: 'success',
                                title: `خریدت موفقیت آمیز بود`,
                                showConfirmButton: true,
                                confirmButtonText: 'فهمیدم'
                            })

                        })

                    console.log(productBuy);
                })
            })

        fetch(`${mainURL}basket/deleteAllProduct`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                getProductBasket()
            })



        totalPrice.innerHTML = '000'
    } else {
        Swal.fire({
            icon: 'error',
            title: `محصولی در سبد خریدت موجود نیست`,
            showConfirmButton: true,
            confirmButtonText: 'فهمیدم'

        })
    }
}