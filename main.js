var canvas = new fabric.Canvas('myCanvas');
playerx=10;
playery=10;
Blockwidth=30;
Blockheight=30;
playerobject="";
blockobject="";
function player(){
    fabric.Image.fromURL("player.png",function(img){
        playerobject=img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject);
    });
}
function block(getImage){
    fabric.Image.fromURL(getImage,function(img){
        blockobject=img;
        blockobject.scaleToWidth(Blockwidth);
        blockobject.scaleToHeight(Blockheight);
        blockobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockobject);
    });
}
window.addEventListener("keydown",keydon);
function keydon(ahe){
a =ahe.keyCode;
console.log(a);
if (ahe.shiftKey==true&& a=='80'){
    Blockwidth=Blockwidth+10;
    Blockheight=Blockheight+10;
    document.getElementById("current_width").innerHTML=Blockwidth;
    document.getElementById("current_height").innerHTML=Blockheight;
}
if (ahe.shiftKey==true&& a=='77'){
    Blockwidth=Blockwidth-10;
    Blockheight=Blockheight-10;
    document.getElementById("current_width").innerHTML=Blockwidth;
    document.getElementById("current_height").innerHTML=Blockheight;
}
if (a=='38'){
up();
console.log("Up arrow is pressed");
}
if (a=='37'){
    left();
    console.log("Left arrow is pressed");
    }
    if (a=='39'){
        right();
        console.log("Right arrow is pressed");
        }
        if (a=='40'){
            down();
            console.log("Down arrow is pressed");
            }
    if (a=='71'){
block('ground.png');
console.log("G is pressed");
    }
    if (a=='87'){
        block('wall.jpg');
        console.log("W is pressed");
            }
            if (a=='76'){
                block('light_green.png');
                console.log("L is pressed");
                    }
                    if (a=='84'){
                        block('trunk.jpg');
                        console.log("T is pressed");
                            }
                            if (a=='82'){
                                block('roof.jpg');
                                console.log("R is pressed");
                                    }
                                    if (a=='67'){
                                        block('cloud.jpg');
                                        console.log("C is pressed");
                                            }
                                            if (a=='89'){
                                                block('yellow_wall.png');
                                                console.log("Y is pressed");
                                                    }
                                                    if (a=='68'){
                                                        block('dark_green.png');
                                                        console.log("D is pressed");
                                                            }
                                                            if (a=='85'){
                                                                block('unique.png');
                                                                console.log("U is pressed");
                                                                    }
}
function up(){
if (playery>=0){
playery=playery-Blockheight;
canvas.remove(playerobject);
player();
}
}
function left(){
    if (playerx>=0){
    playerx=playerx-Blockwidth;
    canvas.remove(playerobject);
    player();
    }
    }
    function down(){
        if (playery<=500){
        playery=playery+Blockheight;
        canvas.remove(playerobject);
        player();
        }
        }
        function right(){
            if (playerx<=850){
            playerx=playerx+Blockwidth;
            canvas.remove(playerobject);
            player();
            }
            }
