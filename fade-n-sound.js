
let targetMask = document.getElementsByClassName("initial-2020")[0];
let targetVaccine = document.getElementsByClassName("final-2020")[0];
let targetMyWish = document.querySelector(".my-wish");

setTimeout(() => {
    // for each 50 milliseconds the opacity of element will reduce by 0.02 till opacity becomes 0.
    let op = 100;
    let timerId = setInterval(() => {
            targetMask.style.opacity = op/100;
            op-=2;  

    }, 50);

    setTimeout(() => { 
        clearInterval(timerId);
        // remove that element
    targetMask.style.display = "none";
    // targetVaccine.classList.remove("display-none");
    targetVaccine.style.display = "inline";
    }, 2500);
        

    
}, 1000);


 

setTimeout(() => {
    // for each 50 milliseconds the opacity of element will increase by 0.02 till opacity becomes 1.
    let op = 0;
    let timerId = setInterval(() => {
            targetVaccine.style.opacity = op/100;
            op+=2;  

    }, 50);

    setTimeout(() => { 
        clearInterval(timerId);

        let myAudio = new Audio("sound/fireworks.ogg");
        // document.addEventListener("click", function(event){
            
            setInterval(() => {
                myAudio.play();
            }, 0);
           
        //  });

        document.querySelector(".firework-1").style.display = "inline";
        document.querySelector(".firework-1").style.opacity = "1";
        document.querySelector(".firework-2").style.display = "inline";
        document.querySelector(".firework-2").style.opacity = "1";
    }, 2500);
        

    
}, 3600);

setTimeout(() => {
    targetMyWish.style.display = "block";
    targetMyWish.style.cursor = "pointer";
    targetMyWish.style.opacity = "1";
}, 7500);