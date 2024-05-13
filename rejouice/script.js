function splitText(selector, letter) {
    let oldText = document.querySelectorAll(selector);
    oldText.forEach((el, i) => {
        let newText = '';
        el.textContent.split(letter ? "" : " ").forEach((el, i) => {
            if (el.trim())
                newText = newText + `<span class="inline-block ${i}">${el}</span>` + (letter ? "" : " ")
        })

        el.innerHTML = newText;
    })
}

function headerAnimation() {

    let cursor = document.querySelector("header #cursor");
    let header = document.querySelector("#header");

    let { width, height } = cursor.getBoundingClientRect();
    header.addEventListener("mousemove", (el) => {
        gsap.to(cursor, {
            scale: 1,
            display: 'flex'
        })
        cursor.style.left = el.x - (width / 2) + "px";
        cursor.style.top = el.y - (height / 2) + "px";
    })
    header.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 0,
            display: 'none'
        })
    });

    document.querySelector(".page2").addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 0,
            display: 'none'
        })
    })

    let tl = gsap.timeline();

    splitText(".loader h2");
    splitText(".heading", true);

    tl.from(".loader h2 span", {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        delay: 0.2,
        ease: "power2.out"
    })

    tl.to(".loader", {
        y: '-100%',
        duration: 1,
        ease: "power2.out",
        delay: 0.5
    })

    tl.from("nav", {
        opacity: 0,
        duration: 1.5,
        delay: 0.5
    })

    tl.from("header .heading span", {
        y: 200,
        opacity: 0,
        stagger: 0.06,
        delay: -0.05,
        ease: "power2.out"
    })


    cursor.addEventListener("click", () => {
        gsap.to('.reel', {
            x: 0,
            duration: 1,
            ease: "power4.out"
        })
    })

    document.querySelector(".book__seat").addEventListener("click", () => {
        gsap.to('.seat', {
            x: 0,
            duration: 1,
            ease: "power4.out"
        })
    })
    document.querySelector(".take_seat").addEventListener("click", () => {
        gsap.to('.seat', {
            x: 0,
            duration: 1,
            ease: "power4.out"
        })
    })
    document.querySelector(".menu").addEventListener("click", () => {
        gsap.to('.navbar', {
            y: 0,
            duration: 1,
            ease: "power4.out"
        })
    })

    document.querySelector(".reel .close").addEventListener("click", () => {
        gsap.to('.reel', {
            x: "-100%",
            duration: 1,
            ease: "power4.out"
        })
    })
    document.querySelector(".seat .close").addEventListener("click", () => {
        gsap.to('.seat', {
            x: "-100%",
            duration: 1,
            ease: "power4.out"
        })
    })
    document.querySelector(".navbar .close").addEventListener("click", () => {
        gsap.to('.navbar', {
            y: "-100%",
            duration: 1,
            ease: "power4.out"
        })
    })
}

function textAnimation() {
    let textContainers = document.querySelectorAll(".text__content")
    textContainers.forEach((el, i) => {
        let h1 = el.querySelector("h1")

        splitText(".text__content h1");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                scroller: "main",
                start: "top 50%",
                end: "bottom 50%",
                toggleActions: "restart none none reverse"
            }
        })
        if (h1)
            tl.to(h1, {
                transform: "translateY(0)",
                opacity: 1,
                ease: "power2.out",
            })
    })
}

textAnimation()

headerAnimation()

gsap.from("footer .heading span", {
    y: -200,
    opacity: 0,
    stagger: 0.06,
    delay: -0.05,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "footer",
        scroller: "main",
        start: "top 30%",
        end: "top 40%",
        toggleActions: "restart none none reverse"
    }
})

