var name = prompt("Hi! What is your name?");
console.log(name);
alert("Hi "+ name)

var name_change = document.getElementById("page");
name_change.textContent = "Welcome to the home page " + name

var dodo = document.getElementById("zach");
dodo.textContent = "Hey " + name + " press any button to make text appear."
dodo.style.textAlign = "left"

var thy = document.getElementById("ark")
thy.textContent = "and press again to the change color to red."

function change_colors(element){
    if(element.style.color = "blue"){
        element.style.color = "yellow"
    }
    if(element.style.color = "red"){
        element.style.color = "green"
    } 
    if(element.style.color = "green"){
        element.style.color = "orange"
    }
}
function getInfo(){
    console.log("Div has been clicked");
    var n = event.timeStamp;
    console.log(n);
}


document.body.addEventListener("keydown", changeColor)
 function changeColor(event){
    if(document.body.style.color == "white"){
        document.body.style.color = "red";
    } else{
        document.body.style.color = "white";
    }
}

var seth = prompt("Would you like the website to crash?")
if(seth == "yes"){
    for(var i=0; i<Infinity; i++){
        console.log(i);
    }
}
