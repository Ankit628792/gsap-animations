const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
    lenis.raf(time * 600)
})
gsap.ticker.lagSmoothing(0)


let initialPath = `M 10 200 Q 600 200 1200 200`
let finalPath = `M 10 200 Q 600 200 1200 200`
let stringPath = document.querySelector(".string");
let cursor = document.getElementById("cursor");
let main = document.getElementById("main");

gsap.to(".string path", {
    attr: {
        d: `M 10 200 Q 600 200 1200 200`
    },
    duration: 3,
    ease: "power4.in"
})

stringPath.addEventListener("mousemove", function (el) {
    initialPath = `M 10 200 Q ${el.x} ${el.y} 1200 200`
    gsap.to(".string path", {
        attr: {
            d: initialPath
        },
        duration: 0.5,
        ease: "power4.out"
    })
})

main.addEventListener("mousemove", function (el) {
    gsap.to(cursor, {
        x: el.x,
        y: el.y,
        ease: "power4.out"
    })
})

stringPath.addEventListener("mouseleave", function () {
    gsap.to(".string path", {
        attr: {
            d: finalPath
        },
        duration: 1,
        ease: "elastic.out(1.2,0.1)"
    })
})
