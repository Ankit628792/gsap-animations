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
        ease: "power4.out",
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

window.addEventListener("wheel", function (el) {
    if (el.deltaY > 0) {
        gsap.to(".marque__container .marque__div", {
            transform: "translateX(-40%)",
            duration: 4,
            repeat: -1,
            ease: 'none'
        })
        gsap.to(".marque__container .marque img", {
            rotate: 180
        })
    }
    else {
        gsap.to(".marque__container .marque__div", {
            transform: "translateX(40%)",
            duration: 4,
            repeat: -1,
            ease: 'none'
        })
        gsap.to(".marque__container .marque img", {
            rotate: 0
        })
    }
})

function animateWords() {
    let wordContainers = document.querySelectorAll(".animateWords");
    wordContainers.forEach(async (wordContainer, idx) => {
        let words = wordContainer.textContent.split(" ");
        let finalWords = ""
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (word?.trim())
                finalWords += `<div class="h-full overflow-hidden inline-block"><span class="word${idx} inline-block">${word}&nbsp;</span></div>`;
        }
        wordContainer.innerHTML = finalWords;
        gsap.from(`.animateWords .word${idx}`, {
            y: 40,
            opacity: 0,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: wordContainer,
                start: "top 70%",
                toggleActions: 'restart none none reset'
            }
        })
    })

}

animateWords()


let newsList = document.querySelectorAll(".news_wrapper")

newsList.forEach((news, idx) => {
    news.addEventListener("mousemove", (el) => {
        gsap.to(news.querySelector(".news_img"), {
            width: "100%",
            x: el.x,
            y: el.y,
            top: -300,
            left: -300,
            ease: "power4.out"
        })

        gsap.to(".news", {
            backgroundColor: idx == 0 ? "rgba(255,215,231,1)" : "rgba(186,196,226,1)"
        })
    })
    news.addEventListener("mouseleave", (el) => {
        gsap.to(news.querySelector(".news_img"), {
            width: "0%",
            x: el.x,
            y: el.y,
            top: 0,
            left: 0,
            ease: "power4.out"
        })
        gsap.to(".news", {
            backgroundColor: "transparent"
        })
    })
})