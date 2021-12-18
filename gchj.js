
let qwert=document.querySelector(".dasha")
let parol=document.querySelector(".parol")
let login=document.querySelector(".login")
let form=document.querySelector(".more-padding")
console.log(qwert)
qwert.addEventListener("click", (e)=>{
    e.preventDefault()
    if(parol.value=="123" && login.value=="123"){
        window.location.href="qwer/Untitled-444.html"
    }
    else{
        alert("1")
    }
})

