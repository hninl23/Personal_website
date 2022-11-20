const stack = document.querySelector('nav svg');

stack.addEventListener('click', () => {
    if(stack.classList.contains("active")){
        gsap.to('.links', {x: '100%'});
        gsap.to(".line", {stroke: "white"});
        gsap.set('body', {overflow: "auto"});
        gsap.set('body', {overflowX: 'hidden'});
    } else {
        gsap.to('.links', {x: '0%'});
        gsap.to(".line", {stroke: "black", width: "1rem"});
        gsap.fromTo(".links a", {opacity: 0, y: 0}, {opacity: 1, y:20, delay: 0.50, stagger: .25});
        gsap.set('body', {overflow: "hidden"});
    }
    stack.classList.toggle("active");

    
});

const projects = gsap.utils.toArray('.flex_item');
gsap.set(projects, {opacity: 0});

projects.forEach(flex_item => {
    ScrollTrigger.create({
        trigger: flex_item,
        start: "top center",
        end: "center center",
        markers: true,
        onEnter: () => {
            gsap.to(flex_item, {opacity: 1});
        },
        onEnterBack: () => {
            gsap.to(flex_item, {opacity: 1});
        },
        onLeaveBack: () => {
            gsap.to(flex_item, {opacity: 0});
        },
    });
});


