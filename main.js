function setup() {
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/f8ad5bOUO/model.json',modelLoaded);
}

function draw() {
    image(video, 0, 0, 640, 480);
    classifier.classify(video,gotResult);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotResult(error,results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}