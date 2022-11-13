const myname = document.getElementsByClassName("my-name");
let quotes = document.getElementsByClassName("quotes");
let buttonDelete = document.getElementsByClassName("wrap-btn-quotes");
let button = document.getElementsByClassName("button-load");
let headline = document.getElementsByClassName("headline");

const quotesText = ["Today A Learner, Tomorrow A Leader", "No Pain No Gain", "When you have a dream, you've got to grab it and never let go.", "There is nothing impossible to they who will try."]
quotes[0].innerHTML = quotesText[0];

let i = 1;
setInterval(() => {
    if(i == quotesText.length){
        i = 0; 
    }     
    quotes[0].innerHTML = quotesText[i];
    i++;
   
}, 6000);


let myHead = `<h1 class="my-head">
Hi! My name is <br/>
<span class="my-name">Ega Pradana</span> <br/>
I’m a Fullstack Developer
</h1>`;

setInterval(function(){
    headline[0].innerHTML = myHead;
}, 3400)


// animasi text
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 4;
ml4.durationIn = 500;
ml4.durationOut = 300;
ml4.delay = 300;

anime.timeline({loop: false})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });

