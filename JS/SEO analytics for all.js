const sco_issu1=document.getElementById('sco_issu1');
const sco_issu1_b=document.getElementById('sco_issu1_b');
// 2nd
const sco_issu2=document.getElementById('sco_issu2');
const sco_issu2_b=document.getElementById('sco_issu2_b');
// 3rd 
const sco_issu3=document.getElementById('sco_issu3');
const sco_issu3_b=document.getElementById('sco_issu3_b');
// 4th 
const sco_issu4=document.getElementById('sco_issu4');
const sco_issu4_b=document.getElementById('sco_issu4_b');
bg_change(sco_issu1_b,sco_issu1);
/////////////////////////////////////////
const wisf_clilck=document.getElementById('wisf_clilck');
const wisf_clilck_arrow=document.getElementById('wisf_clilck_arrow');
const wisf_clilck_c=document.getElementById('wisf_clilck_c');
const clickopen_containergdfg=document.getElementById('clickopen_containergdfg');


const wisf_clilck2=document.getElementById('wisf_clilck2');
const wisf_clilck_arrow2=document.getElementById('wisf_clilck_arrow2');
const wisf_clilck_c2=document.getElementById('wisf_clilck_c2');3
const clickopen_containergdfg2=document.getElementById('clickopen_containergdfg2');


const wisf_clilck3=document.getElementById('wisf_clilck3');
const wisf_clilck_arrow3=document.getElementById('wisf_clilck_arrow3');
const wisf_clilck_c3=document.getElementById('wisf_clilck_c3');
const clickopen_containergdfg3=document.getElementById('clickopen_containergdfg3');


const wisf_clilck4=document.getElementById('wisf_clilck4');
const wisf_clilck_arrow4=document.getElementById('wisf_clilck_arrow4');
const wisf_clilck_c4=document.getElementById('wisf_clilck_c4');
const clickopen_containergdfg4=document.getElementById('clickopen_containergdfg4');

const wisf_clilck5=document.getElementById('wisf_clilck5');
const wisf_clilck_arrow5=document.getElementById('wisf_clilck_arrow5');
const wisf_clilck_c5=document.getElementById('wisf_clilck_c5');
const clickopen_containergdfg5=document.getElementById('clickopen_containergdfg5');

/////////////////////////

// other remove 
bg_none(sco_issu2_b,sco_issu2);4
bg_none(sco_issu3_b,sco_issu3);
bg_none(sco_issu4_b,sco_issu4);


sco_issu1.addEventListener('click',()=>{
bg_change(sco_issu1_b,sco_issu1);
// other remove 
bg_none(sco_issu2_b,sco_issu2);
bg_none(sco_issu3_b,sco_issu3);
bg_none(sco_issu4_b,sco_issu4);
})


sco_issu2.addEventListener('click',()=>{
    bg_change(sco_issu2_b,sco_issu2);
    // other 
    bg_none(sco_issu1_b,sco_issu1);
    bg_none(sco_issu3_b,sco_issu3);
    bg_none(sco_issu4_b,sco_issu4);


    
});

sco_issu3.addEventListener('click',()=>{
bg_change(sco_issu3_b,sco_issu3);
// other 
bg_none(sco_issu1_b,sco_issu1);
bg_none(sco_issu2_b,sco_issu2);
bg_none(sco_issu4_b,sco_issu4);


});
sco_issu4.addEventListener('click',()=>{
    bg_change(sco_issu4_b,sco_issu4);
    // other 
    bg_none(sco_issu1_b,sco_issu1);
    bg_none(sco_issu2_b,sco_issu2);
    bg_none(sco_issu3_b,sco_issu3);

    
})

function bg_change(a,b){
   a.style.display="block "
   b.style.backgroundColor="#ffbfbf"
}
function bg_none(a,b){
    a.style.display="none"
    b.style.backgroundColor="white"
 }

 ///////


clickopen(wisf_clilck,wisf_clilck_arrow,wisf_clilck_c,clickopen_containergdfg);
clickopen(wisf_clilck2,wisf_clilck_arrow2,wisf_clilck_c2,clickopen_containergdfg2);
clickopen(wisf_clilck3,wisf_clilck_arrow3,wisf_clilck_c3,clickopen_containergdfg3);
clickopen(wisf_clilck4,wisf_clilck_arrow4,wisf_clilck_c4,clickopen_containergdfg4);
clickopen(wisf_clilck5,wisf_clilck_arrow5,wisf_clilck_c5,clickopen_containergdfg5);




5



4


 function clickopen(avv,i,d,cc){
    
    
    let idfgdfg=0;
    avv.addEventListener('click',()=>{
    cc.classList.toggle('clickopen_containergdfg_dfdf')
       i.classList.toggle('wisf_clilck_arrow');
     d.classList.toggle("d-none")
       
    
    })
 }

 console.log(idfgdfg);
 