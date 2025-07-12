// Toggle mobile navigation menu (if you implement a hamburger icon)
let menuIcon = document.querySelector('#menu-icon'); // Assuming you have an element with id="menu-icon" for your hamburger
let navbar = document.querySelector('.navbar'); // Assuming your navigation links are inside a div/nav with class="navbar"

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x'); // Changes icon from hamburger to 'X' and vice-versa
        navbar.classList.toggle('active'); // Toggles a class 'active' on the navbar to show/hide it
    };
}


// Scroll sections active link
let sections = document.querySelectorAll('section'); // Selects all section elements
let navLinks = document.querySelectorAll('header nav a'); // Selects all navigation links in the header

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjust 150px based on header height/offset
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active'); // Remove 'active' from all links
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Add 'active' to the current section's link
            });
        }
    });

    // Sticky header
    let header = document.querySelector('header'); // Selects the header
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100); // Adds 'sticky' class when scrolled down 100px
    }

    // Remove toggle icon and navbar when click navbar link (scroll)
    if (menuIcon && navbar) {
        // Only remove if menu is currently open
        if (menuIcon.classList.contains('bx-x')) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    }
};

// Close mobile menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuIcon && navbar) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});


// Scroll Reveal (for animations as you scroll) - activated!
// Make sure you have <script src="https://unpkg.com/scrollreveal"></script> in your HTML
ScrollReveal({
    reset: true, // Animations reset on scroll up/down
    distance: '80px', // How far elements travel
    duration: 2000, // Animation duration
    delay: 200 // Delay before animation starts
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// Typed.js (for typing animation effect for professions) - activated!
// Make sure you have <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script> in your HTML
const typed = new Typed('.multiple-text', { // Target the span with class="multiple-text"
    strings: ['Frontend Developer', 'Web Designer', 'UI/UX Designer', 'Creative Coder'], // Add your desired professions
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});