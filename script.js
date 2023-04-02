if (window.location.pathname === '/index.html'||
    window.location.pathname === '/change-password.html'||
    window.location.pathname === '/my-booking1.html'||
    window.location.pathname === '/profile.html'||
    window.location.pathname === '/my-wishlist1.html'||
    window.location.pathname === '/my-wishlist.html'||
    window.location.pathname === '/my-booking1.html'||
    window.location.pathname === '/creat-event.html'||
    window.location.pathname === '/Event-location.html'||
    window.location.pathname === '/booking.html'||
    window.location.pathname === '/payment-metode.html'){
    const tongler = document.getElementById('tongler')
    const menuBar = document.getElementById('menuBar')
    tongler.addEventListener('click', function(){
        if(menuBar.classList.contains('hidden')){
            menuBar.classList.remove('hidden')
        }else{
            menuBar.classList.add('hidden')
        }
    })
}

if (window.location.pathname === '/signin.html'){
    const username = document.getElementById("fullname")
    const inputEmail = document.getElementById("email")
    const password = document.getElementById("password")
    const confirmPass = document.getElementById("confirm")

    username.addEventListener("keyup", function(event) {
        if (event.target.value === '') {
            event.target.classList.add("border-red-600")
        } else {
            event.target.classList.add("border-green-400")
            event.target.classList.remove("border-red-600")
        }
    });

    inputEmail.addEventListener("keyup", function(event) {
        if (event.target.value === "") {
            event.target.classList.add("border-red-600")
        }else {
            if(!(event.target.value.includes("@"))){
                event.target.classList.add("border-red-600")
            }else{
                event.target.classList.add("border-green-600")
                event.target.classList.remove("border-red-600")
            }
        }
    });

    password.addEventListener("keyup", function(event) {
        if (event.target.value === '') {
            event.target.classList.add("border-red-600")
        } else {
            if(event.target.value.length < 8){
                event.target.classList.add("border-red-600")
            }else{
                event.target.classList.add("border-green-400")
                event.target.classList.remove("border-red-600")
            }
        }
    });

    confirmPass.addEventListener("keyup", function(event) {
        if (event.target.value === '') {
            event.target.classList.add("border-red-600")
        } else {
            event.target.classList.add("border-green-400")
            event.target.classList.remove("border-red-600")
        }
    })    

    const dataPengguna = document.getElementById('form')
    dataPengguna.addEventListener('submit', (event)=>{
        event.preventDefault()
    
        const usernameSignin = event.target.fullname.value
        const emailSignin= event.target.email.value
        const passwordSignin = event.target.password.value
        const confirmPassSignin = event.target.confirm.value
    
        const Email = document.getElementById('email')
        const Pass = document.getElementById('password')
        const user = document.getElementById('fullname')
        const confirm = document.getElementById('confirm')
    
        const checkbox = document.getElementById('checkbox')
        const alert = document.getElementById('alertSignin')
        const accBox = document.getElementById('accbox')
        if(passwordSignin !== confirmPassSignin && checkbox.checked){
            alert.innerText = "Confirm password is wrong"
    
        }else if(passwordSignin === confirmPassSignin && !checkbox.checked){
            accBox.className ='text-zinc-400'
            accBox.innerText = "make sure you agree to the terms"
    
        }else if(passwordSignin !== confirmPassSignin && !checkbox.checked){
            accBox.className ='text-zinc-400'
            accBox.innerText = "make sure you agree to the terms"
            alert.innerText = "Confirm password is wrong"
    
        }else if(usernameSignin == ''||emailSignin== ''||passwordSignin == ''||confirmPassSignin == ''){
            alert.innerText = "Input cannot be empty";
            Email.className = 'outline-none my-2 h-14 w-full border-2 rounded-2xl px-5'
            Pass.className = 'outline-none my-2 h-14 w-full border-2 rounded-2xl px-5'
            user.className = 'outline-none my-2 h-14 w-full border-2 rounded-2xl px-5'
            confirm.className = 'outline-none my-2 h-14 w-full border-2 rounded-2xl px-5'
            dataPengguna.reset()
    
        }else if(passwordSignin === confirmPassSignin  && checkbox.checked){
            const data= [
                {
                user: usernameSignin,
                Email: emailSignin,
                Password: passwordSignin,
                Confirm: confirmPassSignin,
                }
            ]
            console.log(data);
            alert.className = 'hidden'
            accBox.className ='hidden'
            Email.className = 'outline-none my-2 h-14 w-full border-2 rounded-2xl px-5'
            Pass.className = 'outline-none my-2 h-14 w-full border-2 rounded-2xl px-5'
            user.className = 'outline-none my-2 h-14 w-full border-2 rounded-2xl px-5'
            confirm.className = 'outline-none my-2 h-14 w-full border-2 rounded-2xl px-5'
            dataPengguna.reset()
            return
        }
    })
}

