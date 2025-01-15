let seletopt=0;


const seleforpalan=document.getElementById('seleforpalan');

seleforpalan.addEventListener("change",()=>{
    seletopt=seleforpalan.value;
    console.log(seletopt);
    runPriceanimation()
})

const single_proudn343443=document.getElementById('single_proudn343443');
const bundle_product343=document.getElementById('bundle_product343');
// clickcd
const single_proudn343443_click=document.getElementById('single_proudn343443_click');
const bundle_product343_click=document.getElementById('bundle_product343_click');



single_proudn343443_click.addEventListener('click',()=>{
    single_proudn343443.classList.remove("d-none");
    bundle_product343.classList.add('d-none');
    // button 
    // add 
    single_proudn343443_click.classList.add("bg_dffd4563white");
    bundle_product343_click.classList.add("bg_dfere344");
    // remove 
    single_proudn343443_click.classList.remove("bg_dfere344");
    bundle_product343_click.classList.remove("bg_dffd4563white");
    console.log('sing')
   });
bundle_product343_click.addEventListener('click',()=>{
    single_proudn343443.classList.add("d-none");
    bundle_product343.classList.remove("d-none");
    // button 
   // button 
   // add
   single_proudn343443_click.classList.add("bg_dfere344");
   bundle_product343_click.classList.add("bg_dffd4563white");
   // remove 
   single_proudn343443_click.classList.remove("bg_dffd4563white");
   bundle_product343_click.classList.remove("bg_dfere344");
   
   console.log('bundle')

   
   });

//boundle_show
// click area 
const monthlySelect=document.getElementById('monthlySelect');
const yearlySelect=document.getElementById('yearlySelect');
const lifeTimeselect=document.getElementById('lifeTimeselect');
//show area
const monthlyshow=document.getElementById('monthlyshow');
const yearlyshow=document.getElementById('yearlyshow');
const lifetimeshow=document.getElementById('lifetimeshow');
const highLight=document.querySelector(".highligharea_red")






monthlySelect.addEventListener("click",()=>{
    runPriceanimation()
    monthlyshow.classList.remove('d-none');
    yearlyshow.classList.add('d-none');
    lifetimeshow.classList.add('d-none');
    // 
    monthlySelect.classList.add('bg_2332danger');
    yearlySelect.classList.remove('bg_2332danger');
    lifeTimeselect.classList.remove('bg_2332danger');
    // 
    highLight.style.left=`calc(100%/3*${0})`;



})


yearlySelect.addEventListener("click",()=>{
    runPriceanimation()
    monthlyshow.classList.add('d-none');
    yearlyshow.classList.remove('d-none');
    lifetimeshow.classList.add('d-none');
    //
    monthlySelect.classList.remove('bg_2332danger');
    yearlySelect.classList.add('bg_2332danger');
    lifeTimeselect.classList.remove('bg_2332danger');
    //
     highLight.style.left=`calc(100%/3*${1})`

})

lifeTimeselect.addEventListener("click",()=>{
    runPriceanimation()
    monthlyshow.classList.add('d-none');
    yearlyshow.classList.add('d-none');
    lifetimeshow.classList.remove('d-none');
    //
    monthlySelect.classList.remove('bg_2332danger');
    yearlySelect.classList.remove('bg_2332danger');
    lifeTimeselect.classList.add('bg_2332danger');
    //
     highLight.style.left=`calc(100%/3*${2})`


})
// faq 
const clickfaq_area=document.querySelectorAll(".faqw34");
const showhide=document.querySelectorAll(".showhide5454");
const arrowicon=document.querySelectorAll(".arrow_class");

for(let i=0; i<=clickfaq_area.length;i++){
    faqcontetn(clickfaq_area[i],showhide[i],arrowicon[i]);
}
//
// sele_plan


function runPriceanimation(){
    const allpricefild=document.querySelectorAll(".pricesele_formy");
    allpricefild.forEach((val)=>{
        let tergetval=+val.getAttribute('data-c-price');    
            tergetval=tergetval*seletopt

        const increamentval=tergetval/50;
       
        let currentval=0;
        
        updateval();
        function bcsaf(){
            requestAnimationFrame(updateval)
        }
        function updateval(){
            currentval+=increamentval;
            if(currentval<tergetval){
                val.innerHTML=Math.floor(currentval)
                
                bcsaf()
            }else{
                val.innerHTML=Math.floor(tergetval);

            }

        }
        


    })
}








////function for faq
function faqcontetn(click,forcals,acpi){
    click.addEventListener("click",()=>{
        forcals.classList.toggle('d-none');
        click.classList.toggle('addhovercollor');
        acpi.classList.toggle('fa-angle-up');
        acpi.classList.toggle('fa-angle-down');

    })   
}