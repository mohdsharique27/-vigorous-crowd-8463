
//injecting html code 

async function inject(){
    const resp = await fetch("loginpage.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);

    const loginWrapper = document.getElementById('login-wrapper')
    const closeButton = document.getElementById('close-popup')

    closeButton.addEventListener("click", () =>{
        loginWrapper.classList.toggle('hide')
    })


}

setTimeout(()=>{inject()},10*1000)
















