export const about = ()=>{
  const about = document.querySelector('.about');
  const aboutContainer = document.querySelector('.about__container');
  let aboutContainerStyles = window.getComputedStyle(aboutContainer);
  about.style.height = aboutContainerStyles.getPropertyValue('height');

  const image = document.querySelector('.about__img');
  let currentImage=0;
  const images=["/images/wiosna.jpg","/images/zpilka.jpg","/images/hallo.jpg","/images/kominek.jpg"];
  const imgChange=()=>{    
image.setAttribute("src",images[currentImage]);
if(currentImage<images.length-1){
currentImage++}else{currentImage=0}
gsap.fromTo(image, {opacity: 0}, {opacity:1, duration: 1});
gsap.fromTo(image, {opacity: 1}, {opacity:0, duration: 1, delay:4});
  }

  setInterval(imgChange,5000);

}