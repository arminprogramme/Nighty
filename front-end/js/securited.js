let btnSecurityLogin = document.querySelector('.sent-security-code-login-button')
let btnSecuritySign = document.querySelector('.sent-security-code-sign-button')
let securitySignInput = document.querySelector('#security-sign-input')
let securityLoginInput = document.querySelector('#security-login-input')
let firstName = document.querySelector('#first_name')
let lastName = document.querySelector('#last_name')
let emailSign = document.querySelector('#email-sign')
let emailLog = document.querySelector('#email-log')
let passwordSign = document.querySelector('#password-sign')
let passwordLog = document.querySelector('#password-log')
let submitSign = document.querySelector('.submit-sign-btn')
let submitLog = document.querySelector('.submit-log-btn')


btnSecurityLogin.addEventListener('click', event => {
    let securityNumber = Math.ceil(Math.random() * 100000)
    securityLoginInput.value = securityNumber
    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: `کد امنیتی شما برای ورود  : ${securityNumber}`,
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        toast: true,
    })
})
btnSecuritySign.addEventListener('click', event => {
    let securityNumber = Math.ceil(Math.random() * 100000)
    securitySignInput.value = securityNumber
    Swal.fire({
        position: 'top-start',
        icon: 'info',
        title: `کد امنیتی شما برای ثبت نام  : ${securityNumber}`,
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        toast: true,
    })
})



submitSign.addEventListener('click', event => {
    if (firstName.value.trim() === '' || lastName.value.trim() === '' || emailSign.value.trim() === '' || passwordSign.value.trim() === '' || securitySignInput.value.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: `ثبت نام موفقیت آمیز نبود`,
            text: 'لطفا یکبار دیگه فرم ثبت نامتو چک کن',
            showConfirmButton: true,
            confirmButtonText: 'بریم چک چکنیم',

        })
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `ثبت نام شما موفقیت آمیز بود حالا با خیال راحت خرید کن`,
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            toast: true,
        })
        submitSign.setAttribute('href', 'index.html')
    }
})

submitLog.addEventListener('click', event => {
    if (emailLog.value.trim() === '' || passwordLog.value.trim() === '' || securityLoginInput.value.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: `ورود موفقیت آمیز نبود`,
            text: 'لطفا یکبار دیگه فرم ورود چک کن',
            showConfirmButton: true,
            confirmButtonText: 'بریم چک چکنیم',

        })

    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `ورود شما موفقیت آمیز بود حالا با خیال راحت خرید کن`,
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            toast: true,
        })
    }
})