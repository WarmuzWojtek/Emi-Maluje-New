export const gallery=()=>{ 
  gsap.to(".gallery__tittle",{
    scrollTrigger:{
    trigger:".gallery__tittle",
    start:"top 80%",
    end:"top top",
    toggleActions:"restart pause pause reverse"},
    x:0,
    opacity:1,
    duration:0.5,
  });
};