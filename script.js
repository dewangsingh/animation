var ball = document.getElementById("ball");
var ball1 = document.getElementById("ball1");
var ball2 = document.getElementById("ball2");
var ball3 = document.getElementById("ball3");
function bounce(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}