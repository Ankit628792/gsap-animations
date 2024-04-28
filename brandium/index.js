const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
    lenis.raf(time * 600)
})
gsap.ticker.lagSmoothing(0)


gsap.registerPlugin(MotionPathPlugin);

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

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".svg__container",
        scrub: 1.5,
        start: "top 0%",
        end: "60% 0%",
        markers: true,
        // pin: true
    },
})

tl.to(".svg__container .heart", {
    scale: 1,
    transformOrigin: "bottom center"
}, 'svg')

tl.to(".svg__container .fan", {
    rotate: 780,
    scale: 1,
}, 'svg')

tl.to(".svg__container .goovy", {
    scale: 1
}, 'svg')
tl.to(".svg__container .complete", {
    text: "I am Ankit Kumar",
}, 'svg')

tl.to(".svg__container .scrollLine .scrollLineBall", {
    motionPath: {
        path: ".scrollLinePath",
        align: ".scrollLinePath",
        start: 0,
        end: 1
    },
}, 'svg')


//replaces yourElement's text with "This is the new text" 
gsap.to(".typewriter", {
    duration: 2,
    text: "I am Ankit Kumar",
    delay: 3,
    // padSpace: true,
    // preserveSpaces: true,
    // delimiter: " ",
    ease: "none",
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
});

const startBall = 1;
const endBall = 0;


gsap.set(".ball", {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "50%, 50%",
})

gsap.from(".ball", {
    opacity: 0,
    delay: 1
})

gsap.to(".ball", {
    duration: 10,
    delay: 0.5,
    motionPath: {
        path: ".loop",
        align: ".loop",
        start: endBall,
        end: startBall
    },
    repeat: -1,
    yoyo: true
})


document.querySelectorAll(".cursor-image").forEach(el => el.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
        scale: 4,
        duration: 0.5,
        mixBlendMode: 'difference',
        ease: "power4.out"
    })
}))
document.querySelectorAll(".cursor-image").forEach(el => el.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        mixBlendMode: 'none',
        ease: "power4.out"
    })
}))