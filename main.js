Webcam.set({width:350,height:300,image_format:'jpg',jpg_quality:200});
camera=document.getElementById("camera");
Webcam.attach(camera);

future1="";
future2="";
function capture() {
   Webcam.snap(function (data_uri) {
       document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="cap_img">'
   }); 
}
link_=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nWxUK7WMZ/model.json",modelLoaded);
function modelLoaded() {
    console.log("Dear user, your model has loaded");
}
function speak() {
   var synth=window.speechSynthesis;
    pred1="You look "+future1;
    pred2="Or you look "+future2;
    var utterThis=new SpeechSynthesisUtterance(pred1+pred2);
    synth.speak(utterThis);
}
function got_it() {
    var stored=document.getElementById("cap_img");
    link_.classify(stored,sr);
}
function sr(error,results) {
    if (error) {
        console.log("We have got an error");
        console.error(error);
    } else {
        console.log("do not worry creator, as there is no error");
        console.log(results);
        future1=results[0].label;
        future2=results[1].label;
        document.getElementById("Emotion_senser1").innerHTML=future1;
        document.getElementById("Emotion_senser2").innerHTML=future2;
        if (future1=="Tongue-out") {
            document.getElementById("Emoji_senser1").innerHTML="&#128539;";
        }
        if (future1=="FACE WITH LOOK OF TRIUMPH") {
            document.getElementById("Emoji_senser1").innerHTML="&#128548;";
        }
        if (future1=="Angry") {
            document.getElementById("Emoji_senser1").innerHTML="&#128545;";
        }
        if (future1=="Blegh") {
            document.getElementById("Emoji_senser1").innerHTML="&#129314;";
        }

        if (future2=="Tongue-out") {
            document.getElementById("Emoji_senser2").innerHTML="&#128539;";
        }
        if (future2=="FACE WITH LOOK OF TRIUMPH") {
            document.getElementById("Emoji_senser2").innerHTML="&#128548;";
        }
        if (future2=="Angry") {
            document.getElementById("Emoji_senser2").innerHTML="&#128545;";
        }
        if (future2=="Blegh") {
            document.getElementById("Emoji_senser2").innerHTML="&#129314;";
        }

    }
}






















