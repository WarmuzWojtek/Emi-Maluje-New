import './sass/index.scss';
import {bigAnime} from "./components/header.js";
import {about} from "./components/about.js";
import {social} from "./components/social.js";
import {gallery} from "./components/gallery.js";
import {contact} from "./components/contact.js";
import {navi} from "./components/navi.js";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


// window.addEventListener('DOMContentLoaded', bigAnime);
window.addEventListener('DOMContentLoaded', about);
// window.addEventListener('DOMContentLoaded', social);
// window.addEventListener('DOMContentLoaded', gallery);
// window.addEventListener('DOMContentLoaded', contact);
// window.addEventListener('DOMContentLoaded', navi);

bigAnime();
// about();
social();
gallery();
contact();
navi();




