const hamMenu = document.querySelector(".hamMenu");
const nav = document.querySelector(".nav");


hamMenu.addEventListener("click", () =>{
    hamMenu.classList.toggle("active");
    nav.classList.toggle("active");

})
document.querySelectorAll(".nav-links").forEach(n => n.
    addEventListener("click", () =>{
        hamMenu.classList.remove("active")
        nav.classList.remove("active")
}))


function formFill (value){
    console.log(value)
}


const input = document.querySelectorAll('.inputToCopy')

document.querySelectorAll('.inputToCopy').forEach(n =>n.addEventListener('change', () =>{

    console.log( 'hi')
})
    )
