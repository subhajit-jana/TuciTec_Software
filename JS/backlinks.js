const click=document.querySelectorAll('.clickforthis');
click[0].addEventListener('click',()=>{
    
    click[0].children[1].classList.toggle('fa-angle-up');
    click[0].children[1].classList.toggle('fa-angle-down');
    click[0].parentElement.classList.toggle('clickcolorchane')
})
click[1].addEventListener('click',()=>{
    
    click[1].children[1].classList.toggle('fa-angle-up');
    click[1].children[1].classList.toggle('fa-angle-down');
    click[1].parentElement.classList.toggle('clickcolorchane')
})
click[2].addEventListener('click',()=>{
    
    click[2].children[1].classList.toggle('fa-angle-up');
    click[2].children[1].classList.toggle('fa-angle-down');
    click[2].parentElement.classList.toggle('clickcolorchane')
})
click[3].addEventListener('click',()=>{
    
    click[3].children[1].classList.toggle('fa-angle-up');
    click[3].children[1].classList.toggle('fa-angle-down');
    click[3].parentElement.classList.toggle('clickcolorchane')
})
// new 
click[0].addEventListener('mouseover',()=>{
    click[0].parentElement.classList.add('clickcolorchaneforhkover')
})

click[0].addEventListener('mouseleave',()=>{
    click[0].parentElement.classList.remove('clickcolorchaneforhkover')
})

click[1].addEventListener('mouseover',()=>{
    click[1].parentElement.classList.add('clickcolorchaneforhkover')
})

click[1].addEventListener('mouseleave',()=>{
    click[1].parentElement.classList.remove('clickcolorchaneforhkover')
})

click[2].addEventListener('mouseover',()=>{
    click[2].parentElement.classList.add('clickcolorchaneforhkover')
})

click[2].addEventListener('mouseleave',()=>{
    click[2].parentElement.classList.remove('clickcolorchaneforhkover')
})

click[3].addEventListener('mouseover',()=>{
    click[3].parentElement.classList.add('clickcolorchaneforhkover')
})

click[3].addEventListener('mouseleave',()=>{
    click[3].parentElement.classList.remove('clickcolorchaneforhkover')
})
