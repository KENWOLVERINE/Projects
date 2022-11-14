var about=document.getElementById("about");
var abt=document.getElementById("about-corner");
var ach=document.getElementById("achievements");
var ach_cor=document.getElementById("achievements-corner");
function onbtnclick(){
   abt.style.display="block";
}
function onbtnclick1(){
    ach_cor.style.display="block";
}
ach.addEventListener('click',onbtnclick1)
about.addEventListener('click',onbtnclick)




