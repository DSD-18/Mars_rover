canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width=100;
rover_height= 90;

background_image = "mars.jpg";

rover_image="rover.png";

rover_x = 320;
rover_y= 250;

function add(){
    background_object = new Image();
    background_object.onload=upload_Background;
    background_object.src=background_image;

    background_rover = new Image();
    background_rover.onload=upload_Rover;
    background_rover.src=rover_image;
}
function upload_Background(){
    ctx.drawImage(background_object, 0, 0, canvas.width,canvas.height);
}
function upload_Rover(){
    ctx.drawImage(background_rover, rover_x,rover_y, rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPresses = e.keyCode;
    console.log(keyPresses);

    if(keyPresses == "37"){
        left();
        console.log("left_key");
    }
    if(keyPresses == "38"){
        up();
        console.log("up_key");
    }
    if(keyPresses == "39"){
        right();
        console.log("right_key");
    }
    if(keyPresses == "40"){
        down();
        console.log("down_key");
    }
}
function left(){
    if(rover_x>=0){
        rover_x= rover_x-10;
        upload_Background();
        upload_Rover();
        console.log("x="+rover_x + "y="+rover_y);
    }
}
function right(){
    if(rover_x<=700){
        rover_x= rover_x+10;
        upload_Background();
        upload_Rover();
        console.log("x="+rover_x + "y="+rover_y);
    }
}
function up(){
    if(rover_y>=0){
        rover_y= rover_y-10;
        upload_Background();
        upload_Rover();
        console.log("x="+rover_x + "y="+rover_y);
    }
}
function down(){
    if(rover_y<=500){
        rover_y= rover_y+10;
        upload_Background();
        upload_Rover();
        console.log("x="+rover_x + "y="+rover_y);
    }
}