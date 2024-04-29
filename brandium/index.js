const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
    lenis.raf(time * 600)
})
gsap.ticker.lagSmoothing(0)


let initialPath = `M 10 120 Q 600 120 1200 120`
let finalPath = `M 10 120 Q 600 120 1200 120`
let stringPath = document.querySelector(".string");
let cursor = document.getElementById("cursor");
let main = document.getElementById("main");
let menu = document.querySelector(".menu");
let menuIcon = document.querySelector(".menuIcon");
let scrollAmountContainer = document.querySelector(".scrollAmountContainer")
var isMenuActive = false;

gsap.to(".scrollAmount", {
    height: '100%',
    scrollTrigger: {
        trigger: main,
        start: "110% bottom",
        end: main.scrollHeight - 600,
        scrub: 1.2,
    }
})

gsap.from("header h1", {
    x: -200,
    opacity: 0,
    stagger: 0.4,
    ease: "power4.out"
})


main.addEventListener("mousemove", function (el) {
    gsap.to(cursor, {
        x: el.x,
        y: el.y,
        ease: "power4.out"
    })
})

scrollAmountContainer.addEventListener("mouseleave", function (el) {
    gsap.to(".scrollAmountContainer div", {
        x: 0,
        y: 0,
        ease: "power4.out"
    })
})

menu.addEventListener("mouseenter", function (el) {
    gsap.to(cursor, {
        // background: "transparent",
        scale: 2,
        ease: "power4.out"
    })
})
menu.addEventListener("mouseleave", function (el) {
    console.log("first")
    gsap.to(cursor, {
        background: "white",
        scale: 1,
        ease: "power4.out"
    })
})

let navTl = gsap.timeline({
    paused: true,
})

navTl.to(menu, {
    opacity: 0,
})

navTl.to(".full__screen__nav", {
    right: 0,
})
navTl.from(".full__screen__nav .menuTitle", {
    opacity: 0,
})
navTl.to(".full__screen__nav .bar", {
    width: '100%',
    onComplete: () => { isMenuActive = true; menuIcon.innerHTML = `<i class="ri-close-large-line"></i>` },
    onReverseComplete: () => { isMenuActive = false; menuIcon.innerHTML = `<i class="ri-menu-3-line"></i>` },
})

navTl.from(".full__screen__nav h1", {
    y: 100,
    rotate: 60,
    stagger: 0.08,
})

navTl.to(menu, {
    opacity: 1,
})

menu.addEventListener("click", function () {
    if (isMenuActive) {
        navTl.reverse();
    } else {
        navTl.play();

    }
})

gsap.to(".string path", {
    attr: {
        d: `M 10 120 Q 600 120 1200 120`
    },
    duration: 3,
    ease: "power4.in"
})

stringPath.addEventListener("mousemove", function (el) {
    initialPath = `M 10 120 Q ${el.x - 120} ${Math.min(340, el.y - 120)} 1200 120`
    gsap.to(".string path", {
        attr: {
            d: initialPath
        },
        duration: 0.5,
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
