// const myButton = document.getElementsByClassName("myButton");

// myButton[0].addEventListener("mouseover",event=>{
//     event.target.classList.toggle("hover");
// })
// myButton[0].addEventListener("mouseout",event=>{
//     event.target.classList.toggle("hover");
// })

// myButton[0].classList.add("enabled");
// myButton[1].classList.add("enabled");
// myButton[1].classList.remove("enabled");

// myButton[0].addEventListener("click",event=>{
//     event.target.classList.replace("enabled","disabled");
// })

let buttons = document.querySelectorAll(".myButton");

buttons.forEach(button =>{
    button.classList.add("enabled");
})

buttons.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button=>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        if(event.target.classList.contains("disabled")){
            event.target.classList.replace("disabled","enabled");
        }else{
            event.target.classList.replace("enabled","disabled");
        }

    });
});