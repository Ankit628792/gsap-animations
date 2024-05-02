const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
    lenis.raf(time * 600)
})
gsap.ticker.lagSmoothing(0)

function navAnimation() {

    let menu = document.querySelector(".menu");
    let menuIcon = document.querySelector(".menuIcon");
    var isMenuActive = false;

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
        stagger: 0.05,
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
}

function headerAnimation() {

    let tl = gsap.timeline();

    tl.from("nav h1, nav ul li, .menu", {
        y: -30,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        stagger: 0.1
    })

    tl.from("header .content h1", {
        x: -400,
        opacity: 0,
        duration: 0.5,
    })
    tl.from("header .content p", {
        x: -200,
        opacity: 0,
    })
    tl.from("header .content button", {
        opacity: 0,
    })

    tl.from("header .header_image", {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
    }, "-=1")
}

function sectionHeading(target) {
    let tr = gsap.timeline({
        scrollTrigger: {
            trigger: `${target}`,
            start: "top 60%",
            toggleActions: "play none none reverse"
        }
    })

    tr.from(`${target} h3`, {
        x: -100,
        opacity: 0,
        duration: 0.5,
    })
    tr.from(`${target} p`, {
        opacity: 0,
        duration: 0.5,
    })
}

function servicesAnimation() {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".container",
            start: "top 70%",
            end: "100% 70%",
            scrub: 1.3
        }
    })

    tl.from(".elem.left", {
        x: -300,
        opacity: 0,
        stagger: 0.5,
    }, 'a')

    tl.from(".elem.right", {
        x: 300,
        opacity: 0,
        stagger: 0.5,
        delay: 0.2,
    }, 'a')
}

function caseStudyAnimation() {

    let sTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".case_study",
            start: "top 60%",
            toggleActions: "play none none reverse"
        }
    })

    sTl.from(".studies", {
        background: 'transparent',
        duration: 1,
    })

    sTl.from(".studies p ", {
        y: 100,
        stagger: 0.2,
        opacity: 0,
    }, 'b')
    sTl.from(".studies div div ", {
        y: 200,
        stagger: 0.2,
        delay: 0.2,
        opacity: 0,
    }, 'b')
}

function promoAnimation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".promo",
            start: "top 60%",
            toggleActions: "play none none reverse"
        }
    })

    tl.from(".promo h1", {
        y: 100,
        opacity: 0,
        duration: 0.5,
    })
    tl.from(".promo p", {
        y: 100,
        opacity: 0,
    })
    tl.from(".promo button", {
        opacity: 0,
    })

    tl.from(".promo img", {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
    }, "-=1")
}

navAnimation();
headerAnimation();
gsap.from(".clients img", {
    y: 100,
    stagger: 0.1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".clients",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
})
sectionHeading(".services");
sectionHeading(".case_study");
servicesAnimation();
promoAnimation();
caseStudyAnimation();


