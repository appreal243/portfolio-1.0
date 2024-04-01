// --------------- Section active links ---------------
// Mendapatkan semua elemen <section>
const sections = document.querySelectorAll("section");

// Mendapatkan semua tautan navigasi di dalam elemen <nav> di dalam <header>
const navLinks = document.querySelectorAll("header nav a");

// Fungsi untuk menentukan tautan navigasi yang aktif
function setActiveNavLink() {
  const offset = window.innerHeight * 0.5; // Offset tambahan setengah tinggi jendela browser

  // Loop melalui setiap elemen <section>
  sections.forEach((section) => {
    // Mendapatkan posisi atas dan bawah dari setiap elemen <section> dengan offset tambahan
    const top = section.offsetTop - offset;
    const bottom = top + section.offsetHeight;

    // Mendapatkan id dari setiap elemen <section>
    const id = section.getAttribute("id");

    // Memeriksa apakah posisi scroll saat ini berada di dalam elemen <section>
    if (window.scrollY >= top && window.scrollY < bottom) {
      // Menghapus kelas 'active' dari semua tautan navigasi
      navLinks.forEach((link) => link.classList.remove("active"));

      // Menambahkan kelas 'active' ke tautan navigasi yang sesuai dengan elemen <section> yang sedang dilihat
      document
        .querySelector(`header nav a[href="#${id}"]`)
        .classList.add("active");
    }

    // --------------- Stiky header ---------------
    let header = document.querySelector("header");
    header.classList.toggle("stiky", window.scrollY > 100);

    // --------------- Remove Sidebar anda Icon Close ---------------
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
}

// Menjalankan fungsi setActiveNavLink saat terjadi peristiwa scroll
window.addEventListener("scroll", setActiveNavLink);

// Menjalankan fungsi setActiveNavLink saat halaman dimuat
document.addEventListener("DOMContentLoaded", setActiveNavLink);

// --------------- Slide Sidebar and Icon close ---------------
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed Js
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "UI/UX Design", "Backend Developer"],
  typeSpeed: 100, 
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
