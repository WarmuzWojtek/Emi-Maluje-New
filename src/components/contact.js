export const contact=()=>{ 
  gsap.to(".contact__tittle",{
    scrollTrigger:{
    trigger:".contact__tittle",
    start:"top 80%",
    end:"top top",
    toggleActions:"restart pause pause reverse"},
    x:0,
    opacity:1,
    duration:0.5,
  });
  gsap.to(".contact__content",{
    scrollTrigger:{
    trigger:".contact__content",
    start:"top 80%",
    end:"top top",
  toggleActions:"restart pause pause reverse"},
    x:0,
    opacity:1,
    duration:0.5,
  });
  gsap.to(".contact__imgContainer",{
    scrollTrigger:{
    trigger:".contact__imgContainer",
    start:"top 80%",
    end:"top top",
  toggleActions:"restart pause pause reverse"},
    opacity:1,
    duration:2.5,
  });
};