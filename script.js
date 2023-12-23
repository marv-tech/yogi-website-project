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


// const input = document.querySelectorAll(".inputToCopy")

function init (){
    document.querySelectorAll(".inputToCopy")
        .addEventListener("keyup", function(event){
            formFill(event.target.innerText)
    })

}

init();
