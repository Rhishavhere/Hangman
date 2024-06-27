// gsap.from(".load-text",{
//   opacity:0.3,
//   duration:1.2,
//   repeat: Infinity,
//   ease:"bounce.in",
//   yoyo:true
// })
// var tl= gsap.timeline();
// tl.to("#loader",{
//   opacity:0,
//   scale:3,
//   duration:1,
//   delay:2.5,
//   display:"none"
// })
// tl.from(".footer",{
//   y:300,
//   duration:0.5
// })
// tl.from("#ceiling-img",{
//   y:-200,
//   duration:0.5
// })
// tl.from("#hangmans-img",{
//   opacity:0,
//   y:-200,
//   duration:1
// })
// tl.from(".title",{
//   scale:0,
//   duration:1,
//   ease: "elastic.out(1,0.3)"
// })
// tl.from( "#in",{
//   y:10,
//   opacity:0,
//   duration:0.5
// }).call(noloader);
// function noloader(){
//   const loader=document.querySelector("#loader")
//   loader.style.display="none"
// }
gameload()
function gameload(){
  gsap.to("#hangmans-img",{
    y:-600,
    duration:0.5
  })
  gsap.to("#ceiling-img",{
    y:-20,
    duration:0.5
  })
  gsap.to(".footer",{
    y:50,
    duration:0.5
  })
  gsap.to(".footer div",{
    y:-40,
    duration:0.5
  })
  gsap.to(".header",{
    y:-90,
    duration:0.5
  })
  gsap.to(".start",{
    opacity:0,
    duration:0.5
  })
  gsap.to(".intro",{
    opacity:0,
    duration:0.5
  })
  gsap.to(".title",{
    opacity:0,
    duration:0
  })
  gsap.to(".title",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    display:"none"
  })
  gsap.to(".intro",{display:"none",delay:0.5})
  gsap.to(".title",{display:"none"})

  gsap.to(".game-main",{
    duration:0.5,
    delay:0.5,
    display:"flex"
  })
}
