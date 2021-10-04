var input = document.querySelector(".input");
var btns = document.querySelectorAll(".btns");
var output = document.querySelector(".output");

input.addEventListener("input",()=>{output.innerText=input.value});

btns.forEach(btn=>{
    btn.addEventListener("click",()=>changeColor(btn));
    console.log(btn.textContent)
})
function changeColor(btn){
    switch (btn.textContent){
        case "Red":
            output.style.color='red';
            break;
        case "Blue":
            output.style.color='blue';
            break;
        case "Green":
            output.style.color='green';
            break;
    }
}