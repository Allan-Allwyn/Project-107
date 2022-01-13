

function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4TRtpHTr9/model.json',modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResults);
    console.log("Model is loaded !");
}

function gotResults(error,results){
console.log('Got Results');
}