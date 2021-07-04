//var name=prompt("Name ?");
//window.alert("hello "+name);
//alert("welcome to js world");
/*
function calc(money,costperb){
    var nb=Math.floor(money/costperb);
    return nb;
}
function chang(money,costperb){
    return money%costperb;
}
*/
//console.log(calc(11,2),chang(11,2));
//console.log(document.querySelectorAll("p")[0].text);

var a = $('span[id^="nhwRightgwt-uid-"]').textContent
var a0= $('span[id^="nhwMiddlegwt-uid-"]').textContent
c=a0+a
console.log(c);
var inp = document.querySelector("input")
inp.value=c;
/*
var inp = document.querySelector("input")

inp.value=c 

// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
}
              
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    console.log(transcript);
    inp.value=transcript
};
              
// start recognition
recognition.start();
//inp.value=transcript

*/
