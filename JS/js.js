const Pricing_contain_main=document.getElementById('Pricing_contain_main');
const Pricing_contain_main_A=document.getElementById('Pricing_contain_main_A');
const rowaddevntbg = document.querySelectorAll('.rowaddevntbg');
const rowaddevntbg_txt=document.querySelectorAll('.rowaddevntbg_txt');
const product_li_id=document.getElementById('product_li_id');
const company_ld_li=document.getElementById('company_ld_li');
const en_id_li=document.getElementById('en_id_li');
const logo_a=document.getElementById('logo_a');
const logo_b=document.getElementById('logo_b');
const logo_c=document.getElementById('logo_c');
const lft_col_a_div=document.getElementById('lft_col_a_div');
const as_containr_left_side_bar_apear=document.getElementById('as_containr_left_side_bar_apear');
const close_manu_icon=document.getElementById('close_manu_icon');
const ul_show_btn=document.getElementById('ul_show_btn');
const en_first_move=document.getElementById('en_first_move');
const sidebar_span=document.querySelectorAll('.sidebar_span');
const sidebar_open_close_btn=document.getElementById('sidebar_open_close_btn');
const sidebar_shoe_2X=document.getElementById('sidebar_shoe_2X');

const sidebar_togglebtn=document.getElementById('sidebar_togglebtn');
const login_li_id_lg=document.getElementById('login_li_id_lg');
const login_li_id_lg_I=document.getElementById('login_li_id_lg_I');
const navbar_cheakh=document.getElementById('navbar_cheakh');
const sidebar_open_close_btn_a=document.getElementById('sidebar_open_close_btn_a');
const logo_d=document.getElementById('logo_d');
const first_img_container_main=document.getElementById('first_img_container_main');
const footer_container_addp=document.getElementById('footer_container_addp');







rowaddevntbg.forEach((e,idx)=>{
e.addEventListener('mouseover',()=>{
e.style.backgroundColor='#F5F6F7';
rowaddevntbg_txt[idx].classList.add('text_hoverglow');

    


})
});
rowaddevntbg.forEach((e,idx)=>{
    e.addEventListener('mouseleave',()=>{
    e.style.backgroundColor='transparent';
    rowaddevntbg_txt[idx].classList.remove('text_hoverglow');

    })
    });


Pricing_contain_main.addEventListener('mouseover',()=>{
    Pricing_contain_main.style.backgroundColor=" #F5F6F7";
    Pricing_contain_main_A.style.color='#55B0FC';
})

Pricing_contain_main.addEventListener('mouseleave',()=>{
    Pricing_contain_main.style.backgroundColor="transparent";
    Pricing_contain_main_A.style.color='black';
});
// product 
let i_product_li_id=0;
product_li_id.addEventListener('click',()=>{
    logo_a.classList.add('rotate30');

    
    product_li_id.classList.toggle('clolr');
    product_li_id.firstChild.classList.toggle('text_hoverglow');
    product_li_id.lastElementChild.color='white';
    // product_li_id.lastChild.style.backgroundColor='white';
    // product_li_id.lastChild.style.color='white';
    if(i_product_li_id==0){
        product_li_id.lastElementChild.classList.remove('d-lg-none')
        product_li_id.lastElementChild.classList.add('d-lg-block');
        i_product_li_id=1;
        logo_a.classList.add('rotate30');
    }else{
        product_li_id.lastElementChild.classList.add('d-lg-none')
        product_li_id.lastElementChild.classList.remove('d-lg-block');
        i_product_li_id=0;
        logo_a.classList.remove('rotate30');
        
    }
    
    
});

product_li_id.addEventListener('mouseover',()=>{
product_li_id.children[0].style.color='#55B0FC';

});

product_li_id.addEventListener('mouseleave',()=>{
    product_li_id.children[0].style.color='black';
})
    


// company?

let i_company_ld_li=0;


company_ld_li.addEventListener('click',()=>{
    company_ld_li.classList.toggle('clolr');
    company_ld_li.firstChild.classList.toggle('text_hoverglow');
    company_ld_li.lastElementChild.color='white';
    
    if(i_company_ld_li==0){
        company_ld_li.lastElementChild.classList.remove('d-lg-none');
        company_ld_li.lastElementChild.classList.add('d-lg-block');
        i_company_ld_li=1;
        logo_b.classList.add('rotate30');
    }else{
        company_ld_li.lastElementChild.classList.add('d-lg-none');
        company_ld_li.lastElementChild.classList.remove('d-lg-block');
        i_company_ld_li=0;
        logo_b.classList.remove('rotate30');
    }
    
})

company_ld_li.addEventListener('mouseover',()=>{
    company_ld_li.children[0].style.color='#55B0FC';
    
    });
    
    company_ld_li.addEventListener('mouseleave',()=>{
        company_ld_li.children[0].style.color='black';
    });




    // en 
    
let i_en_id_li=0;


en_id_li.addEventListener('click',()=>{
    
    en_id_li.classList.toggle('clolr');
    en_id_li.firstChild.classList.toggle('text_hoverglow');
    en_id_li.lastElementChild.color='white';
    
    
    if(i_en_id_li==0){
        en_id_li.lastElementChild.classList.remove('d-lg-none');
        en_id_li.lastElementChild.classList.add('d-lg-block');
        i_en_id_li=1;
        
        logo_c.classList.add('rotate30');
    }else{
        en_id_li.lastElementChild.classList.add('d-lg-none');
        en_id_li.lastElementChild.classList.remove('d-lg-block');
        i_en_id_li=0;
        logo_c.classList.remove('rotate30');
    }
    
})

///////////


