function setup(){
var canvas= createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ImseFTtjK/model.json" , modelloaded);
}
function modelloaded(){
    console.log("Model Loaded");
}
function draw(){
image(video, 0 , 0 , 300 , 300);
classifier.classify(video ,  gotResults);


}
function gotResults(error,result){
 if(error){
     console.log(error);
     
 }
 else{
     console.log(result)
  document.getElementById("objectaccuracy").innerHTML= result[0].confidence.toFixed(2);
  document.getElementById("objectname").innerHTML= result[0].label;

     
 }
}