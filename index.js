gsap.to(".pic", {
  duration: 1,
  opacity: 1,
});

gsap.from(".card", {
  duration: 2,
  scale: 0.5,
  opacity: 0,
  delay: 1.5,
  stagger: 0.2,
  ease: "elastic",
  force3D: true,
});
