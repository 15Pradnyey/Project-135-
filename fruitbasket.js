img = "";

function preload() {
    img = loadImage("https://i.postimg.cc/WbMJHrfS/Organic-Fruit-Gift-Basket-1920x1200.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: objects detecting";
}

function modelloaded() {
    console.log("CoCoSSD model initiated");
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 640, 420);
    if(Status != ""){
        for (var i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects detected";
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            textSize(25);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    
}

function back() {
    location.href = "home.html";
}