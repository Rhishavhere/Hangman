gsap.from(".load-text", {
  opacity: 0.3,
  duration: 1.2,
  repeat: Infinity,
  ease: "bounce.in",
  yoyo: true
})
var tl = gsap.timeline();
tl.to("#loader", {
  opacity: 0,
  scale: 3,
  duration: 1,
  delay: 1.2,
  display: "none"
})
tl.from(".footer", {
  y: 300,
  duration: 0.5
})
tl.from("#ceiling-img", {
  y: -200,
  duration: 0.5
})
tl.from("#hangmans-img", {
  opacity: 0,
  y: -200,
  ease: "elastic.out(1,0.3)",
  duration: 1
})
tl.from(".title", {
  scale: 0,
  duration: 1,
  ease: "elastic.out(1.5,0.3)"
})
tl.from("#in", {
  y: 10,
  opacity: 0,
  duration: 0.5
}).call(noloader);
function noloader() {
  const loader = document.querySelector("#loader")
  loader.style.display = "none"
}

const footer = document.querySelector(".footer")
const width = footer.clientWidth / 6;

gsap.to("#land-img", {
  x: -width,
  duration: 5,
  ease: "power2.out",
  repeat: -1,
  yoyo: true
})




