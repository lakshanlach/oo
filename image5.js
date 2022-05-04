img = ""
objects = []
status = ""

function preload(){
  img = loadImage("d.jpg")
}

function setup() {
  canvas = createCanvas(640, 360)
  canvas.center()
  objectDetector = ml5.objectDetector("cocossd" , modelloaded)
  document.getElementById("object").innerHTML = "Status : Detecting Objects"
}

function modelloaded() {
  console.log("modelloaded")
  status = true
  objectDetector.detect(img, gotResult)
}

function gotResult(error , results) {
  if(error){
    console.log(error)
  }
    console.log(results)
    objects = results
    document.getElementById("name").innerHTML = "object detected by cocossd is (" + results[0].label + ")"
  }

function draw() {
  image(img, 0, 0, 640, 360)

      if(status != ""){
        
        for (i=0; i < objects.length; i++) {
          document.getElementById("object").innerHTML = "Status : Object Detected";

          percent = floor(objects[i].confidence * 100)
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15)
          noFill()
          stroke("red")
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
          document.getElementById("number").innerHTML = "NUMBER OF OBJECTS DETECTED BY COCOSSD NOW IS : " + objects.length
        }
      }
}
/*function draw() {
   image(img, 0, 0, 640, 420);
    if(status != "") {
       for (i = 0; i < objects.length; i++) {
          document.getElementById("object").innerHTML = "Status : Object Detected";
           percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x +15, objects[i].y + 15);
             noFill();
             stroke("red");
              rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
              document.getElementById("number").innerHTML = "NUMBER OF OBJECTS DETECTED BY COCOSSD NOW IS : " + objects.length;
             } } }*/

function back(){
  window.location="index.html"
}
