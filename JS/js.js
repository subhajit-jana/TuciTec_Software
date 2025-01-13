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
//.......................................
//////out side click







// .......................................
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
product_li_id.addEventListener('click',(event)=>{
    
    if(i_product_li_id==0){
        product_li_id.lastElementChild.color='white';
        product_li_id.classList.add('clolr');
        product_li_id.firstChild.classList.add('text_hoverglow');
        product_li_id.lastElementChild.classList.remove('d-lg-none')
        product_li_id.lastElementChild.classList.add('d-lg-block');
        i_product_li_id=1;
        logo_a.classList.add('rotate30');
        
    }else{
        product_li_id.lastElementChild.color='white';
        product_li_id.classList.remove('clolr');
        product_li_id.firstChild.classList.remove('text_hoverglow');


        product_li_id.lastElementChild.classList.add('d-lg-none')
        product_li_id.lastElementChild.classList.remove('d-lg-block');
        i_product_li_id=0;
        logo_a.classList.remove('rotate30');
        
    }
    if (i_company_ld_li === 1) {
        company_ld_li.classList.remove('clolr');
        company_ld_li.firstChild.classList.remove('text_hoverglow');
            company_ld_li.lastElementChild.classList.add('d-lg-none');
            company_ld_li.lastElementChild.classList.remove('d-lg-block');
            i_company_ld_li = 0;
            logo_b.classList.remove('rotate30');
        }
    if(i_en_id_li=1){
        en_id_li.classList.remove('clolr');
en_id_li.firstChild.classList.remove('text_hoverglow');
en_id_li.lastElementChild.color='white';
    en_id_li.lastElementChild.classList.add('d-lg-none');
    en_id_li.lastElementChild.classList.remove('d-lg-block');
    i_en_id_li=0;
    logo_c.classList.remove('rotate30');
    }
    event.stopPropagation();
    
    
});

product_li_id.addEventListener('mouseover',()=>{
product_li_id.children[0].style.color='#55B0FC';

});

product_li_id.addEventListener('mouseleave',()=>{
    product_li_id.children[0].style.color='black';
})
    


// company?


let i_company_ld_li = 0;

company_ld_li.addEventListener('click', (event) => {
    
    company_ld_li.classList.toggle('clolr');
    company_ld_li.firstChild.classList.toggle('text_hoverglow');
    company_ld_li.lastElementChild.color = 'white';

    if (i_company_ld_li === 0) {
        company_ld_li.classList.add('clolr');
    company_ld_li.firstChild.classList.add('text_hoverglow');
        company_ld_li.lastElementChild.classList.remove('d-lg-none');
        company_ld_li.lastElementChild.classList.add('d-lg-block');
        i_company_ld_li = 1;
        logo_b.classList.add('rotate30');
    } else {
        company_ld_li.classList.remove('clolr');
    company_ld_li.firstChild.classList.remove('text_hoverglow');
        company_ld_li.lastElementChild.classList.add('d-lg-none');
        company_ld_li.lastElementChild.classList.remove('d-lg-block');
        i_company_ld_li = 0;
        logo_b.classList.remove('rotate30');
    }
    // ?
    

        if(i_product_li_id==1){
            product_li_id.lastElementChild.color='white';
        product_li_id.classList.remove('clolr');
        product_li_id.firstChild.classList.remove('text_hoverglow');


        product_li_id.lastElementChild.classList.add('d-lg-none')
        product_li_id.lastElementChild.classList.remove('d-lg-block');
        i_product_li_id=0;
        logo_a.classList.remove('rotate30');
        }
        if(i_en_id_li=1){
            en_id_li.classList.remove('clolr');
    en_id_li.firstChild.classList.remove('text_hoverglow');
    en_id_li.lastElementChild.color='white';
        en_id_li.lastElementChild.classList.add('d-lg-none');
        en_id_li.lastElementChild.classList.remove('d-lg-block');
        i_en_id_li=0;
        logo_c.classList.remove('rotate30');
        }
    // 

    
    event.stopPropagation();
});


