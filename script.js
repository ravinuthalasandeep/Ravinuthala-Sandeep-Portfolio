// ===============================
// MOBILE MENU
// ===============================

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");


// Open and close mobile menu
menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ===============================
// CLOSE MENU AFTER CLICKING LINK
// ===============================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ===============================
// SCROLL ANIMATION
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function (section) {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


// ===============================
// CURRENT YEAR
// ===============================

console.log(
    "Welcome to Ravinuthala Sandeep's Portfolio!"
);