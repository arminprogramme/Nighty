let inputEmail = document.querySelector('#email-order-input')
let buttonEmail = document.querySelector('#sub-order-button')
let mainURL = `http://localhost:3000/api/`
let allEmail = null

buttonEmail.addEventListener('click', event => {
    if (inputEmail.value.trim() === '') {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `لطفا ایمیل خودرا وارد کنید`,
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            toast: true,
        })
    } else {
        let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        let testRegex = emailRegex.test(inputEmail.value)

        if (testRegex) {
            emailOrder()


        } else {
            Swal.fire({
                position: 'top-start',
                icon: 'error',
                title: `لطفا یک ایمیل معتبر وارد کنید`,
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
                toast: true,
            })
        }
    }
})


function emailOrder() {
    fetch(`${mainURL}email/getEmail`)
        .then(res => res.json())
        .then(data => {
            allEmail = data

            let isInEmail = allEmail.some(item => {
                return item.email === inputEmail.value
            })
            if (isInEmail) {
                Swal.fire({
                    dir: 'rtl',
                    position: 'top-end',
                    icon: 'warning',
                    title: `این ایمیل از قبل در سایت ثبت شده است`,
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    toast: true,
                })
            } else {
                let emailObj = {
                    email: inputEmail.value
                }
                console.log(emailObj);
                fetch(`${mainURL}email/setEmail`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(emailObj)
                    })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `ایمیل با موفقیت ثبت شد`,
                            showConfirmButton: false,
                            timer: 2500,
                            timerProgressBar: true,
                            toast: true,
                        })

                        inputEmail.value = ''
                    })

            }
        })
}