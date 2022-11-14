var about=document.getElementById("about");
var abt=document.getElementById("about-corner");
var ach=document.getElementById("achievements");
var ach_cor=document.getElementById("achievements-corner");
var std=document.getElementById("student");
var std_crn=document.getElementById("student-corner");
function onbtnclick(){
   abt.style.display="block";
}
function onbtnclick1(){
    ach_cor.style.display="block";
}
function onbtnclick2(){
    std_crn.style.display="block";
}
ach.addEventListener('click',onbtnclick1)
about.addEventListener('click',onbtnclick)
std.addEventListener('click',onbtnclick2)




