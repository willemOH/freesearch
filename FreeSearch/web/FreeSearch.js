var google;
var circle;
var circles = [];
var drawThings; //variable given a value when program is synchonious and assets are gathered to be able to draw from data
var knowThings; //variable given a value when program is synchonious and assets are gathered to be able to display json data
var n = 0;
var results = [];
var nodesMade = false;
var cat = "cat";
var googleApi = "https://www.googleapis.com/customsearch/v1?key=";
var apiKey = "AIzaSyAVmKX2S_xf0wPcsmov6qpOwJVXzx6jMss";
var cse = "017477590114230563037:ghxzxpo-izw";
var api = googleApi
    + apiKey + "&cx=" + cse + "&q="; //+ encodeURIComponent(input); -> important part of url but moved to googleSearch function



function setup() {
    createCanvas(windowWidth, windowHeight);
    

    var button = select('#search');
    button.mousePressed(loadEverything);

    input = select('#query');
   
}

function loadEverything() {
    
    googleSearch();
    createNodes();
  
    
   
}
function googleSearch() {
    var url = api + encodeURIComponent(input.value());
    loadJSON(url, gotData);
}

function gotData(data) {
    google = data;
   

    //would be array populate function but google.items doesnt work out of the scope of this function - synchonious issue
    
    for (var i = 0; i < 10; i++) { //creates a 2nd dimensional array of title, 
        //description, and hyperlink for each result in array
        results[i] = [];
        results[i][0] = google.items[i].title;
        results[i][1] = google.items[i].snippet;
        results[i][2] = google.items[i].link;
       
        // Save the page title, description and hyperlink
   
    } 

    knowThings = !knowThings;
    
    
    }



    function createNodes() {
        nodesMade = true;
        var protection = 0;
        circlesReady = true;

        while (circles.length < 20) {

            circle = {
                x: random(width - (width / 5) * 3, width - width / 10),
                y: random(height - (height / 6), height - (height / 6) * 5),
                r: 20
            }

            var overlapping = false;
            for (var j = 0; j < circles.length; j++) {
                var other = circles[j];
                var d = dist(circle.x, circle.y, other.x, other.y);
                if (d < circle.r + other.r + 50) {
                    overlapping = true;
                }
            }

            // If not keep it
            if (!overlapping && circles.length<10) {
                circles.push(circle);
            }

            // Are we stuck?
            protection++;
            if (protection > 100) {
                break;
            }
        }

        // Draw all the circles
        for (var i = 0; i < circles.length; i++) {
            fill('black');
            noStroke();
            ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
        }
        
        //suedoDraw();
        drawThings = !drawThings;
        
    }


function inCircle() {
    for (i = 0; i < 10; i++) {
        if (dist(mouseX, mouseY, circles[i].x, circles[i].y) < circles[i].r) {
            return i;
            break;
        }
        
    }
    return null;

   
}

function out(x) {
   
        var titleLink = results[x][0].link(results[x][2]);
        document.getElementById("title").innerHTML = titleLink;
        document.getElementById("description").innerHTML = results[x][1];
    
}



function draw() {
    if (drawThings && knowThings) {
      
       switch (inCircle())
       {
           case 0:
               out(0);
               break;
           case 1: 
               out(1);
               break;

           case 2:
               out(2);
               break;

           case 3:
               out(3);
               break;

           case 4:
               out(4);
               break;

           case 5:
               out(5);
               break;

           case 6:
               out(6);
               break;

           case 7:
               out(7);
               break;

           case 8:
               out(8);
               break;

           case 9:
               out(9);
               break;

           case 10:
               out(10);
               break;

           case 11:
               out(11);
               break;

           case 12:
               out(12);
               break;

           case 13:
               out(13);
               break;

            default: console.log("no input");
        }  
        
    }
}
   
    
        

    


