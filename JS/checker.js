const firstclick = document.getElementById("clickfor6th");
const fistp = document.getElementById("clickfor6th_p");
//
const imgfirst = document.getElementById("imgscr");
//
const firstclick2 = document.getElementById("clickfor6th2");
const fistp2 = document.getElementById("clickfor6th_p2");
//
const firstclick3 = document.getElementById("clickfor6th3");
const fistp3 = document.getElementById("clickfor6th_p3");
//
const firstclick4 = document.getElementById("clickfor6th4");
const fistp4 = document.getElementById("clickfor6th_p4");
//
const firstclick5 = document.getElementById("clickfor6th5");
const fistp5 = document.getElementById("clickfor6th_p5");
const pclickBox = document.querySelectorAll(".click_wrpaer");

//

firstclick.addEventListener("click", () => {
  addblock(fistp);
  adddd(fistp2, fistp3, fistp4, fistp5);
  imgfirst.src = "../IMG/seo3.jpg";
});

firstclick2.addEventListener("click", () => {
  addblock(fistp2);
  adddd(fistp, fistp3, fistp4, fistp5);
  imgfirst.src = "../IMG/seo2.jpg";
});

firstclick3.addEventListener("click", () => {
  addblock(fistp3);
  adddd(fistp, fistp2, fistp4, fistp5);
  imgfirst.src = "../IMG/seo4.jpg";
});

firstclick4.addEventListener("click", () => {
  addblock(fistp4);
  adddd(fistp, fistp2, fistp3, fistp5);
  imgfirst.src = "../IMG/seo5.jpg";
});
firstclick5.addEventListener("click", () => {
  addblock(fistp5);
  adddd(fistp, fistp2, fistp3, fistp4);
  imgfirst.src = "../IMG/seo9.png";
});

// funtons
function adddd(a, b, c, d) {
  c.classList.add("d-none");
  b.classList.add("d-none");
  a.classList.add("d-none");
  d.classList.add("d-none");
  a.parentElement.style.backgroundColor = "white";
  b.parentElement.style.backgroundColor = "white";
  c.parentElement.style.backgroundColor = "white";
  d.parentElement.style.backgroundColor = "white";
}

function addblock(a, b) {
  a.classList.add("d-block");
  a.classList.remove("d-none");
  a.parentElement.style.backgroundColor = "#CAD39C";
}

pclickBox.forEach((a) => {
  a.addEventListener("mouseover", () => {
    a.classList.add("coloraddd");
  });
  a.addEventListener("mouseleave", () => {
    a.classList.remove("coloraddd");
  });
});
// 2nd part start 

const imgen22=document.getElementById('imgscrhellow');

const p2firstclick=document.getElementById('clickfor6thhellow');
const p2paragarap=document.getElementById('clickfor6th_hellow');
//
const p22firstclick=document.getElementById('clickfor6th2hellow');
const p22paragraph=document.getElementById('clickfor6th_p2hwllow');
//
const p23firstclick=document.getElementById('clickfor6th3hellow');
const p23paragraptclick=document.getElementById('clickfor6th_p3hwllow');
//

const p24firstclick=document.getElementById('clickfor6th4hwllow');
const p24paragraph=document.getElementById('clickfor6th_p4hwllow');

//
const p25firstclick=document.getElementById('clickfor6th5hwllow');
const p25firstpagr=document.getElementById('clickfor6th_p5hwllow');
/////
p2firstclick.addEventListener("click", () => {
    addblock(p2paragarap);
    adddd(p22paragraph, p23paragraptclick, p24paragraph, p25firstpagr);
    imgen22.src = "../IMG/seo3.jpg";
  });
  
  p22firstclick.addEventListener("click", () => {
    addblock(p22paragraph);
    adddd(p2paragarap, p23paragraptclick, p24paragraph, p25firstpagr);
    imgen22.src = "../IMG/seo2.jpg";
  });
  
  p23firstclick.addEventListener("click", () => {
    addblock(p23paragraptclick);
    adddd(p2paragarap, p22paragraph, p24paragraph, p25firstpagr);
    imgen22.src = "../IMG/seo4.jpg";
  });
  
  p24firstclick.addEventListener("click", () => {
    addblock(p24paragraph);
    adddd(p2paragarap, p22paragraph, p23paragraptclick, p25firstpagr);
    imgen22.src = "../IMG/seo5.jpg";
  });
  p25firstclick.addEventListener("click", () => {
    addblock(p25firstpagr);
    adddd(p2paragarap, p22paragraph, p23paragraptclick, p24paragraph);
    imgen22.src = "../IMG/seo9.png";
  });
  // start here 
  const divclick=document.getElementsByClassName('curs');
  divclick[0].addEventListener('click',()=>{
    divclick[0].children[1].classList.toggle('fa-angle-down')
    divclick[0].children[1].classList.toggle('fa-angle-up')
    divclick[0].parentElement.classList.toggle('hoevercadd')

  })

  // for(i=0; i<divclick.length; i++){
  //   divclick[i].addEventListener('click',()=>{
  //     divclick[i].children[1].classList.toggle('fa-angle-down')
  //     divclick[i].children[1].classList.toggle('fa-angle-up')
  //   })
  // }

   divclick[1].addEventListener('click',()=>{
    divclick[1].children[1].classList.toggle('fa-angle-down')
    divclick[1].children[1].classList.toggle('fa-angle-up')
    divclick[1].parentElement.classList.toggle('hoevercadd')
  })
 divclick[2].addEventListener('click',()=>{
    divclick[2].children[1].classList.toggle('fa-angle-down')
    divclick[2].children[1].classList.toggle('fa-angle-up')
    divclick[2].parentElement.classList.toggle('hoevercadd')

  })
 divclick[3].addEventListener('click',()=>{
    divclick[3].children[1].classList.toggle('fa-angle-down')
    divclick[3].children[1].classList.toggle('fa-angle-up')
    divclick[3].parentElement.classList.toggle('hoevercadd')

  })
 divclick[4].addEventListener('click',()=>{
    divclick[4].children[1].classList.toggle('fa-angle-down')
    divclick[4].children[1].classList.toggle('fa-angle-up')
    divclick[4].parentElement.classList.toggle('hoevercadd')

  })
