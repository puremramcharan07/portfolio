console.log("Portfolio website loaded successfully!");

const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", function(e) {

    if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }

    if (cursorDot) {
        cursorDot.style.left = e.clientX + "px";
        cursorDot.style.top = e.clientY + "px";
    }

});


document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".about-section, .education-card, .tech-card, .project-card, .certificate-card, .achievement-card, .contact-item"
    );

    elements.forEach(function (element) {
        element.classList.add("reveal");
    });

    function revealOnScroll() {

        elements.forEach(function (element) {

            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Element viewport loki vachinappudu
            if (rect.top < windowHeight - 80 && rect.bottom > 80) {
                element.classList.add("show");
            }

            // Element viewport nundi painaki vellinappudu
            else if (rect.bottom <= 80) {
                element.classList.remove("show");
            }

            // Element viewport ki kindha unte
            else {
                element.classList.remove("show");
            }

        });
    }

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("resize", revealOnScroll);

    revealOnScroll();

});

// =========================
// ACTIVE NAVIGATION ON SCROLL
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});