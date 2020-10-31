export const social=()=>{ 


const circles = document.querySelectorAll('.circle1');
for (const circle of circles){
gsap.to(circle,{rotation:360, repeat:-1, duration:2});
}}