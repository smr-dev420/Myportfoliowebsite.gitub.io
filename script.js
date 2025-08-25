// ===== Menu Toggle (Responsive Navbar) =====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// ===== Scroll Active Link Highlight =====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // ===== Sticky Navbar =====
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // ===== Hide navbar on scroll (mobile view) =====
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  // ===== Show/Hide Scroll-to-top Button =====
  let scrollBtn = document.querySelector('.footer-icon');
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// ===== Scroll Reveal Animation =====
window.addEventListener("scroll", () => {
  let reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    let windowHeight = window.innerHeight;
    let revealTop = el.getBoundingClientRect().top;
    let revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

// ===== Contact Form Validation =====
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = form.name.value.trim();
  let email = form.email.value.trim();
  let phone = form.phone.value.trim();
  let subject = form.subject.value.trim();
  let message = form.message.value.trim();

  if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
    alert("⚠️ Please fill all fields!");
    return;
  }

  if (!/^[a-zA-Z ]+$/.test(name)) {
    alert("⚠️ Name should only contain letters!");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("⚠️ Enter a valid email address!");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("⚠️ Phone number must be 10 digits!");
    return;
  }

  alert("✅ Message Sent Successfully!");
  form.reset();
});

// ===== Typing Effect (For Home Section) =====
let typedText = document.querySelector(".home-content h3 span");
let words = ["Web Developer", "Graphics Designer",];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentWord = words[wordIndex];
  let displayed = currentWord.substring(0, charIndex);
  typedText.textContent = displayed;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

typeEffect();

// ===== Scroll Reveal =====
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 200
});


ScrollReveal().reveal('.home-content, .heading', { origin: "top" });

ScrollReveal().reveal('.about-img', { origin: "left" });
ScrollReveal().reveal('.about-content', { origin: "right" });

ScrollReveal().reveal('.service-box', { origin: "bottom", interval: 200 });


ScrollReveal().reveal('.skill-card', { origin: "top", interval: 150 });

ScrollReveal().reveal('.contact-form', { origin: "bottom" });


ScrollReveal().reveal('.footer', { origin: "top" });