document.addEventListener('click', () => {

    
    if (i_company_ld_li === 1) {
        company_ld_li.classList.remove('clolr');
        company_ld_li.firstChild.classList.remove('text_hoverglow');
            company_ld_li.lastElementChild.classList.add('d-lg-none');
            company_ld_li.lastElementChild.classList.remove('d-lg-block');
            i_company_ld_li = 0;
            logo_b.classList.remove('rotate30');
        }

        if(i_product_li_id==1){
            product_li_id.lastElementChild.color='white';
        product_li_id.classList.remove('clolr');
        product_li_id.firstChild.classList.remove('text_hoverglow');


        product_li_id.lastElementChild.classList.add('d-lg-none')
        product_li_id.lastElementChild.classList.remove('d-lg-block');
        i_product_li_id=0;
        logo_a.classList.remove('rotate30');
        }
        if(i_en_id_li=1){
            en_id_li.classList.remove('clolr');
    en_id_li.firstChild.classList.remove('text_hoverglow');
    en_id_li.lastElementChild.color='white';
        en_id_li.lastElementChild.classList.add('d-lg-none');
        en_id_li.lastElementChild.classList.remove('d-lg-block');
        i_en_id_li=0;
        logo_c.classList.remove('rotate30');
        }
});


company_ld_li.addEventListener('mouseover',()=>{
    company_ld_li.children[0].style.color='#55B0FC';
    
    });
    
    company_ld_li.addEventListener('mouseleave',()=>{
        company_ld_li.children[0].style.color='black';
    });




    // en 
    
let i_en_id_li=0;


