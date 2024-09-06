let count = 0;
let button = document.querySelector(".dark-mode");
let body = document.querySelector("body");
let rightBox = document.querySelector(".rightbox");
let about = document.querySelector("#about-head");
let project = document.querySelector("#pro-head");
let darkLight = document.querySelector(".dark-light");

button.addEventListener("click", () =>{
    count++;
    console.log("clicked");

    if(count % 2 == 0){
        body.style.backgroundColor = "white";
        rightBox.style.color = "black";
        about.style.color = "black";
        project.style.color = "black";
        button.style.backgroundColor = "black";
        darkLight.src = "dark mode.png";
        
    }
    else{
        body.style.backgroundColor = "black";
        rightBox.style.color = "white";
        about.style.color = "white";
        project.style.color = "white";
        button.style.backgroundColor = "white";
        darkLight.src = "light mode.png";
        

    }
});


