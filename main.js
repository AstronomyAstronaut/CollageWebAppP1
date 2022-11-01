var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event)
{
    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    speak();
}

function speak()
{
    var synth = window.speechSynthesis;
    speakdata = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 500, 
    height: 400,
    image_format:'jpeg',
    jpeg_quality: 90 
});
camera = document.getElementById("camera");