export const social=()=>{ 
  gsap.to(".social__tittle",{
    scrollTrigger:{
    trigger:".social__tittle",
    toggleActions:"restart none none none"},
    x:0,
    opacity:1,
    duration:0.5,
  });
  gsap.to(".social__container",{
    scrollTrigger:{
    trigger:".social__container",
  toggleActions:"restart none none none"},
    x:0,
    opacity:1,
    duration:0.5,
  });


const circles = document.querySelectorAll('.circle1');
for (const circle of circles){
gsap.to(circle,{rotation:360, repeat:-1, duration:2});
}}