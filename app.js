//call window object speech recognation
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

var recognation = new SpeechRecognition();

var p =document.createElement("p");

var words =document.getElementById("words");
words.appendChild(p); // used for inserting element
console.log(p);

recognation.addEventListener("result",(e)=>
{
console.log(e.results);    

var transcript =[...e.results].map(result => result[0]).map(result => result.transcript).join("");

// console.log(transcript)

// p.innerHTML(transcript);

if(e.results[0].isFinal)
{
    p = document.createElement("p");
    words.appendChild(p);
    p.innerHTML = transcript;
}

}) // this dom method used to add listining     event 




recognation.addEventListener("end",recognation.start) // wheneven end it will starts again

recognation.start(); // starting speech recognation