en_id_li.addEventListener('click',(event)=>{
    
    en_id_li.classList.toggle('clolr');
    en_id_li.firstChild.classList.toggle('text_hoverglow');
    en_id_li.lastElementChild.color='white';
    
    
    if(i_en_id_li==0){
        en_id_li.classList.add('clolr');
    en_id_li.firstChild.classList.add('text_hoverglow');
    en_id_li.lastElementChild.color='white';
        en_id_li.lastElementChild.classList.remove('d-lg-none');
        en_id_li.lastElementChild.classList.add('d-lg-block');
        i_en_id_li=1;
        
        logo_c.classList.add('rotate30');
    }else{
        en_id_li.classList.remove('clolr');
    en_id_li.firstChild.classList.remove('text_hoverglow');
    en_id_li.lastElementChild.color='white';
        en_id_li.lastElementChild.classList.add('d-lg-none');
        en_id_li.lastElementChild.classList.remove('d-lg-block');
        i_en_id_li=0;
        logo_c.classList.remove('rotate30');
    }
    // 
    if (i_company_ld_li === 1) {
        company_ld_li.classList.remove('clolr');
        company_ld_li.firstChild.classList.remove('text_hoverglow');
            company_ld_li.lastElementChild.classList.add('d-lg-none');
            company_ld_li.lastElementChild.classList.remove('d-lg-block');
            i_company_ld_li = 0;
            logo_b.classList.remove('rotate30');
        }

        if(i_product_li_id==1){
            product_li_id.lastElementChild.color='white';
        product_li_id.classList.remove('clolr');
        product_li_id.firstChild.classList.remove('text_hoverglow');


        product_li_id.lastElementChild.classList.add('d-lg-none')
        product_li_id.lastElementChild.classList.remove('d-lg-block');
        i_product_li_id=0;
        logo_a.classList.remove('rotate30');
        }
        



    // 
    event.stopPropagation();
    
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

// api_data

const cardData=[
    {

     img:"backimg",
     profile:"data:image/webp;base64,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",
     namea:"Elon marks",
     datee:"July 5,2024",
     description:"Unveiling the Power of Sitemaps in Modern SEO Strategies",
     view:252,
     like:200,
     share:45,
     Comment:56
    },
    {

        img:"backimg2",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsCEU9eYXTS2duDOM3n89Ath2zQ3JBiwSHg&s",
        namea:"Meryl Streep",
        datee:"sept 9,2024",
        description:"Unveiling the Power of Sitemaps in Modern SEO Strategies",
        view:300,
        like:232,
        share:52,
        Comment:19
       },
       {

        img:"backimg3",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01OuxiZuFvSOatyKSGFzgaMrHbzhrbrbV-w&s",
        namea:"Jennifer Lawrence",
        datee:"July 5,2024",
        description:"Unveiling the Power of Sitemaps in Modern SEO Strategies",
        view:400,
        like:125,
        share:12,
        Comment:78
       },
       
       {

        img:"backimg4",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnR-Ozq1AQmfUyxenGRv8yoYrBuh9ijxPRiw&s",
        namea:"Emma Stone",
        datee:"July 5,2024",
        description:"Unveiling the Power of Sitemaps in Modern SEO Strategies",
        view:100,
        like:396,
        share:45,
        Comment:36
       },
       
       {

        img:"backimg5",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvwdYPvSn-fd4unnIn1N-hSmHfbInj62U5Q&s",
        namea:"Angelina Jolie",
        datee:"July 5,2024",
        description:"Unveiling the Power of Sitemaps in Modern SEO Strategies",
        view:125,
        like:120,
        share:85,
        Comment:39
       },
       
       {

        img:"backimg6",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrTH7WWKoBvrnkv1b131bnoS54DwNyxoTKg&s",
        namea:"Natalie Portman",
        datee:"July 5,2024",
        description:"Unveiling the Power of Sitemaps in Modern SEO Strategies",
        view:325,
        like:125,
        share:78,
        Comment:32
       },
       
       {

        img:"backimg7",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8m3e50nuovuGGSZQr4i-vPTIE_kyuKGAlQ&s",
        namea:"Margot Robbie",
        datee:"July 5,2024",
        description:"Unveiling the Power of Sitemaps in Modern SEO Strategies",
        view:895,
        like:156,
        share:39,
        Comment:61
       },
       
       {

        img:"backimg8",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkv33lzOdknmrDEzm9exoBsCIW2ou6A_om6A&s",
        namea:"Anne Hathaway",
        datee:"July 5,2024",
        description:"Unveiling the Power of Sitemaps in Modern SEO Strategies",
        view:365,
        like:125,
        share:"0"+2,
        Comment:26
       },
       
       {

        img:"backimg9",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbk7S3UW4naEeDq28X458QDQxqsiSGpKnOw&s",
        namea:"Charlize Theron",
        datee:"July 5,2024",
        description:"Unveiling the Power of Sitemaps in Modern SEO Strategies",
        view:458,
        like:652,
        share:39,
        Comment:37
       },
       
       {

        img:"backimg10",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GORyWCuyoaR-lMdHdQja7P4YCVTCyNy-lQ&s",
        namea:"Julia Roberts",
        datee:"July 5,2024",
        description:"Unveiling the Power of Sitemaps in Modern SEO Strategies",
        view:123,
        like:154,
        share:58,
        Comment:12
       },
       
    
      
       
       
    
    
    

]






// card coding start here


const cardContainer=document.getElementById('cardContainer');


let showcardcalss;

const seleIDforknow=document.getElementById("seleIDforknow");



seleIDforknow.addEventListener("change",()=>{
    sortcart()
}

)

let  cardDataas=[...cardData];







// cart short ??
function sortcart(){
    cardDataas=[...cardData];
    if(seleIDforknow.value=="mostliked"){
        cardDataas.sort((a,b)=>b.like-a.like)

    }else if(seleIDforknow.value=="mostviewed"){
        cardDataas.sort((a,b)=>b.view-a.view)
    }else if(seleIDforknow.value=="mostcomment"){
        cardDataas.sort((a,b)=>b.Comment-a.Comment)
    }else if(seleIDforknow.value=="mostshare"){
        cardDataas.sort((a,b)=>b.share-a.share)
        
    }
    runmapcard()
    showr_INNERHTML();
    

}
function runmapcard(){
    showcardcalss=cardDataas.map((val)=>{
        return(
            
        `<div class="boxsizeForCaerd">
                    <div class="content_box_wraper ">
                      <div class="top_img_cboox ${val.img} pt-4 ">
                        <div class="d-flex justify-content-end pe-3">
                          <a href="#" class="text-decoration-none text-white py-1 px-2 rounded-3 ">Form Expert</a>
                        </div>
                      </div>
        
                      <div class="bottom_img_cboox">
                        <div class="bottom_img_cboox_r1 d-flex my-2">
                          <img src="${val.profile}" height="40px" width="40px" alt="" class="m-1 ms-4 rounded-5" />
                          <span class="px-3">
                              <p class="mb-0 fw-bolder texthover_color_change">${val.namea}</p>
                              <p class="mb-0">${val.datee}</p>
                          </span>
        
                        </div>
                        <div class="bottom_img_cboox_r2 text-start px-4 ">
                          <p class=" fw-bolder texthover_color_change">
                            Unveiling the Power of Sitemaps in Modern SEO Strategies
                          </p>
                        </div>
                        <div class="bottom_img_cboox_r3 d-flex justify-content-between px-2">
                          <span class=""><i class="fa-solid fa-eye  m-2 "></i> ${val.view}</span>
                          <span class=""><i class="fa-regular fa-thumbs-up  m-2 "></i>${val.like}</span>
                          <span class=""><i class="fa-solid fa-share  m-2 "></i>${val.share}</span>
                          <span class=""><i class="fa-regular fa-comment m-2  "></i>${val.Comment}</span>
                        </div>
        
        
        
        
        
        
                      </div>
        
        
        
        
                    </div>
                  </div>`
        
        
        
        
        
        
        )
        
        
        }).join('')
}

// cart short ??










function showr_INNERHTML(){
    cardContainer.innerHTML=`${showcardcalss}`
}

runmapcard()
showr_INNERHTML()
console.log(cardData.length)
console.log(showcardcalss)