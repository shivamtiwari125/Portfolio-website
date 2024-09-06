let count = 0;
let button = document.querySelector(".dark-mode");
let body = document.querySelector("body");
let rightBox = document.querySelectorAll(".rightbox");
let about = document.querySelector("#about-head");
let project = document.querySelector("#pro-head");
let darkLight = document.querySelector(".dark-light");
let des = document.querySelector(".proj-descr1");

button.addEventListener("click", () =>{
    count++;
    console.log("clicked");

    if(count % 2 == 0){
        body.style.backgroundColor = " #8582827a";
         for (const right of rightBox) {
            right.style.color = "black";
         }
         
         about.style.color = "black";
         project.style.color = "black";
         button.style.backgroundColor = "black";
         darkLight.src = "dark mode.png";
         
         
        }
        else{
            body.style.backgroundColor = "rgb(0, 0, 0, 0.99)";
            for (const right of rightBox) {
               
               right.style.color = "white";
            }
        about.style.color = "white";
        project.style.color = "white";
        button.style.backgroundColor = "white";
        darkLight.src = "light mode.png";
        // des.style.color = "white";
        

    }
});


// const animatedDiv = document.querySelector('');
// animatedDiv.addEventListener("mouseenter", () =>{
   
//     animatedDiv.classList.add("visible");
    
// });
// document.addEventListener("mouseleave", () => {
    
//     animatedDiv.classList.remove("visible");
    
// });
