export const contact=()=>{ 
  gsap.to(".contact__tittle",{
    scrollTrigger:{
    trigger:".contact__tittle",
    toggleActions:"restart none none none"},
    x:0,
    opacity:1,
    duration:0.5,
  });
  gsap.to(".contact__content",{
    scrollTrigger:{
    trigger:".contact__content",
  toggleActions:"restart none none none"},
    x:0,
    opacity:1,
    duration:0.5,
  });
  gsap.to(".contact__imgContainer",{
    scrollTrigger:{
    trigger:".contact__imgContainer",
  toggleActions:"restart none none none"},
    opacity:1,
    duration:2.5,
  });
};