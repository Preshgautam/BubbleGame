var timer=60;
var score=0;
var hitrn;

function makeBubble(){
    var clutter=" ";
for(var i=1;i<=705;i++){
    var rn=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`
}
document.querySelector("#panel-bottom").innerHTML=clutter;

}

function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#panel-bottom").innerHTML=`<h1>Game Over</h1> `;
        }
    },1000);
}
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn
}

function increaseScore(){
    
    document.querySelector("#scoreval").textContent=score;
    score+=10;


}

document.querySelector("#panel-bottom").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})





makeBubble();
runTimer();
getNewHit();
increaseScore();