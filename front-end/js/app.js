let $ = document
let topLink = $.querySelector('.top-link')

window.addEventListener('scroll', (event) => {
    let scrollTop = window.scrollY
    let documentHeight = document.body.clientHeight
    let windowHeight = window.innerHeight
    let scrollPercent = scrollTop / (documentHeight - windowHeight)
    let scrollPercentRound = Math.round(scrollPercent * 100)



    if (scrollPercentRound > 8) {
        topLink.classList.add('fixed')
        topLink.style.transition = '0.3s'
    } else {
        topLink.classList.remove('fixed')
    }
})

topLink.addEventListener('click', () => {
    var timerHandle = setInterval(function() {
        if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0)
            window.scrollBy(0, -50);
        else clearInterval(timerHandle);
    }, 10);


})