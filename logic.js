const days=document.querySelector('.days');
const hours=document.querySelector('.hours');
const mintues=document.querySelector('.minutes');
const seconds=document.querySelector('.seconds');
let el={
    d:document.getElementById('days'),
    h:document.getElementById('hour'),
    m:document.getElementById('min'),
    s:document.getElementById('sec'),
}
let timeleft={
    d:0,h:0,m:0,s:0
}
let totalsec;
function init(){
    totalsec=Math.floor((new Date('August 28 2022') - new Date())/1000);
    setTimeleft();
    let interval=setInterval(()=>{
        if(totalsec<0){
            clearInterval(interval);
        }
        countTime();
        console.log(timeleft);
        rotate(timeleft,el);

    },1000)
    
}

function countTime(){
    if(totalsec>0){
        --timeleft.s;
        if(timeleft.m>=0 && timeleft.s<0){
            timeleft.s=59;
            --timeleft.m;
            if(timeleft.h>=0 && timeleft.m<0){
                timeleft.m=59;
                --timeleft.h;
                if(timeleft.d>=0 && timeleft.h<0){
                    timeleft.h=23;
                    --timeleft.d;
                }
            }
        }
    }
    --totalsec;
    display();
}

function display(){
    days.innerText=timeleft.d;
    hours.innerText=timeleft.h;
    mintues.innerText=timeleft.m;
    seconds.innerText=timeleft.s;
}

function setTimeleft(){
    timeleft.d=Math.floor(totalsec/(60*60*24));
    timeleft.h=Math.floor(totalsec/(60*60)%24);
    timeleft.m=Math.floor(totalsec/(60)%60);
    timeleft.s=Math.floor(totalsec%60);
}
function rotate(time,el)
{
    if(time.d%2==0)
    {
        el.d.style.backgroundColor="red";
        el.d.style.transform ="rotateX(360deg)";
        

    }
    else{
        el.d.style.backgroundColor="yellow";
        el.d.style.transform ="rotateX(0deg)";
        
    }
    if(time.h%2==0)
    {
        el.h.style.backgroundColor="red";
        el.h.style.transform ="rotateX(360deg)";
        

    }
    else{
        el.h.style.backgroundColor="yellow";
        el.h.style.transform ="rotateX(0deg)";
        
    }
    if(time.m%2==0)
    {
        el.m.style.backgroundColor="red";
        el.m.style.transform ="rotateX(360deg)";
        

    }
    else{
        el.m.style.backgroundColor="yellow";
        el.m.style.transform ="rotateX(0deg)";
        
    }
    if(time.s%2==0)
    {
        el.s.style.backgroundColor="red";
        el.s.style.transform ="rotateX(360deg)";
        

    }
    else{
        el.s.style.backgroundColor="yellow";
        el.s.style.transform ="rotateX(0deg)";
        
    }

}
 
init();