en_id_li.addEventListener('mouseover',()=>{
   
    en_id_li.style.color='#55B0FC';
})

en_id_li.addEventListener('mouseleave',()=>{
    
    en_id_li.style.color='black';
});




///////////
    
   
   

    en_first_move.children[0].addEventListener('mouseover',()=>{
        en_first_move.children[0].style.backgroundColor=" #F5F6F7";
        en_first_move.children[0].style.color='#55B0FC';
    })
    
    en_first_move.children[0].addEventListener('mouseleave',()=>{
        en_first_move.children[0].style.backgroundColor="transparent";
        en_first_move.children[0].style.color='black';
    });


    en_first_move.children[1].addEventListener('mouseover',()=>{
        en_first_move.children[1].style.backgroundColor=" #F5F6F7";
        en_first_move.children[1].style.color='#55B0FC';
    })
    
    en_first_move.children[1].addEventListener('mouseleave',()=>{
        en_first_move.children[1].style.backgroundColor="transparent";
        en_first_move.children[1].style.color='black';
    });

    en_first_move.children[2].addEventListener('mouseover',()=>{
        en_first_move.children[2].style.backgroundColor=" #F5F6F7";
        en_first_move.children[2].style.color='#55B0FC';
    })
    
    en_first_move.children[2].addEventListener('mouseleave',()=>{
        en_first_move.children[2].style.backgroundColor="transparent";
        en_first_move.children[2].style.color='black';
    });



    // en2 
    let i_lft_col_a_div=0;
    lft_col_a_div.addEventListener('click',()=>{
        lft_col_a_div.classList.toggle('clolr');
        lft_col_a_div.firstElementChild.classList.toggle('text_hoverglow');
        lft_col_a_div.lastElementChild.color='white';  


      if(i_lft_col_a_div==0){
        lft_col_a_div.children[1].classList.remove('d-none');
        lft_col_a_div.children[1].classList.add('d-block');
         i_lft_col_a_div=1;
         logo_d.classList.add('rotate30');
      }else{
        lft_col_a_div.children[1].classList.add('d-none');
        lft_col_a_div.children[1].classList.remove('d-block');
         i_lft_col_a_div=0;
         logo_d.classList.remove('rotate30');
     }
    }); 
    lft_col_a_div.addEventListener('mouseover',()=>{
        lft_col_a_div.children[0].style.color='#55B0FC';
        
        });
        
        lft_col_a_div.addEventListener('mouseleave',()=>{
            lft_col_a_div.children[0].style.color='black';
        });
    



        as_containr_left_side_bar_apear.children[0].addEventListener('mouseover',()=>{
            as_containr_left_side_bar_apear.children[0].style.color='#55B0FC';            

        
        });
        
        as_containr_left_side_bar_apear.children[0].addEventListener('mouseleave',()=>{
            as_containr_left_side_bar_apear.children[0].style.color='black';
        });


        as_containr_left_side_bar_apear.children[1].addEventListener('mouseover',()=>{
            as_containr_left_side_bar_apear.children[1].style.color='#55B0FC';            

        
        });
        
        as_containr_left_side_bar_apear.children[1].addEventListener('mouseleave',()=>{
            as_containr_left_side_bar_apear.children[1].style.color='black';
        });


        as_containr_left_side_bar_apear.children[2].addEventListener('mouseover',()=>{
            as_containr_left_side_bar_apear.children[2].style.color='#55B0FC';            

        
        });
        
        as_containr_left_side_bar_apear.children[2].addEventListener('mouseleave',()=>{
            as_containr_left_side_bar_apear.children[2].style.color='black';
        });


        // menu_close btn 0;
        let menu_close_btn_I=0;
      
        
        close_manu_icon.addEventListener('click',()=>{


            if(menu_close_btn_I==0){
                close_manu_icon.children[0].classList.add('d-none');
                close_manu_icon.children[1].classList.add('d-block');
                close_manu_icon.children[1].classList.remove('d-none');
                menu_close_btn_I=1;
                ul_show_btn.classList.add('d-none')
                ul_show_btn.classList.add('d-lg-flex')


            }else{

                close_manu_icon.children[0].classList.remove('d-none');
                close_manu_icon.children[1].classList.remove('d-block');
                close_manu_icon.children[1].classList.add('d-none');
                ul_show_btn.classList.remove('d-none')
                menu_close_btn_I=0;
               

            }
           
            
            
        })

let sidebar_open_close_btn_i=0;
sidebar_open_close_btn_a.addEventListener('click',()=>{
    footer_container_addp.classList.toggle('footer_container_addp')
    sidebar_togglebtn.classList.toggle('sidebar_main_container_width')

    first_img_container_main.classList.toggle('first_img_container_main');
    
    if(sidebar_open_close_btn_i==0){
        

        sidebar_open_close_btn.style.transform='rotate(0deg)';
        
        sidebar_span.forEach((x)=>{
            x.classList.add('d-md-none')
            })
            sidebar_open_close_btn_i=1;

    }else{
        sidebar_span.forEach((x)=>{
            x.classList.remove('d-md-none')
            })
            sidebar_open_close_btn.style.transform='rotate(180deg)';
            sidebar_open_close_btn_i=0;
    }
   
})


//////
// sidebar 

sidebar_shoe_2X.addEventListener('click',()=>{
    sidebar_togglebtn.classList.toggle("d-none");

})



//////////



login_li_id_lg.addEventListener('mouseover',()=>{
   
    login_li_id_lg_I.style.color='#55B0FC';
})

login_li_id_lg.addEventListener('mouseleave',()=>{
    
    login_li_id_lg_I.style.color='black';
});

//////





///////