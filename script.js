const hoursEl=document.getElementsid("time");
const minuteEl=document.getElementsByid("time");
const secondEl= document.getElementsByid("time");
const AmEl=document.getElementByid("AM");


function updatetime(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s= new Date().getSeconds();
    let AM="AM";

    if (h>12){
        h=h-12;
        AM="pm";
    }
     hoursEl.innerText=h;
     minuteEl.innerText=m;
     secondEl.innerText=s;
     AMEl,(innerText = AM)

}
updatetime();