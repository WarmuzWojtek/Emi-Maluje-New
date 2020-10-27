
export const bigAnime = ()=>{
  const big = document.querySelector(".header__imgBigContainer");
  const small = document.querySelector(".header__imgSmallContainer");
  const tittle1 = document.querySelector(".header__tittle1");
  const tittle2 = document.querySelector(".header__tittle2");
  const headerBtn = document.querySelector(".header__button");
  
  gsap.set(tittle1, {x: "-95vw"});
  gsap.set(tittle2, {opacity: 0});
  gsap.set(headerBtn, {opacity: 0});
  gsap.to(big, {x:'10vw', duration:30,repeat: -1, yoyo: true , ease:'none'}); 
  gsap.to(small, {x:'-40vw', duration:30, yoyo:true , repeat: -1 , ease:'none'}); 
  gsap.to(tittle1, {x:'5vw', duration:2});
  gsap.to(tittle2, {opacity:1, duration:3, delay:2});
  gsap.to(headerBtn, {opacity:1, duration:3, delay:4});
}

