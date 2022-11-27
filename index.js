var about=document.getElementById("about");
let isShow=true;
var abt=document.getElementById("about-corner");
var ach=document.getElementById("achievements");
let isShow1=true;
var ach_cor=document.getElementById("achievements-corner");
var std=document.getElementById("student");
let isShow2=true;
var std_crn=document.getElementById("student-corner");

function showhide(){
    if(isShow){
    abt.style.display="none";
    isShow=false;
    }else{
        abt.style.display="block"; 
        isShow=true;
    }
}
function showhide2(){
    if(isShow1){
        ach_cor.style.display="none";
        isShow1=false;
        }else{
            ach_cor.style.display="block"; 
            isShow1=true;
        }
}
function showhide1(){
    if(isShow2){
        std_crn.style.display="none";
        isShow2=false;
        }else{
            std_crn.style.display="block"; 
            isShow2=true;
        }
}




