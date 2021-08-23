const days=document.querySelector('.days');
const hours=document.querySelector('.hours');
const mintues=document.querySelector('.minutes');
const seconds=document.querySelector('.seconds');

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

init();
