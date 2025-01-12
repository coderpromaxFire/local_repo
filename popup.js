let submit=document.querySelector(".submit");
let div=document.querySelector("div");
let btn=document.querySelector(".btn")

submit.addEventListener("click",()=>{
div.classList.remove("box1")
})

btn.addEventListener("click",()=>{
    div.classList.add("box1")
})