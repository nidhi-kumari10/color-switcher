const buttons= document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === "box1"){
            body.style.backgroundColor = "#927a7a";
        }
        if(e.target.id === "box2"){
            body.style.backgroundColor = "rgb(190, 190, 50)";
        }
        if(e.target.id === "box3"){
            body.style.backgroundColor = "brown";
        }
        if(e.target.id === "box4"){
            body.style.backgroundColor = "rgb(47, 47, 135)";
        }
        
    })
})