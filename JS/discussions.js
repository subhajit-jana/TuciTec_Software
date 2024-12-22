const Menu_media_close_open=document.getElementById('Menu_media_close_open');
const close_btn_sidebar=document.getElementById('close_btn_sidebar');
const manu_right=document.getElementById('manu_right');
const lang_opt_select=document.getElementById('lang_opt_select');
const lang_opt_select_a=document.getElementById('lang_opt_select_a');
///////////////


console.log(Menu_media_close_open.children[0]);


function classadd(a,b){
   a.classList.add('b');
}
function classremove(a,b){
    a.classList.remove(b);
 }
/////////////////////////////////
 Menu_media_close_open_i=0;
  Menu_media_close_open.addEventListener('click',()=>{
    if(Menu_media_close_open_i==0){
        Menu_media_close_open.children[0].classList.remove('fa-bars');
        Menu_media_close_open.children[0].classList.add('fa-xmark');
        close_btn_sidebar.classList.toggle('d-none')
        Menu_media_close_open_i=1;
        manu_right.classList.toggle('manu_right_abc');

    }else{
        Menu_media_close_open.children[0].classList.add('fa-bars');
        Menu_media_close_open.children[0].classList.remove('fa-xmark');
        close_btn_sidebar.classList.toggle('d-none')
        manu_right.classList.toggle('manu_right_abc');

        Menu_media_close_open_i=0;


    }
  
  })
///////////////////////////////////
  close_btn_sidebar.addEventListener('click',()=>{
   Menu_media_close_open.children[0].classList.add('fa-bars');
        Menu_media_close_open.children[0].classList.remove('fa-xmark');
        close_btn_sidebar.classList.toggle('d-none')
        Menu_media_close_open_i=0;
        manu_right.classList.toggle('manu_right_abc');
  })
  ///////////////////////
  lang_opt_select.addEventListener('click',()=>{
    lang_opt_select_a.classList.toggle('d-none');
  })
  body.addEventListener('click',
    ()=>{
      lang_opt_select_a.classList.remove("d-none");
    }
  )