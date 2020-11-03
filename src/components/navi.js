export const navi=()=>{
  const section1 = document.querySelector(".navi__nav-link-1");
  const section2 = document.querySelector(".navi__nav-link-2");
  const section3 = document.querySelector(".navi__nav-link-3");
  const section4 = document.querySelector(".navi__nav-link-4");
  const section5 = document.querySelector(".navi__nav-link-5");
  section1.addEventListener('click',(e)=>{
    e.preventDefault();
    const tl = gsap.timeline();
    tl.to(window,{duration:0.1, scrollTo:{y:"#section1"}})
    .to('.navi',{x:"-100vw",duration:0.1})
    .to('.navi__listElement-cover',{x:0, duration:0.1,ease:Power0});
  })
  section2.addEventListener('click',(e)=>{
    e.preventDefault();
    const tl = gsap.timeline();
    tl.to(window,{duration:1, scrollTo:{y:"#section2"}})
    .to('.navi',{x:"-100vw",duration:0.1})
    .to('.navi__listElement-cover',{x:0, duration:0.1,ease:Power0});
  })
  section3.addEventListener('click',(e)=>{
    e.preventDefault();
    const tl = gsap.timeline();
    tl.to(window,{duration:1, scrollTo:{y:"#section3"}})
    .to('.navi',{x:"-100vw",duration:0.1})
    .to('.navi__listElement-cover',{x:0, duration:0.1,ease:Power0});
  })
  section4.addEventListener('click',(e)=>{
    e.preventDefault();
    const tl = gsap.timeline();
    tl.to(window,{duration:1, scrollTo:{y:"#section4"}})
    .to('.navi',{x:"-100vw",duration:0.1})
    .to('.navi__listElement-cover',{x:0, duration:0.1,ease:Power0});
  })
  section5.addEventListener('click',(e)=>{
    e.preventDefault();
    const tl = gsap.timeline();
    tl.to(window,{duration:1, scrollTo:{y:"#section5"}})
    .to('.navi',{x:"-100vw",duration:0.1})
    .to('.navi__listElement-cover',{x:0, duration:0.1,ease:Power0});
  })


// const links = document.querySelectorAll(".navi__nav-link");
// links.forEach((link, index)=>{
//   link.addEventListener('click',(e)=>{
//     e.preventDefault();
//     gsap.to(window,{duration:1, scrollTo:{y:"#section"+index+1}})
//   })
  
// })
}