// //login
if (window.location.pathname === '/login.html'){
    const username = document.getElementById("fullname")
    const inputEmail = document.getElementById("email")
    const password = document.getElementById("password")
    const dataLogin = document.getElementById('form')

    username.addEventListener("keyup", function(event) {
        if (event.target.value === '') {
            event.target.classList.add("border-red-600")
        } else {
            event.target.classList.add("border-green-400")
            event.target.classList.remove("border-red-600")
        }
    });

    inputEmail.addEventListener("keyup", function(event) {
        if (event.target.value === "") {
            event.target.classList.add("border-red-600")
        }else {
            if(!(event.target.value.includes("@"))){
                event.target.classList.add("border-red-600")
            }else{
                event.target.classList.add("border-green-600")
                event.target.classList.remove("border-red-600")
            }
        }
    });

    password.addEventListener("keyup", function(event) {
        if (event.target.value === '') {
            event.target.classList.add("border-red-600")
        } else {
            if(event.target.value.length < 8){
                event.target.classList.add("border-red-600")
            }else{
                event.target.classList.add("border-green-400")
                event.target.classList.remove("border-red-600")
            }
        }
    })

    dataLogin.addEventListener('submit', function(event){
        event.preventDefault()
        const userLogin = event.target.fullname.value
        const emailLogin = event.target.email.value
        const passwordLogin = event.target.password.value

        const alertLogin = document.getElementById('alertLogin')
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const user = document.getElementById('fullname')

        if(userLogin == '' ||  passwordLogin== '' || emailLogin== ''){
            email.className = 'outline-none my-2 h-14 w-full border-2 rounded-2xl px-5'
            password.className = 'outline-none my-2 h-14 w-full border-2 rounded-2xl px-5'
            user.className = 'outline-none my-2 h-14 w-full border-2 rounded-2xl px-5'
            alertLogin.innerText = "Input cannot be empty"
            dataPengguna.reset()
            return

        }else{
            const loginData =[{
                User: userLogin,
                Email: emailLogin,
                Password: passwordLogin,
            }]
            console.log(loginData)
            user.className = "outline-none my-2 h-14 w-full border-2 rounded-2xl px-5"
            email.className = "outline-none my-2 h-14 w-full border-2 rounded-2xl px-5"
            password.className = "outline-none my-2 h-14 w-full border-2 rounded-2xl px-5"
            alertLogin.classList.add('hidden')
            dataLogin.reset()
            window.location = 'index.html'
            return
        }
    })
}

// //Forgot password
if (window.location.pathname === '/forgot-password.html'){
const dataForgot = document.getElementById('form')
const inputEmail = document.getElementById("email")

inputEmail.addEventListener("keyup", function(event) {
    if (event.target.value === "") {
        event.target.classList.add("border-red-600")
    }else {
        if(!(event.target.value.includes("@"))){
            event.target.classList.add("border-red-600")
        }else{
            event.target.classList.add("border-green-600")
            event.target.classList.remove("border-red-600")
        }
    }
});

dataForgot.addEventListener('submit', (event)=>{
    event.preventDefault()
    const emailForgot = event.target.emailForgot.value
    const alertForgot = document.getElementById('emtyEmail')

    if(emailForgot == ''){
        alertForgot.innerText = "E-mail cannot be empty!"
    }
    else{
        const dataForgot = [{
            Email: emailForgot
        }]
        console.log(dataForgot)
        alertForgot.className = "text-zinc-400"
        alertForgot.innerText = "message has been sent to your email"
        dataForgot.reset()
    }
})
}

