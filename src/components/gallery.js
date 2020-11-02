export const gallery=()=>{ 
  gsap.to(".gallery__tittle",{
    scrollTrigger:{
    trigger:".gallery__tittle",
    toggleActions:"restart none none none"},
    x:0,
    opacity:1,
    duration:0.5,
  });
};