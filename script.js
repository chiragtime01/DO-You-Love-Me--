let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');


let div=document.getElementById("divv");
function run(){
    window.alert('MEEEEE TOOOOOO!!!');
    div.classList.remove("hidden");
    btn2.setAttribute("id","hidden");

}
let count=0;
btn1.addEventListener("click",run);
const btnheight=66;
const btnweight=129;
const maxheight=window.innerHeight-btnheight;
const maxweight=window.innerWidth-btnweight;
btn2.addEventListener('mouseover',()=>{
    btn2.style.left=Math.floor(Math.random()*(maxweight-1))+'px';
    btn2.style.top=Math.floor(Math.random()*(maxheight-1))+'px';
    count++;
    if(count==10){
        window.alert(`JUST CLICK YESS!!!, YOU HAVE HATED ME 10 TIMES ALREADY!!!`);
    }

})





