
let targetSendButton = document.querySelector(".send-button");
let sharingDialogBox = document.querySelector(".share-dialog-box-container");
let targetHindiButton = document.querySelector(".lang-hindi");
let targetEnglishButton = document.querySelector(".lang-english");


// Language buttons for changing language of the message

targetHindiButton.addEventListener("click", function(){
    document.querySelector(".message-english").style.display = "none";
    document.querySelector(".message-hindi").style.display = "block";
});

targetEnglishButton.addEventListener("click", function(){
    document.querySelector(".message-hindi").style.display = "none";
    document.querySelector(".message-english").style.display = "block";
});

// Play sound on page visit after 10 milliseconds
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
});



