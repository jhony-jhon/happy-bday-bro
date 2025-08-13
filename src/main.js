import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animação de entrada das fotos
const fotos = document.querySelectorAll(".foto");
fotos.forEach((foto, i) => {
  gsap.to(foto, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: i * 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: foto,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});
