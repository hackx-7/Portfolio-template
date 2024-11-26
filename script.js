gsap.registerPlugin(ScrollTrigger);

// Initial animations
const linesTl = gsap.timeline();

linesTl.from([".line1", ".line2"], {
    width: "0%",
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.7
})

gsap.from(".banner", {
    opacity: 0,
    duration: 4,
    ease: "power2.out"
});


// Scroll animations
// About section
const aboutTl = gsap.timeline({scrollTrigger: {
    scroller: "body",
    trigger: ".section2 h1",
    start: "top 80%",
    end: "top 80%",
    scrub: 2
    }
});

aboutTl.from(".section2 h1 ", {  
    y: 50,
    opacity: 0,
    duration: 0.6,
    delay: 0.1,
});

const paragraphTl = gsap.timeline({scrollTrigger: {
    scroller: "body",
    trigger: ".section2 p:first-of-type",
    endTrigger: ".section2 p:last-of-type",
    start: "top 80%",
    end: "bottom 40%",
    scrub: 1
    }
});

paragraphTl.from(".section2 p", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 1
});


// Projects section
const projectsTl = gsap.timeline({scrollTrigger: {
    scroller: "body",
    trigger: ".section3 .items",
    start: "top 90%",
    end: "top 20%",
    scrub: 2
    }
});

projectsTl.from(".section3 .items", {
    x: -100,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    stagger: 0.8
});

// Contact section
const socialsTl = gsap.timeline({scrollTrigger: {
    scroller: "body",
    trigger: ".section4 h1",
    endTrigger: ".socials img",
    start: "top 80%",
    end: "top 80%",
    scrub: 2
    }
});

socialsTl.from(".socials img", {
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 2.5,
    stagger: 1
});

// animation for all h1 elements
gsap.utils.toArray("h1").forEach(heading => {
    gsap.to(heading, {
        scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
        },
        "--after-width": "100%",
        duration: 1,
        ease: "power1.in"
    });
});

function createSnowflake() {
    const snowflake = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    snowflake.setAttribute("viewBox", "-960 -960 1920 1920");
    snowflake.setAttribute("fill", "white");
    snowflake.style.width = "30px";
    snowflake.style.height = "30px";
    
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M440-80v-166L310-118l-56-56 186-186v-80h-80L174-254l-56-56 128-130H80v-80h166L118-650l56-56 186 186h80v-80L254-786l56-56 130 128v-166h80v166l130-128 56 56-186 186v80h80l186-186 56 56-128 130h166v80H714l128 130-56 56-186-186h-80v80l186 186-56 56-130-128v166h-80Z");
    
    snowflake.appendChild(path);
    snowflake.classList.add('snowflake');
    
    const startingX = Math.random() * window.innerWidth;
    snowflake.style.left = startingX + 'px';
    snowflake.style.top = '-20px';
    
    const container = document.querySelector('.snowfall-container');
    if (container) {
        container.appendChild(snowflake);
        
        // Animate
        gsap.to(snowflake, {
            y: '56vh',
            x: `+=${Math.random() * 100 - 50}`,
            rotation: Math.random() * 360,
            duration: 5 + Math.random() * 5,
            ease: "none",
            opacity: 0,
            onComplete: () => {
                snowflake.remove();
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    setInterval(createSnowflake, 300);
});

const mouseFollower = document.querySelector('.mouse-follower');



window.addEventListener('mousemove', (e) => {
    gsap.to(mouseFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
    });
});
