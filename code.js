//jave time :3

//a function to play craps on the index page
function playCraps(){
    //troubleshooting playCraps() function
    console.log("begun playing craps");

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6*Math.random());
    die2 = Math.ceil(6*Math.random());

    //console.log(die1)
    //console.log(die2)

    document.getElementById("die1Res").innerHTML = "The result of die 1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result of die 2 is: " + die2;

    var sum = die1 + die2;
    if(sum == 7 || sum == 11){
        document.getElementById("gameRes").innerHTML = "you lose";
    }else if(die1 % 2 == 0 && die1 == die2){
        document.getElementById("gameRes").innerHTML = "you win!";
    }else{
        document.getElementById("gameRes").innerHTML = "no winner";
    }
}