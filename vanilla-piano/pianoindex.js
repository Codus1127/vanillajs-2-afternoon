//STEP 1*** 
//declare a new event listener on our window object and provide it 
//two arguments, the event to listen for and the handler to fire 
//once that event has occurred.  Add a single argument to the handler
//that will represent our `event`.

window.addEventListener("keypress", function(keyPressEvent){
    const tone = document.querySelector(`audio[data-key="${keyPressEvent.keyCode}"]`);
    if (!tone) return;
    const pianoKey = document.querySelector(`.pianoKey[data-key="${keyPressEvent.keyCode}"]`);
    tone.currentTime = 0;
    pianoKey.classList.add('pressed');
    tone.play();
    setTimeout(function() {
        pianoKey.classList.remove("pressed");
      }, 300);
});

