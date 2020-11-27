var DAY1 = document.getElementById("eventDayOne");
var DAY2 = document.getElementById("eventDayTwo");
var DAY3 = document.getElementById("eventDayThree");

function eventDay01() {
    DAY1.style.display = "block";
    DAY2.style.display = "none";
    DAY3.style.display = "none";
}

function eventDay02() {
    DAY2.style.display = "block";
    DAY1.style.display = "none";
    DAY3.style.display = "none";
}

function eventDay03() {
    DAY3.style.display = "block";
    DAY1.style.display = "none";
    DAY2.style.display = "none";
}

// More info 

function con01(){
    document.getElementById("con1").style.display = "block"

    document.getElementById("con2").style.display = "none"
    document.getElementById("con3").style.display = "none"
    document.getElementById("con4").style.display = "none"
    document.getElementById("con5").style.display = "none"
    document.getElementById("con6").style.display = "none"
    document.getElementById("con7").style.display = "none"
    document.getElementById("con8").style.display = "none"
    document.getElementById("con9").style.display = "none"

    // button 
    document.getElementById("buttonA1").style.display = "none"
    document.getElementById("buttonA2").style.display = "inline"

}

function conA0 () {
    document.getElementById("con1").style.display = "none"
    document.getElementById("buttonA1").style.display = "inline"
    document.getElementById("buttonA2").style.display = "none"
}

function con02(){
    document.getElementById("con2").style.display = "block"

    document.getElementById("con1").style.display = "none"
    document.getElementById("con3").style.display = "none"
    document.getElementById("con4").style.display = "none"
    document.getElementById("con5").style.display = "none"
    document.getElementById("con6").style.display = "none"
    document.getElementById("con7").style.display = "none"
    document.getElementById("con8").style.display = "none"
    document.getElementById("con9").style.display = "none"

    // button 
    document.getElementById("buttonB1").style.display = "none"
    document.getElementById("buttonB2").style.display = "inline"
}

function conB0 () {
    document.getElementById("con2").style.display = "none"
    document.getElementById("buttonB1").style.display = "inline"
    document.getElementById("buttonB2").style.display = "none"
}

function con03(){
    document.getElementById("con3").style.display = "block"

    document.getElementById("con2").style.display = "none"
    document.getElementById("con1").style.display = "none"
    document.getElementById("con4").style.display = "none"
    document.getElementById("con5").style.display = "none"
    document.getElementById("con6").style.display = "none"
    document.getElementById("con7").style.display = "none"
    document.getElementById("con8").style.display = "none"
    document.getElementById("con9").style.display = "none"
    
    // button 
    document.getElementById("buttonC1").style.display = "none"
    document.getElementById("buttonC2").style.display = "inline"
}

function conC0 () {
    document.getElementById("con3").style.display = "none"
    document.getElementById("buttonC1").style.display = "inline"
    document.getElementById("buttonC2").style.display = "none"
}

function con04(){
    document.getElementById("con4").style.display = "block"

    document.getElementById("con2").style.display = "none"
    document.getElementById("con3").style.display = "none"
    document.getElementById("con1").style.display = "none"
    document.getElementById("con5").style.display = "none"
    document.getElementById("con6").style.display = "none"
    document.getElementById("con7").style.display = "none"
    document.getElementById("con8").style.display = "none"
    document.getElementById("con9").style.display = "none"

    // button 
    document.getElementById("buttonD1").style.display = "none"
    document.getElementById("buttonD2").style.display = "inline"
}

function conD0 () {
    document.getElementById("con4").style.display = "none"
    document.getElementById("buttonD1").style.display = "inline"
    document.getElementById("buttonD2").style.display = "none"
}

function con05(){
    document.getElementById("con5").style.display = "block"

    document.getElementById("con2").style.display = "none"
    document.getElementById("con3").style.display = "none"
    document.getElementById("con4").style.display = "none"
    document.getElementById("con1").style.display = "none"
    document.getElementById("con6").style.display = "none"
    document.getElementById("con7").style.display = "none"
    document.getElementById("con8").style.display = "none"
    document.getElementById("con9").style.display = "none"

    // button 
    document.getElementById("buttonE1").style.display = "none"
    document.getElementById("buttonE2").style.display = "inline"
}

function conE0 () {
    document.getElementById("con5").style.display = "none"
    document.getElementById("buttonE1").style.display = "inline"
    document.getElementById("buttonE2").style.display = "none"
}

function con06(){
    document.getElementById("con6").style.display = "block"

    document.getElementById("con2").style.display = "none"
    document.getElementById("con3").style.display = "none"
    document.getElementById("con4").style.display = "none"
    document.getElementById("con5").style.display = "none"
    document.getElementById("con1").style.display = "none"
    document.getElementById("con7").style.display = "none"
    document.getElementById("con8").style.display = "none"
    document.getElementById("con9").style.display = "none"

    // button 
    document.getElementById("buttonF1").style.display = "none"
    document.getElementById("buttonF2").style.display = "inline"
}

function conF0 () {
    document.getElementById("con6").style.display = "none"
    document.getElementById("buttonF1").style.display = "inline"
    document.getElementById("buttonF2").style.display = "none"
}

function con07(){
    document.getElementById("con7").style.display = "block"

    document.getElementById("con2").style.display = "none"
    document.getElementById("con3").style.display = "none"
    document.getElementById("con4").style.display = "none"
    document.getElementById("con5").style.display = "none"
    document.getElementById("con6").style.display = "none"
    document.getElementById("con1").style.display = "none"
    document.getElementById("con8").style.display = "none"
    document.getElementById("con9").style.display = "none"

    // button 
    document.getElementById("buttonG1").style.display = "none"
    document.getElementById("buttonG2").style.display = "inline"
}

function conG0 () {
    document.getElementById("con7").style.display = "none"
    document.getElementById("buttonG1").style.display = "inline"
    document.getElementById("buttonG2").style.display = "none"
}

function con08(){
    document.getElementById("con8").style.display = "block"

    document.getElementById("con2").style.display = "none"
    document.getElementById("con3").style.display = "none"
    document.getElementById("con4").style.display = "none"
    document.getElementById("con5").style.display = "none"
    document.getElementById("con6").style.display = "none"
    document.getElementById("con7").style.display = "none"
    document.getElementById("con1").style.display = "none"
    document.getElementById("con9").style.display = "none"

    // button 
    document.getElementById("buttonH1").style.display = "none"
    document.getElementById("buttonH2").style.display = "inline"
}

function conH0 () {
    document.getElementById("con8").style.display = "none"
    document.getElementById("buttonH1").style.display = "inline"
    document.getElementById("buttonH2").style.display = "none"
}


function con09(){
    document.getElementById("con9").style.display = "block"

    document.getElementById("con2").style.display = "none"
    document.getElementById("con3").style.display = "none"
    document.getElementById("con4").style.display = "none"
    document.getElementById("con5").style.display = "none"
    document.getElementById("con6").style.display = "none"
    document.getElementById("con7").style.display = "none"
    document.getElementById("con8").style.display = "none"
    document.getElementById("con1").style.display = "none"

    // button 
    document.getElementById("buttonI1").style.display = "none"
    document.getElementById("buttonI2").style.display = "inline"
}

function conI0 () {
    document.getElementById("con9").style.display = "none"
    document.getElementById("buttonI1").style.display = "inline"
    document.getElementById("buttonI2").style.display = "none"
}