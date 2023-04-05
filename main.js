setTimeout(function()
{
img_id = "ARMIN.jpeg";
take_snapshot();
speak_data = "Taking your next Selfie in 10 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}, 5000);

setTimeout(function()
{
img_id = "SASHA.jpeg";
take_snapshot();
speak_data = "Taking your next Selfie in 10 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}, 5000);

setTimeout(function()
{
img_id = "YMIR & HISTORIA.jpeg";
take_snapshot();
speak_data = "Taking your next Selfie in 10 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}, 5000);

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="ARMIN.jpeg"){
            document.getElementById("result1").innerHTML = '<img id = "ARMIN.jpeg" src = "'+data_uri+'"/>';
        }
        if(img_id=="SASHA.jpeg"){
            document.getElementById("result2").innerHTML = '<img id = "SASHA.jpeg" src = "'+data_uri+'"/>'; 
        }
        if(img_id=="YMIR & HISTORIA.jpeg"){
            document.getElementById("result3").innerHTML = '<img id = "YMIR & HISTORIA.jpeg" src = "'+data_uri+'"/>';
        }
    });
}