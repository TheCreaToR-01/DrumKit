let numberOfDrumButtons = document.querySelectorAll(".drum").length;


for ( let i = 0 ; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        if (i === 0)
        {
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            console.log(this);
        }
        else if (i === 1)
        {
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            console.log(this);
        }
        else if (i === 2)
        {
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            console.log(this);
        }
        else if (i === 3)
        {
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            console.log(this);
        }
        else if (i === 4)
        {
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            console.log(this);
        }
        else if (i === 5)
        {
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            console.log(this);
        }
        else if (i === 6)
        {
            var audio = new Audio("./sounds/kick.mp3");
            audio.play();
            console.log(this);
        }
        else
        {
            alert("Something went wrong. Please refresh.");
        }
    })
}