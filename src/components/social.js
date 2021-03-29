export const social=()=>{ 
  gsap.to(".social__tittle",{
    scrollTrigger:{
    trigger:".social__tittle",
    start:"top 80%",
    end:"top top",
    toggleActions:"restart pause pause reverse"},
    x:0,
    opacity:1,
    duration:0.5,
  });
  gsap.to(".social__container",{
    scrollTrigger:{
    trigger:".social__container",
    start:"top 80%",
    end:"top top",
  toggleActions:"restart pause pause reverse"},
    x:0,
    opacity:1,
    duration:0.5,
  });
  gsap.to(".social__svgCont",{
    scrollTrigger:{
    trigger:".social__svgCont",
    start:"top 60%",
    end:"top top",
  toggleActions:"restart pause pause reverse"},
    x:"-=60%",
    duration:0.5,
  });
  gsap.to(".social__paragraph",{
    scrollTrigger:{
    trigger:".social__svgCont",
    start:"top 60%",
    end:"top top",
  toggleActions:"restart pause pause reverse"},
    x:"+=30%",
    backgroundColor:"rgba(3, 4, 94, 0.6)",
    duration:0.5,
  });
  gsap.to(".social__svgCont",{
    scrollTrigger:{
    trigger:".social__svgCont",
    start:"top 60%",
    end:"top top",
  toggleActions:"restart pause pause reverse"},
    y:"-=30%",
    backgroundColor: "rgba(0, 150, 199, 0.5)",
    duration:1.5,
  });



const circles = document.querySelectorAll('.circle1');
for (const circle of circles){
gsap.to(circle,{rotation:360, repeat:-1, duration:2});
}}