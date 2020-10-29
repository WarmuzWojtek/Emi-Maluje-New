
export const bigAnime = ()=>{
  const big = document.querySelector(".header__imgBigContainer");
  const small = document.querySelector(".header__imgSmallContainer");
  const tittle1 = document.querySelector(".header__tittle1");
  const tittle2 = document.querySelector(".header__tittle2");
  const headerBtn = document.querySelector(".header__button");
  const navi = document.querySelector('.navi');
  const naviCloseBtn = document.querySelector('.navi__close');
  const naviItemCover = document.querySelectorAll('.navi__listElement-cover');
  
  gsap.set(tittle1, {x: "-95vw"});
  gsap.set(tittle2, {opacity: 0});
  gsap.set(headerBtn, {opacity: 0});
  gsap.to(big, {x:'10vw', duration:30,repeat: -1, yoyo: true , ease:'none'}); 
  gsap.to(small, {x:'-40vw', duration:30, yoyo:true , repeat: -1 , ease:'none'}); 
  gsap.to(tittle1, {x:'5vw', duration:2});
  gsap.to(tittle2, {opacity:1, duration:3, delay:2});
  gsap.to(headerBtn, {opacity:1, duration:3, delay:4});

  headerBtn.addEventListener('click', ()=>{
  navi.style.transform="translateX(0)";
  gsap.to('.navi__listElement-cover',{x:'-100%', duration:0.5,ease:Power0,stagger:0.5});
   
  });
  naviCloseBtn.addEventListener('click', ()=>{
    navi.style.transform="translateX(-100vw)";
    gsap.to('.navi__listElement-cover',{x:0, duration:0.1,ease:Power0});

  })

}

