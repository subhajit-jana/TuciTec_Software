const offerbtn=document.querySelectorAll(".cardbtnformp");//claim offer btn
const closebtn=document.getElementById('closebtnformp');//close btn for from
const showareacontent=document.getElementById('boxdfsd');//cover container
let true_btn=1;







offerbtn.forEach((val,inx)=>{
val.addEventListener("click",()=>{
// console.log("hellow ")   
if(true_btn==1){
true_btn=!true_btn;
document.getElementById("body").style.overflow = "hidden";
showareacontent.classList.toggle('d-none') ;
true_btn=2;
}else{
document.getElementById("body").style.overflow = "auto";
true_btn=1;
}
})
// 
// 
// 



})
closebtn.addEventListener('click',()=>{
    console.log("closebtn")
    if(true_btn==1){
    true_btn=!true_btn;
    document.getElementById("body").style.overflow = "hidden";
    showareacontent.classList.toggle('d-none') ;
    true_btn=2;
    }else{
    document.getElementById("body").style.overflow = "auto";
    true_btn=!true_btn;
    true_btn=1;
    showareacontent.classList.toggle('d-none') ;
    }
    })