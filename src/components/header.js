
export const bigAnime = ()=>{
  const big = document.querySelector(".header__imgBigContainer");
  const small = document.querySelector(".header__imgSmallContainer");
  const tittle1 = document.querySelector(".header__tittle1");
  const tittle2 = document.querySelector(".header__tittle2");
  
  gsap.to(big, {x:'10vw', duration:30,repeat: -1, yoyo: true , ease:'none'}); 
  gsap.to(small, {x:'-40vw', duration:30, yoyo:true , repeat: -1 , ease:'none'}); 
  gsap.to(tittle1, {x:'125vw', duration:2});
  gsap.to(tittle2, {opacity:1, duration:3, delay:2});
}

