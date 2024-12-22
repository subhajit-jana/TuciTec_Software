const clickbtnparra=document.querySelectorAll('.click_this_45btn');
const iconthis344=document.querySelectorAll('.click_this_45btn_b');
const clickbtnopen_para=document.querySelectorAll('.click_this_45btn_a');
const parentboss=document.querySelectorAll('.clicklopens45')
for(let i=0; i<clickbtnopen_para.length; i++){
    // console.log(i);
    clickbtnparra[i].addEventListener('click',()=>{
        iconthis344[i].classList.toggle('fa-angle-down');
        iconthis344[i].classList.toggle('fa-angle-up');
        clickbtnopen_para[i].classList.toggle('d-none');
        parentboss[i].classList.toggle('bg-infos');
        parentboss[i].classList.toggle('adsfdsf345s4eer4');
    })


}
// new start 
const clickaarea=document.querySelectorAll('.clickthis_xf67734');
const icon=document.querySelectorAll(".clickthis_xf67734_a");
const openarea=document.querySelectorAll('.clickthis_xf67734_b');
for(let i=0; i<clickaarea.length; i++){
    console.log(openarea[i]);
    clickaarea[i].addEventListener('click',()=>{
        icon[i].classList.toggle('fa-chevron-up');
        icon[i].classList.toggle('fa-angle-down');
        openarea[i].classList.toggle('d-none');
        clickaarea[i].parentElement.classList.toggle('faangle_down');
    })
}



// clickaarea[0].addEventListener('click',()=>{
//     icon[0].classList.toggle('fa-chevron-up');
//     icon[0].classList.toggle('fa-angle-down');
//     openarea[i].classList.toggle('d-none');
//     clickaarea[0].parentElement.classList.toggle('faangle_down');
// })