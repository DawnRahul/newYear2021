
let targetSendButton = document.querySelector(".send-button");
let sharingDialogBox = document.querySelector(".share-dialog-box-container");



    setTimeout(() => {
        let mySound = new Audio("sound/sound-hey.mp3");
        setInterval(() => {
            mySound.play();
        }, 0);
   
}, 10);


setTimeout(() => {
    targetSendButton.style.opacity = "1";
    targetSendButton.removeAttribute("disabled");
}, 3000);

targetSendButton.addEventListener("click", function(){
    sharingDialogBox.style.display = "flex";
});

//Closes the Sharing Dialog Box  
let closeDialogBox = document.querySelector(".close-dialog");

closeDialogBox.addEventListener("click", function(){
    sharingDialogBox.style.display = "none";
})