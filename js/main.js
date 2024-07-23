
window.addEventListener('load', () => {
    document.querySelector(".main img").style.opacity = 1
    document.querySelector(".main img").style.transform = 'scale(1)';
    document.querySelector(".introduction-text").style.opacity = 1;
    document.querySelector(".introduction-text").style.transform = 'scale(1)';

});

//  Select All Bullets 
let bullets = document.querySelectorAll(".bullets .bullet");

// Select All Links
let link = document.querySelectorAll(".links a")

// Scroll To AnyWhere
function ScrollToSectiones(element) {

    element.forEach(ele => {
        
        ele.addEventListener("click", e => {

        document.querySelector(e.target.dataset.section).scrollIntoView({behavior : "smooth"})
        
        })

    })

}

ScrollToSectiones(bullets)

ScrollToSectiones(link)

window.onscroll = () => {

//  Up Botton
    if(window.scrollY >= 450) {
        document.querySelector(".up").style.opacity = 1
    } else {
        document.querySelector(".up").style.opacity = 0
    }
}

document.querySelector(".up").onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}   

const sr = ScrollReveal({
    origin: "top",
    distance : "60px",
    duration: 1500,
    delay: 400,
    // reset: true
})

sr.reveal(".main-p", {prigin: "top", delay: 300})
sr.reveal(".main-title", {prigin: "top", delay: 300})
sr.reveal(".servic", {origin: "top", interval: 150})
sr.reveal(".industriet", {origin: "top", interval: 300})
sr.reveal(".contact-social", {origin: "left", interval: 300})
sr.reveal(".contact-data", {origin: "left", delay: 400})
sr.reveal(".contact-mail", {origin: "top", delay: 800})
sr.reveal(".about-us img", {origin: "left", delay: 400})
sr.reveal(".about-us .information", {origin: "right", delay: 550})
sr.reveal(".about-us .information", {origin: "top", delay: 550})
sr.reveal(".our-services .row div", {origin: "top", interval: 250})
sr.reveal(".section .information", {origin: "left", delay: 400})
sr.reveal(".section .image", {origin: "right", delay: 400})
sr.reveal(".section .box", {origin: "top", delay: 350})
sr.reveal(".button-33", {origin: "bottom", delay: 300})
sr.reveal(".section .information", {origin: "top", delay: 300})
sr.reveal(".section .mb-3", {origin: "left", interval: 130})
sr.reveal(".topreveal", {origin: "top", interval: 150})




