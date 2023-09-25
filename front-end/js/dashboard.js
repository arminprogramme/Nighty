let preBuy = document.querySelector('.prebuy')
let delivery = document.querySelector('.delivery')
console.log(preBuy);
let mainUrl = `http://localhost:3000/api/`

window.addEventListener('load', () => {
    getProduct()
    getBuy()
});


function getProduct() {
    fetch(`${mainUrl}basket/getProduct`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            preBuy.innerHTML = `${data.length} سفارش`
        })
}

function getBuy() {
    fetch(`${mainUrl}buy/getProduct`)
        .then(res => res.json())
        .then(data => {
            delivery.innerHTML = `${data.length} سفارش`
        })
}