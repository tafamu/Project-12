const my_canvas=document.querySelector("canvas");
const ctx=my_canvas.getContext("2d");
const colors=document.querySelectorAll(".color");
const size=document.querySelector(".size");
const clear=document.querySelector(".clear");


window.addEventListener("load",renk);
function renk(){
    ctx.lineWidth=4;
    for(var a=0;a<colors.length;a++){
        colors[a].style.backgroundColor=`${colors[a].attributes["data-color"].value}`;
        colors[a].addEventListener("click",function(){
            ctx.strokeStyle=`${this.attributes["data-color"].value}`;
        })
    }
};

size.addEventListener("keydown",function(e){
    if(e.keyCode==13){
        ctx.lineWidth=(`${this.value}`);
        this.value="";
    }
});


clear.addEventListener("click",function(){
    ctx.clearRect(0,0,800,800);
})

ctx.lineCap="round";
ctx.lineJoin="round";


let ciziliyor=false;
function basla(e){
    ciziliyor=true;
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);
}
function bitti(){
    ciziliyor=false;
    ctx.closePath();
}

function ciz(e){
    if(!ciziliyor){
        return ;
    }
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
}

function nokta(e){
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
}

window.addEventListener("click",nokta);
window.addEventListener("mousemove",ciz);
window.addEventListener("mousedown",basla);
window.addEventListener("mouseup",bitti);