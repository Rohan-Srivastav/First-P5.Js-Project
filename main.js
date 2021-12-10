function setup(){
    canvas = createCanvas(640,580);
    canvas.position(150,100);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video,70,50,490,470);

    
    


    fill(0,128,0);
    stroke(0,128,0);
    rect(90,40,470,20);




    fill(0,128,0);
    stroke(0,128,0);
    rect(90,520,450,20);

    

    fill(0,128,0);
    stroke(0,128,0);
    rect(70,40,20,470);

    rect(550,40,20,470);

    fill(255,0,0);
    stroke(255,0,0);
    circle(80,50,80);

    
    circle(550,50,80);

    circle(80,530,80);

    circle(565,530,80);

   
    

    



}