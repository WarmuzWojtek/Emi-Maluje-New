export const navi=()=>{
const burger = document.querySelector('.header__burger');
const links = document.querySelectorAll(".navi__nav-link");
links.forEach((link, index)=>{
  link.addEventListener('click',(e)=>{
    e.preventDefault();
    burger.innerHTML='<i class="fas fa-bars"></i>';
    gsap.to(window,{duration:1, scrollTo:{y:"#section"+(index+1)}});
    gsap.to('.navi',{x:"-100vw",duration:0.1});
    gsap.to('.navi__listElement-cover',{x:0, duration:0.1,ease:Power0});
  })
  
})
}


